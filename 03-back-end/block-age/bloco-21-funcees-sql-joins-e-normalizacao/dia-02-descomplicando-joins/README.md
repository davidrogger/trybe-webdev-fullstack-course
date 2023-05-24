anotações pessoais do dia...

# Inner Join

Permite retornar todos os resultados em que a condição da cláusula ON for satisfeita. A sintaxe de um INNER JOIN é a seguinte:
```
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;
```

# Para fixar:

1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou, usando as tabelas actor e film_actor.
```
SELECT act.actor_id, act.first_name, film.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film AS film;
```
2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
```
SELECT staff.first_name, staff.last_name, address.address
FROM sakila.staff AS staff
INNER JOIN sakila.address AS address
ON staff.address_id = address.address_id;
```
3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
```
SELECT cus.customer_id, cus.first_name, cus.email, `add`.address_id, `add`.address
FROM sakila.customer AS cus
INNER JOIN sakila.address AS `add`
ON cus.address_id = `add`.address_id
ORDER BY cus.first_name DESC;
```
4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
```
SELECT cus.first_name, cus.email, `add`.address_id, `add`.address, `add`.district
FROM sakila.customer AS cus
INNER JOIN sakila.address AS `add`
ON `add`.district = 'california' AND cus.first_name LIKE '%rene%'
ORDER BY cus.first_name DESC;
```
5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
```
SELECT cus.first_name, COUNT(a.address)
FROM sakila.customer cus
INNER JOIN sakila.address AS a ON a.address_id = cus.address_id
WHERE cus.active = 1
GROUP BY cus.customer_id
ORDER BY first_name DESC, last_name DESC;
```
6. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
```
SELECT CONCAT(s.first_name, ' ', s.last_name) AS full_name, AVG(p.amount) AS avg_payment
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p ON p.staff_id = s.staff_id
WHERE YEAR(payment_date) = 2006
GROUP BY full_name;
```
7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
```
SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f ON fa.film_id = f.film_id;
```

# LEFT JOIN e RIGHT JOIN

Quando há uma certa diferença na quantidade de informação realizando o join entre tabelas, podemos definir uma tabela "principal" a tabela da esquerda LEFT é a tabela inicial indicado no FROM e a tabela da direita é a que realizamos o JOIN
```
SELECT colunas
FROM banco.tabela -- ESQUERDA
INNER || LEFT || RIGHT JOIN banco.tabela -- DIREITA
```

Quando definimos a esquerda, damos prioridades as linhas formadas pela tabela da esquerda, quando indicamentos a direita, é formulada as linhas com a direita como base.

# SELF JOIN

É possível fazer pesquisas e comparações dentro da própria tabela através do SELF JOIN.
É usado em casos em que uma tabela faz join consigo mesma. Você pode utilizar qualquer dos tipos de JOIn vistos para realizar um SELF JOIN.

Utilizando o schema hr como exemplo, se quisermos buscar o nome das pessoas colaboradoras e das respectivas gerências (manager), podemos montar a seguinte query usando SELF JOIN:
```
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;
```

# Para fixar:

Para fixar esses conceitos, tente encontrar as seguintes informações, utilizando o schema hr:

1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
```
SELECT
    CONCAT(e.FIRST_NAME, " ", e.LAST_NAME) AS "Funcionario",
    CONCAT(m.FIRST_NAME, " ", m.LAST_NAME) AS "Gerente"
FROM
	hr.employees AS e
INNER JOIN
	hr.employees AS m ON e.MANAGER_ID = m.EMPLOYEE_ID
WHERE e.department_id <> m.department_id;
```
2. Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
```
SELECT * FROM hr.employees;
SELECT
	CONCAT(m.first_name, ' ', m.last_name) AS Gerente,
    COUNT(e.EMPLOYEE_ID) AS 'Quantidade de Funcionarios'
FROM hr.employees AS e
INNER JOIN hr.employees AS m ON e.MANAGER_ID = m.EMPLOYEE_ID
GROUP BY Gerente;
```

# UNION e UNION ALL

Usado para unir informações de diferentes tabelas:
```
SELECT first_name, last_name FROM sakila.actor
UNION
SELECT first_name, last_name from sakila.customer;
```

