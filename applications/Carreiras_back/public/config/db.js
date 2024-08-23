const mysql = require('mysql2');

// Criação de uma conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost', // Host do banco de dados
  user: process.env.DB_USER || 'root', // Nome de usuário do banco de dados
  password: process.env.DB_PASS || 'root', // Senha do banco de dados
  database: process.env.DB_NAME || 'carreiras', // Nome do banco de dados
  charset: 'utf8mb4' // Especifique a codificação UTF-8
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
