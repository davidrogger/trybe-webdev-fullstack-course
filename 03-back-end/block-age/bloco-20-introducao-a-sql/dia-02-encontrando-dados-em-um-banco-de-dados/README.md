anotações pessoais do dia...

# Principais tipos de queries

Em banco de dados você pode trazer dados e alterá-los, atribuir permissões e manipualçao entre mais possibilidades.

## DDL

Data Definition Language - Todos os comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados:

- CREATE: Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers;
- ALTER: Para laterar a estrutura de qualquer objeto;
- DROP: Permite deletar objetos;
- TRUNCATE: Apenas esvazia os dados dentro de uma tabela, mais a mantém no banco de dados.

## DML

Data Manipulation Language - Comandos que são usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados. Os comandos e usos mais comuns nesta categoria são:

- SELECT: Usado para buscar dados em um banco de dados;
- INSERT: Insere dados em uma tabela;
- UPDATE: Altera dados dentro de uma tabela;
- DELETE: Excluir dados de uma tabela.

## DCL

Data Control Language - Mais focado nos comandos que concedem direitos, permissões e outros tipos de controle ao sistema de banco de dados.

- GRANT: Concede acesso a um usuário;
- REVOKE: Remove acessos concedidos através do comando GRANT.

## TCL

Transactional Control Language - Lida com as transações dentro de suas pesquisas.

- COMMIT: Muda suas alterações temporárias para permanentes no seu banco de dados.
- ROLLBACK: Desfaz todo o impacto realizado por um comando;
- SAVEPOINT: Define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query;
- TRANSACTION: Comandos que definem onde, como e em que escopo suas transações são executadas.

# Parafixar

1. Monte uma query que exiba seu nome na tela;

`SELECT 'David' AS name;`

2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;

`SELECT 'David' AS name, 'Arruda' AS lastname, 'Boituva' AS birthcity, 33 AS age;`

3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);

`Already done in the up question.`

4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;

`SELECT 13 * 8;`

5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

`SELECT now() AS 'Data Atual;`

# Parafixar2

`USE sakila;`

1. Escreva uma query que selecione todas as colunas da tabela city;

`SELECT * FROM city;`

2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;

`SELECT first_name, last_name FROM customer;`

3. Escreva uma query que exiba todas as colunas da tabela rental;

`SELECT * FROM rental;`