Seguindo a sintaxe superior, seria retornado a união das duas tabelas, ignorando repetições, para fazer uma copia ignorando repetições seria usado o UNION ALL.

Durante a união deve-se conter a mesma quantidade de colunas para o union funcionar.

# Para fixar:

1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor, exibindo apenas o nome e o sobrenome. Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
```
(SELECT first_name, last_name FROM sakila.actor)
UNION ALL
(SELECT first_name, last_name FROM sakila.staff);
```
2. Monte uma query que una os resultados das tabelas customer e actor, exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor. Exiba apenas os resultados únicos.
```
(SELECT first_name FROM sakila.customer WHERE first_name LIKE '%tracy%')
UNION
(SELECT first_name FROM sakila.actor WHERE first_name LIKE '%je%');
```
3. Monte uma query que exiba a união dos cinco últimos nomes da tabela actor, o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer. Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
```
(SELECT first_name FROM sakila.actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15);
```
4. Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
```
(SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM sakila.actor)
UNION ALL
(SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM sakila.customer)
ORDER BY full_name
LIMIT 15 OFFSET 63;
```

# Subquery

Ela é uma query aninhada que é availiada dentro de um par de parênteses. Ela pode conter expressões simples, como adições e subtrações, mas não se limite a isso, uma vez que podemos utilizar praticamente todos os comandos já vistos até o momento dentro de uma subquery.

## Usando uma SUBQUERY como fonte de dados para o FROM.
```
SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;
```

## Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY.
```
SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;
```

## Filtrando resultados com WHERE usando como base os dados retornados de uma subquery
```
SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);
```

## Usando uma tabela externa, de fora da SUBQUERY, dentro dela.
```
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;
```

# Subquery ou JOIN

Por meio do JOIN poderia ser também feitas as consultas anteriores, então cabe a escolha entre um e outro dependendo de sua afinidade e por performance da busca, usando o execution plan, existem outras formas.

# Stored Procedures, stored functions e triggers

Podem te ajudar a seguir um conceito de programação chamado DRY, que preza pela redução de código repetido, quando possível.

Podemos armazenar blocos de código para serem usados psoteriormente no MySQL de duas maneiras:

1. Stored Procedure
2; Stored Function

Como o próprio nome ja diz, o código fica armazenado no servidor do banco de dados para que possa ser utilizado sem a necessidade de reescrever uma funcionalidade.

Para tonar a leitura do código mais fácil e a manutenção simples, siga o seguinte padrão ao nomear suas procedures e functions:
```
-- Verbo + Resultado

ObterTotalDeVendas
ExibirRankMaximo
ObterClienteMaisAtivo
CalcularNivelEngajamento
MontarNomeCompleto
```
## Stored Procedures
Pontos fortes:

- Centraliza o código SQL em um servidor de banco de dados, o que possibilita que a manutenção das queries seja feita diretamente no servidor. Assim, mudanças são refletidas imediatamente em aplicações que utilizam o banco de dados sem haver a necessidade de refazer o deploy;
- Evita a necessidade de reescrever algo específico para cada linguagem, plataforma ou framework;
- Propaga mudanças feitas em uma stored procedure imediatamente para todas as aplicações que a usam, reduzindo a necessidade de refatorar o código em todos os ambientes que tuilizam o banco de dados.

Pontos fracos:

- Viola um dos princípios de separation of concerns, diz respeito a focar em resolver um único problema na sua regra de negócio, dados e apresentações permitindo então estarem separados e desacoplados, uma vez que stored procedures podem conter regras de negócio e ficam armazenadas no banco de dados.
- Debugar esse código armazenado é mais difícil
- Não há como versionar o código de uma stored procedure tão facilmente

## Estrutura padrão de um stored procedure
```
USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário
```

Procedure sem parâmetros:
Normalmente usado para realizar queries mais simples.
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAllActors()
BEGIN
    SELECT * FROM sakila.actor;
END $$

