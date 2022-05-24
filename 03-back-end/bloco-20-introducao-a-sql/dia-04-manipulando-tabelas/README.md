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

## Alterando mais de uma coluna ao mesmo tempo

Basta inserir o nome da coluna que seja alterar, em seguida definir o id do usuário.
```
UPDATE sakila.staff
SET first_name = 'David', last_name = 'Rogger'
WHERE staff_id = 1;
```

## Update em massa

```
-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);
```

[Link com mais informações sobre o case](https://www.w3schools.com/sql/func_mysql_case.asp)

## Fazendo um UPDATE de forma sequencial

Se o comando ORDER BY for usado juntamente com o UPDATE, os resultados serão alterados na ordem em que forem encontrados.

Se o comando LIMIT for usado em conjunto com o UPDATE, um limite será imposto na quantidade de resultados que podem ser alterados. Caso Contrário, todos os resultados que satisfizerem a condição serão atualizados.

Os valores entre colchetes([]) são opcionais:
```
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna 2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC]]
[LIMIT quantidade_resultados];

UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;
```

## --safe-updates

A opção --safe-updates exige que o mysql execute a seguinte instrução ao se conectar ao servidor:
```
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
```

- sql_select_limit=1000: limita o conjunto de resultados SELECT a 1.000 linhas, a menos que a instrução inclua LIMIT.

- max_join_size=1.000.000: faz com que as instruções SELECT de várias tabelas produzam um erro se o servidor estimar que deve examinar mais de 1.000.000 combinações de linhas.

Você pode desabilitar o --safe-updates utilizando o comando SET:
```
SET SQL_SAFE_UPDATES = 0;
```

Ou configurar para um modo mais conveniente para você, alterando os valores das variáveis:
```
SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;
```

# Parafixar

1. Atualize todas as linhas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
```
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'julia';
```
2. Altere a linha da tabela categoria onde o valor da coluna x é igual "Sci-fi" para "Science Fiction".
```
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';
```
3. Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que possuem classificação "G", "PG" ou "PG-13" e um custo de substituição maior que $20.
`Não existe columa rental_cost usei replacement_cost como coluna de substituição.`
```
UPDATE sakila.film
SET replacement_cost = 25
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;
```
4. Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel dos filmes com duração acima de 100 minutos passará a ser de $20,00.
```
UPDATE sakila.film
SET replacement_cost = (
CASE 
  WHEN length BETWEEN(0) AND (100) THEN 10
	WHEN length > 100 THEN 20
ELSE replacement_cost
END);
```

## DELETE

Não necessariamente itens que foram excluidos, foram excluidos, pois por normais para necessidade de relatórios eles ficam em estado de inativo ou até como excluidos, sem serem necessariamente removidos do local.

Sintaxe:

DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.

Exemplo:
```
DELETE FROM sakila.film
WHERE title = 'ACADEMY DINOSAUR';
```

## DELETE Não permitido

Caso haja relações entre as tabelas (primary key e foreign keys) e existam restrições aplicadas a elas, ao executar o DELETE ocorrerá uma ação de acordo com a restrição que tiver sido imposta na criação da foreign key. Essas restrições podem ser as seguintes:
```
-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;
```

Exemplo:
```
DELETE FROM sakila.actor
WHERE first_name = 'GRACE';
```

O banco de dados não vai permitir que você delete o ator chamado "GRACE". Isso acontece porque a coluna actor_id da tabela film_actor é uma chave estrangeira (foreign key) que aponta para a coluna actor_id na tabela actor, e essa chave estrangeira possui a restrição ON DELETE RESTRICT. Se essa restrição não existisse, o ator seria deletado, deixando nosso banco de dados em um estado inconsistente, pois haveria linhas na tabela film_actor com um actor_id que não mais existiria!
Para conseguir excluir este ator em actors, precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor:
```
DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE
```

Após excluir as referências, podemos excluir o ator com o nome "GRACE":
