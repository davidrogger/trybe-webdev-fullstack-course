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