4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
[Comando para visualizar as colunas de uma tabela](https://stackoverflow.com/questions/1526688/get-table-column-names-in-mysql)

```
SHOW COLUMNS FROM filme;
SELECT title, description, release_year FROM film;
```

5. Utilize o SELECT para explorar todas as tabelas do banco de dados.
```
SHOW TABLES;
SELECT * FROM <tables que você quiser> resposta ótima do gabarito
```

# Parafixar CONCAT

1. Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.

`SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme FROM sakila.film;`

2. Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

`SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film;`

3. Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.

`SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address;`

# Parafixar DISTINCT

1. Monte uma query para encontrar pares únicos de nomes e idades.

`SELECT DISTINCT nome, idade FROM Escola.Estudantes;`

2. Quantas linhas você encontraria na query anterior?

`5`

3. Monte uma query para encontrar somente os nomes únicos.

`SELECT DISTINCT nome FROM Escola.Estudantes;`

4. Quantas linhas você encontraria na query anterior?

`4`

5. Monte uma query para encontrar somente as idades únicas.

`SELECT DISTINCT idade FROM Escola.Estudantes;`

Quantas linhas você encontraria na query anterior?

`4`

# Parafixar COUNT

![BD sakila](/03-back-end/bloco-20-introducao-a-sql/20.imagens/sampleSelect1.png)

1. Quantas senhas temos cadastradas nessa tabela?

`SELECT COUNT(password) FROM sakila.staff;`

2. Quantas pessoas temos no total trabalhando para nossa empresa?

`SELECT COUNT(staff_id) FROM sakila.staff;`

3. Quantos emails temos cadastrados nessa tabela?

`SELECT COUNT(email) FROM sakila.staff;`

# LIMIT

É um parametro, para determinar um limite de visualização.
Exemplo, para limitar os 10 primeiros valores;

`SELECT * FROM sakila.rental LIMITE 10;`

Ele irá mostrar apenas as 10 primeiras linhas da tabela rental.

# LIMIT OFFSET

É usado para pular linhas do resultado.
Exemplo, para pular os 3 primeiro valores da mesma busca anterior, exibindo apenas 10 resultados;

`SELECT * FROM sakila.rental LIMITE 10 OFFSET 3;`

Apresentaria 10 linhas, pulando as 3 primeiros.

# ORDER BY

Para ordenar as linhas de forma ascendente e descendente é usado o comando ORDER BY a seguir:
Usando a tabela de estudantes anterior.

`SELECT * FROM Escola.Estudantes`
```
'Rafael', '25'
'Amanda', '30'
'Roberto', '45'
'Carol', '19'
'Amanda', '25'
```

`SELECT * FROM Escola.Estudante ORDER BY nome ASC;`

```
'Amanda', '30'
'Amanda', '25'
'Carol', '19'
'Rafael', '25'
'Roberto', '45'
```

Queremos que os alunos mais novos apareçam primeiro de forma ordenada por nome:

`SELECT * FROM Escola.Estaudante ORDER BY nome ASC, idade ASC;`

```
'Amanda', '25'
'Amanda', '30'
'Carol', '19'
'Rafael', '25'
'Roberto', '45'
```

Caso não seja declarada a ordem, por padrão ele orderna de forma ascendente, então o código poderia ficar assim:

`SELECT * FROM Escola.Estudante ORDER BY nome, idade;`

# Exercício Geral

tabela sakila.film

1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.

`SELECT * FROM sakila.film;`

2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.

`SELECT title, release_year, rating FROM sakila.film;`

3. Quantos filmes temos cadastrados?

`SELECT COUNT(*) FROM sakila.film;`

- Para os exercícios a seguir, vamos usar a tabela sakila.actor:

4. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.

`SELECT DISTINCT(last_name) FROM sakila.actor;`

5. Quantos sobrenomes únicos temos na tabela?

`SELECT COUNT(DISTINCT last_name) FROM sakila.actor;`

6. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.

`SELECT * FROM sakila.actor ORDER BY last_name, fist_name DESC;`

- Usando a tabela language:

7. Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.

`SELECT * FROM sakila.language LIMITE 5 OFFSET 1;`

- Usando a tabela film:

8. Selecione todos os dados da tabela. 
    - Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

```
SELECT title, release_year, length, rating, replacement_cost
FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMITE 20;
```

# Exercicio Final

Exercício 1: Faça as tarefas de 1 a 15.
Para realizar os exercícios do 1 ao 15, restaure o seguinte banco de dados:
```
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".

`SELECT 'This is SQL Exercise, Practice and Solution';`

2. Escreva uma query para exibir três números em três colunas.

`SELECT 1 AS numberOne, 2 AS numberTwo, 3 AS numberThree;`

3. Escreva uma query para exibir a soma dos números 10 e 15.

`SELECT 10 + 15;`

4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.

`SELECT 10 * 5;`

5. Escreva uma query para exibir todas as informações de todos os cientistas.

`SELECT * from Scientists`

6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
```
SELECT Name AS 'Name do Projeto, Hours AS 'Tempo de Trabalho'
FROM Scientists.Projetcs;
```
7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.

`SELECT Name FROM Scientists ORDER BY Name;`

8. Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
```
SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;
```
9. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.

```
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.')
AS 'Conclusão dos Projetos'
FROM Scientists.Projects;
```

10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
```
SELECT Name, Hours
FROM Scientists.Projects
ORDER BY Hours DESC
LIMITE 3;
```
11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.

`SELECT DISTINCT(Project) FROM Scientists.AssignedTo;`

12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
```
SELECT Name
AS 'Maior quantidade de horas'
FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1;
```

13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
```
SELECT Name AS 'Segundo Maior quantidade de horas'
FROM Scientists.Projects
ORDER BY Hours ASC
LIMIT 1
OFFSET 1;
```
14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
```
SELECT *
FROM Scientists.Projects
ORDER BY Hours
LIMIT 5;
```
15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
```
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientsts.')
AS 'Frase'
FROM Scientists;
```