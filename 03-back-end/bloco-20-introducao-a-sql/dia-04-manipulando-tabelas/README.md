anotações pessoais...

# Insert

- Backticks ou crase (``): são usadas para identificar nome de tabelas e colunas. São necessárias apenas quando o identificador for uma palavra reservada do MySQL, ou quando o nome da tabela ou coluna contiver espaços em branco.

- Aspas simples (''): devem ser usadas em valores do tipo string. Aspas simples são aceitas na maioria dos sistemas de gerenciamento de banco de dados, sendo assim, é preferível usar aspas simples no lugar das aspas duplas.

Sintax para inserir dados em uma tabela:
```
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');
```

## Inserindo várias linhas de uma vez

Inserindo múltiplas linhas em uma tabela com uma única query:
```
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1', 'valor_2'),
('valor_3', 'valor4'),
('valor_5', 'valor_6');
```

## Ignorando linhas existentes

| id | name |
| --- | --- |
| 1 | Nissim |
| 2 | Garrison |
| 3 | Benjamin |
| 4 | Gloria |
```
INSERT IGNORE INTO pessoas (id, name) VALUES
(4, 'Gloria'),
(5, 'Amanda');
```

Caso não fosse usado o ignore ele retornaria um erro, e não iria inserir a Amanda, com ignore ele ignora a parte com erro, e adicionaria o valor.

## Inserindo valores em colunas com auto_increment

Colunas que possui auto_increment é omitida no INSERT, caso fosse inserido na tabela superior id como auto_increment, seria inserido somente o nome, e ele seguiria a contagem incremental.

## INSERT SELECT (Inserindo dados de uma outra tabela)

É possivel inserir dados a partir de outro tabela usando o INSERT INTO SELECT:
```
INSERT INTO tabelaA (coluna1, coluna2)
  SELECT tabelaB.coluna1, tabelaB.coluna2
  FROM tabelaB
  WHERE tabelaB.nome_da_coluna <> 'algumvalor'
  ORDER BY tabelaB.coluna_de_ordenacao;

```

# Parafixar

1. Insira um novo funcionário na tabela sakila.staff.
Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
```
INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username)
VALUES ('David', 'Rogger', 2, 1, 1, 'dvd');
```
2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
```
INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username) VALUES
('Jonas', 'Thirsty', 2, 1, 1, 'jthir'),
('Emanuel', 'delavants', 1, 1, 1, 'emavants');
```
3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
```
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    LIMIT 5;
```
4. Cadastre três categorias de uma vez só na tabela sakila.category.
```
INSERT INTO sakila.category (name) VALUES
('Koreama'),
('Slice of life'),
('Isekai');
```
5. Cadastre uma nova loja na tabela sakila.store.
```
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES
(5, 10);
```

# UPDATE

| staff_id | first_name | last_name |
| --- | --- | --- |
| 1 | Devidi | Nizuk |

Sintaxe:
```
UPDATE sakila.staff
SET first_name = 'David'
WHERE first_name = 'Deividi'
```
```
UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!
```

Uma curiosidade sobre o UPDATE e o DELETE no MySQL Server é que, por padrão, existe uma configuração chamada safe updates mode que só vai te permitir executá-los caso eles incluam quais ID's devem ser modificados.

Para evitar essa restrição deve-se usar o seguinte comando: `SET SQL_SAFE_UPDATES = 0`
