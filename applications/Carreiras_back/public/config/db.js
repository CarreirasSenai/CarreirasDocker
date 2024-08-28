const mysql = require('mysql2');

// Criação de uma conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'mysql', 
  user: 'root',
  password: 'root', 
  database: 'carreiras', 
  charset: 'utf8mb4'
});

// Conecta-se ao banco de dados
db.connect((err) => {
  if (err) {
    // Se houver um erro ao conectar, exibe o erro no console
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  // Se a conexão for bem-sucedida, exibe uma mensagem de sucesso no console
  console.log('Conexão com o banco de dados estabelecida');
});

module.exports = db;