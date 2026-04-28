create database Projeto_Individual;

use Projeto_Individual;

Create Table Usuario(
ID_usuario Int Primary Key Auto_Increment,
Nome Varchar(100) Not Null,
Email Varchar(100) Not Null Unique,
Telefone Char(14) Not Null Unique,
CPF Char(11) Not Null Unique,
Senha Varchar(100) Not Null
) Auto_Increment = 1000;

Create Table Endereco(
Estado Varchar(100) Not Null,
Cidade Varchar(100) Not Null,
Bairro Varchar(100) Not Null,
FK_Usuario Int Primary Key Not Null,
Foreign Key (FK_Usuario) References Usuário (ID_Usuario)
);

Create Table Cartas(
ID_carta Int Not Null auto_Increment,
Nome Varchar(100) Not Null,
Classificao Varchar(20) Not Null,
Descricao_Da_Classificacao Varchar(100) Not Null,
Qualidade Varchar(100) Not Null,
Descricao Varchar(300) Not Null,
FK_Carta Int Not Null,
Primary Key (FK_Carta, ID_Carta),
Foreign Key (FK_Carta) References Usuario (ID_Usuario)
);
