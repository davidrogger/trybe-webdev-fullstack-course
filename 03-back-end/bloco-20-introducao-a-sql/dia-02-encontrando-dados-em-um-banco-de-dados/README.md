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
SELECT title, description, release_year FROM filme;
```

5. Utilize o SELECT para explorar todas as tabelas do banco de dados.
```
SHOW TABLES;
SELECT * FROM <tables que você quiser> resposta ótima do gabarito
```

# Parafixar3

1. Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.

`SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme FROM sakila.film;`

2. Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

`SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film;`

3. Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.

`SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address;`
