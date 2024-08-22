create database carreiras;

use carreiras;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

CREATE TABLE user_candidato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_social VARCHAR(100) NOT NULL,
    nome_completo VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
	telefone VARCHAR(20),
	celular VARCHAR(20) NOT NULL,
    cpf CHAR(11) NOT NULL UNIQUE,
    cep CHAR(8) NOT NULL,
    rua VARCHAR(100) NOT NULL,
    numero INT NOT NULL,
    complemento VARCHAR(100) NOT NULL,
    bairro VARCHAR(45) NOT NULL,
    cidade VARCHAR(45) NOT NULL,
    estado CHAR(2) NOT NULL,
    senha VARCHAR(250) NOT NULL,    
    profissao VARCHAR(200),
    grupo VARCHAR(9) NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE formacao (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nivel VARCHAR(100) NOT NULL,
    lugar VARCHAR(100) NOT NULL,
    inicio DATE NOT NULL,
    termino DATE NOT NULL,
    id_candidato INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_candidato) REFERENCES user_candidato(id)
);

CREATE TABLE curso (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nivel VARCHAR(100) NOT NULL,
    lugar VARCHAR(100) NOT NULL,
    inicio DATE NOT NULL,
    termino DATE NOT NULL,
    id_candidato INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_candidato) REFERENCES user_candidato(id)
);

CREATE TABLE experiencia (
	id INT AUTO_INCREMENT PRIMARY KEY,
    cargo VARCHAR(100) NOT NULL,
    empresa VARCHAR(100) NOT NULL,
    contrato VARCHAR(100) NOT NULL,
    inicio DATE NOT NULL,
    termino DATE NOT NULL,
    id_candidato INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_candidato) REFERENCES user_candidato(id)
);

CREATE TABLE habilidade (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    id_candidato INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_candidato) REFERENCES user_candidato(id)
);

CREATE TABLE user_empresa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(255) NOT NULL,
    nome_fantasia VARCHAR(255) NOT NULL,
    cnpj CHAR(14) NOT NULL,
    inscricao_estadual VARCHAR(12),
    cep CHAR(8) NOT NULL,
    endereco VARCHAR(150) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    complemento VARCHAR(100),
    bairro VARCHAR(45) NOT NULL,
    cidade VARCHAR(45) NOT NULL,
    estado CHAR(2) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    celular VARCHAR(20),
    responsavel_legal VARCHAR(100) NOT NULL,
    cpf_responsavel CHAR(11) NOT NULL,
    contato_responsavel VARCHAR(20),
    senha VARCHAR(250) NOT NULL,
    grupo VARCHAR(7) NOT NULL,
    data_create DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE agendamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    vaga VARCHAR(45) NOT NULL,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    id_empresa INT NOT NULL,
    id_candidato INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_empresa) REFERENCES user_empresa(id),
    FOREIGN KEY (id_candidato) REFERENCES user_candidato(id)
);

CREATE TABLE vagas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(45) NOT NULL,
    localizacao TEXT NOT NULL,
    contrato VARCHAR(45) NOT NULL,
    modalidade VARCHAR(45) NOT NULL,
    remuneracao DECIMAL(10, 2),
    descricao TEXT NOT NULL,
    responsabilidades TEXT,
    habilidades_exigidas TEXT,
    habilidades_extras TEXT,
    beneficios TEXT,
    id_empresa INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_empresa) REFERENCES user_empresa(id)
);

CREATE TABLE vagas_etapas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    data_inicio DATE NOT NULL,
    data_termino DATE NOT NULL,
    id_vaga INT NOT NULL,
    id_empresa INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_vaga) REFERENCES vagas(id),
    FOREIGN KEY (id_empresa) REFERENCES user_empresa(id)
);

CREATE TABLE perfil (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255),
    formacao VARCHAR(100),
    curso VARCHAR(100),
    habilidades VARCHAR(255),
    experiencia VARCHAR(255),
    portfolio TEXT,
    id_user INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_user) REFERENCES user_candidato(id)
);

CREATE TABLE vagas_candidatadas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    id_vaga INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_user) REFERENCES user_candidato(id),
    FOREIGN KEY (id_vaga) REFERENCES vagas(id)
);

CREATE TABLE mensagem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(45),
    assunto TEXT NOT NULL,
    envio DATETIME NOT NULL,
    id_empresa INT NOT NULL,
    id_candidato INT NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (id_empresa) REFERENCES user_empresa(id),
    FOREIGN KEY (id_candidato) REFERENCES user_candidato(id)
);

CREATE TABLE user_admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(45) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    cpf CHAR(11) NOT NULL,
    senha VARCHAR(250) NOT NULL,
    celular VARCHAR(20),
    grupo VARCHAR(5) NOT NULL,
    data_atu DATETIME DEFAULT CURRENT_TIMESTAMP
);

select * from user_candidato;
DELETE FROM user_candidato WHERE id in (1, 2, 3);
DELETE FROM user_candidato WHERE id > 0;