DELIMITER ;
```
Para chamar o procedure

`CALL ShowAllActors();`

# Elementos da Stored Procedures

1. Delimiter: A palavra-chave DELIMITER é usada para definir qual símbolo representa o final da procedure declarada. No exemplo foi usado $$, porém é permitido usar outros símbolos como || ou até mesmo ; para retornar ao DELIMITER como padrão default. Não é permitido usar \, pois é um caracter especial do MySQL.
O DELIMITER precisa ser usado para que o MySQL não interprete o primeiro ponto e vírgula encontrado como o final da declaração na sua procedure.

2. Variáveis: O MySQL possui a funcionalidade de criar e usar variáveis, assim como em outras linguagens de programação.
Essas variáveis também podem ser usadas em procedures.
No MySQL existem três principais tipos de variáveis, sendo elas:
- User-defined variable;
- Local Variable;
- Server System Variable

A forma mais comum é por meio da User-defined variable que para criar variáveis e atribuir valores a elas, você pode fazer da seguinte maneira:
```
SET @my_school = 'BeTrybe';
SELECT @my_school;
```

3. Tipos de dados: Existem vários tipos de dados no MySQL que vão além de apenas numéricos e strings.
- Tipo de valor que representa;
- O Espaço ocupado e se possui comprimento fixo ou variável;
- Se os valores podem ser indexados ou não;
- Comparação de valores de um tipo de dado específico pelo MySQL

Os principais tipos de dados do MySQL são:

Tipos de String
- VARCHAR: Uma string não binária de comprimento variável;
- CHAR: Uma string não binária (caractere) de comprimento fixo;
- TEXT: Uma pequena string não binária.

Tipos Numéricos
- TYNINT: Um número inteiro muito pequeno;
- INT: Um inteiro padrão;
- BIGINT: Um grande número inteiro;
- DECIMAL: Um número de ponto fixo.

# Construindo a primeira stored procedure

Tipos:
- Procedure sem parâmetros;
- Procedure com parâmetros de entrada (IN);
- Procedure com parâmetros de saída (OUT);
- Procedure com parâmetros de entrada e saída(INOUT)

Exemplo: Foi criada uma procedure que recebe como parâmetro uma sílaba (syllable) e busca na tabela actor todos atores quem contêm aquela sílaba no nome.
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:

CALL ShowActorsWithSyllable('lope');
```

# Procedure com parâmetros de saida (OUT)

É útil quando é preciso que algo seja avaliado ou encontrando dentro de uma query e te retorne esse valor para que algo adicional possa ser feito.

Exemplo: Estamos recebendo aqui o título de um filme como valor de entrada e depois buscando dentro da procedure a duração média de um empréstimo daquele filme. Feito isso, ele é inserido em uma variável que pode ser usada posteriormente.
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:

CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;
```

# Procedure com parâmetros de entrada-saida (INTOUT)

É usado quando necessário que um parâmetro possa ser modificado tanto antes como durante a execução de um procedure.

Exemplo: Estamos gerando um novo nome para um filme, usando como base a variável film_name, que deve ser criada e passada como parâmetro para a procedure. O parâmetro sofrerá alterações dentro da procedure, podendo ser usado posteriormente com o novo nome.
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:

SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;
```

# Desafios stored procedure

Para todos os desafios abaixo, certifique-se de que a função possa ser chamada e o resultado dela seja usado corretamente. Utilize o banco de dados sakila.

1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE TenPopularActors()
BEGIN
	SELECT actor_id, COUNT(*) AS total_films FROM sakila.film_actor
	GROUP BY actor_id
    ORDER BY total_films DESC
    LIMIT 10;
END $$
DELIMITER ;
CALL TenPopularActors();
```
2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme, seu titulo, o id de sua categoria e o nome da categoria selecionada. Use as tabelas film, film_category e category para montar essa procedure.
```
USE sakila
DELIMITER $$

CREATE PROCEDURE filmByCategory(IN category VARCHAR(100))
BEGIN
	SELECT fc.film_id, fi.title, ca.category_id
	FROM sakila.category AS ca
	INNER JOIN sakila.film_category AS fc ON ca.category_id = fc.category_id
	INNER JOIN sakila.film AS fi ON fi.film_id = fc.film_id
	WHERE ca.`name` = category;
END $$
DELIMITER ;
CALL filmByCategory('animation');
```
3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

a