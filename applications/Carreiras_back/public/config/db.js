const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'carreiras-mysql-1',
  user: 'root',
  password: 'root',
  database: 'carreiras'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

module.exports = connection;
