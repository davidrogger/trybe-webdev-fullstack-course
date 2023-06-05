DROP SCHEMA IF EXISTS normalization;
CREATE DATABASE normalization;
USE normalization;
CREATE TABLE funcionario(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    telefone VARCHAR(50),
    data_cadastro TIMESTAMP NOT NULL
) ENGINE=InnoDB;
CREATE TABLE setor(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(50) NOT NULL
) ENGINE=InnoDB;
CREATE TABLE funcionario_setor(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(id),
    FOREIGN KEY (setor_id) REFERENCES setor(id)
) ENGINE=InnoDB;

INSERT funcionario(id, nome, sobrenome, email, telefone, data_cadastro) VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
	(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
	(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
	(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT setor(setor) VALUES
	('administração'),
    ('vendas'),
    ('operacional'),
    ('estratégico'),
    ('marketing');
    
INSERT funcionario_setor(funcionario_id, setor_id) VALUES
	(12, 1),
    (12, 2),
    (13, 3),
    (14, 4),
    (15, 5);
    