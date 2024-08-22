const db = require('../config/db');

// Create
exports.createUser = (nomeSocial, nomeCompleto, email, phone, cellphone, cpf, cep, rua, numCasa, complemento, bairro, cidade, estado, password, profissao, grupo, dataAtu, callback) => {

    // Verificar se o email já existe
    db.query('SELECT * FROM user_candidato WHERE email = ?', [email], (err, results) => {
        if (err) {
            // Se houver um erro na consulta, retornar o erro no callback
            return callback(err, null);
        }
        if (results.length > 0) {
            // console.log('Este email já foi cadastrado!');
            return callback(new Error('E-mail já cadastrado! Tente usar outro endereço de e-mail.'), null);
        }

        db.query('SELECT * FROM user_candidato WHERE cpf = ?', [cpf], (err, results) => {
            if (err) {
                // Se houver um erro na consulta, retornar o erro no callback
                return callback(err, null);
            }
            if (results.length > 0) {
                // console.log('Este email já foi cadastrado!');
                return callback(new Error('Este CPF já foi cadastrado!'), null);
            }

            db.query(
                'INSERT INTO user_candidato (nome_social, nome_completo, email, telefone, celular, cpf, cep, rua, numero, complemento, bairro, cidade, estado, senha, profissao, grupo, data_atu) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [nomeSocial, nomeCompleto, email, phone, cellphone, cpf, cep, rua, numCasa, complemento, bairro, cidade, estado, password, profissao, grupo, dataAtu],
                (err, result) => {

                    if (err) {
                        // Se houver um erro na inserção, retornar o erro no callback
                        console.log(err);
                        return callback(err, null);
                    }
                    // Se a inserção for bem-sucedida, retornar o ID do novo registro
                    callback(null, result.insertId);
                }
            );
        });
    });
};

// Read
exports.getUser = (id, callback) => {
    db.query('SELECT * FROM user_candidato WHERE id = ?', [id], (err, rows) => {
        if (err) {
            return callback(err, null);
        }

        return callback(null, rows.length > 0 ? rows[0] : null);
    });
};

// Login
exports.getLogin = (email, password, callback) => {
    db.query('SELECT * FROM user_candidato WHERE email = ? AND senha = ?', [email, password], (err, rows) => {
        if (err) {
            return callback(err, null);
        }

        // Retorna o primeiro usuário encontrado ou null se nenhum usuário for encontrado
        return callback(null, rows.length > 0 ? rows[0] : null);
    });
};

// Update
exports.updateUser = (id, nome, email, senha, foto, descricao, callback) => {
    db.query('UPDATE users SET nome = ?, email = ?, senha = ?, foto = ?, descricao = ? WHERE id = ?', [nome, email, senha, foto, descricao, id], (err, result) => {
        if (err) throw err;
        callback(result.affectedRows > 0);
    });
};

// Delete
exports.deleteUser = (id, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        callback(result.affectedRows > 0);
    });
};

