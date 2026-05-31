-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database pokeswap;
use pokeswap;

CREATE TABLE usuario(
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    pais VARCHAR(50),
	estado VARCHAR(50)
) 	AUTO_INCREMENT = 1000;

CREATE TABLE cartas_salvas(
    id_carta INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario_id INT,
    carta_id VARCHAR(50),
    carta_nome VARCHAR(100),
    carta_tipo VARCHAR(50),
    carta_categoria VARCHAR(50),
    carta_raridade VARCHAR(50),
    carta_imagem VARCHAR(255),
    data_adicao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    descricao TEXT,
    FOREIGN KEY (fk_usuario_id) REFERENCES usuario(id_usuario)
);

CREATE TABLE forum_mensagens(
    id_mensagem INT PRIMARY KEY AUTO_INCREMENT,
    fk_carta INT,
    fk_usuario INT,
    mensagem VARCHAR(500),
    data_msg TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_carta) REFERENCES cartas_salvas(id_carta),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE cartas_gerais(
    id_publicacao INT PRIMARY KEY AUTO_INCREMENT,
    fk_carta INT,
    fk_usuario INT,
    descricao TEXT,
    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_carta) REFERENCES cartas_salvas(id_carta),
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);