anotações pessoais...

# Insert

- Backticks ou crase (``): são usadas para identificar nome de tabelas e colunas. São necessárias apenas quando o identificador for uma palavra reservada do MySQL, ou quando o nome da tabela ou coluna contiver espaços em branco.

- Aspas simples (''): devem ser usadas em valores do tipo string. Aspas simples são aceitas na maioria dos sistemas de gerenciamento de banco de dados, sendo assim, é preferível usar aspas simples no lugar das aspas duplas.

Sintax para inserir dados em uma tabela:
```
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');
```
