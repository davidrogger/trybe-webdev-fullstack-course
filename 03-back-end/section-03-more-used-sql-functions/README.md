anotações pessoais do bloco...

#

O MySQL possui funções de manipulação de texto para certificar que os dados estão coerentes, normalizados e cadastrados no formato correto.
```
-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('Oi, eu sou uma string'); -- Resultado: OI, EU SOU UMA STRING

-- Converte o texto da string para caixa baixa
SELECT LCASE('Oi, eu sou uma string'); -- Resultado: oi, eu sou uma string

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma string', 'string', 'cadeia de caracteres'); -- Resultado: Oi, eu sou uma cadeia de caracteres

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado
SELECT LEFT('Oi, eu sou uma string', 3); -- Resultado: Oi,

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou uma string', 6); -- Resultado: string

-- Exibe o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
SELECT CHAR_LENGTH('Oi, eu sou uma string'); -- Resultado: 21

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 5, 2); -- Resultado: eu

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 5);  -- Resultado: eu sou uma string
```

Teste usando banco de dados sakila:

```
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;
```

# Parafixar

1. Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.

`SELECT UCASE('trybe);`

2. Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.

`SELECT REPLACE('Você ja ouviu falar do DuckDuckGo', 'DuckDuckGo', 'Google');`

3. Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.

`SELECT CHAR_LENGTH('Uma frase qualquer');`

4. Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.

`SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 12, 11);`

5. Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.

`SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');`

# Condicionais
```
-- Sintaxe:
SELECT IF(condicao, valor_se_verdadeiro, valor_se_falso);

SELECT IF(idade >= 18, 'Maior de idade', 'Menor de Idade')
FROM pessoas;

SELECT IF(aberto, 'Entrada permitida', 'Entrada não permitida')
FROM estabelecimentos;

-- Exemplo utilizando o banco sakila:
SELECT first_name, IF(active, 'Cliente Ativo', 'Cliente Inativo') AS status
FROM sakila.customer
LIMIT 20;
```

Em situações em que é preciso comparar mais de uma condição, é preferível utilizar o CASE.
```
-- Sintaxe:
SELECT CASE
  WHEN condicao THEN valor
  ELSE valor padrao
END;

SELECT
    nome,
    nivel_acesso,
    CASE
        WHEN nivel_acesso = 1 THEN 'Nível de acesso 1'
        WHEN nivel_acesso = 2 THEN 'Nível de acesso 2'
        WHEN nivel_acesso = 3 THEN 'Nível de acesso 3'
        ELSE 'Usuário sem acesso'
    END AS nivel_acesso
FROM permissoes_usuario;

-- Exemplo utilizando a tabela sakila.film:
SELECT
    first_name,
    email,
    CASE
        WHEN email = 'MARY.SMITH@sakilacustomer.org' THEN 'Cliente de baixo valor'
        WHEN email = 'PATRICIA.JOHNSON@sakilacustomer.org' THEN 'Cliente de médio valor'
        WHEN email = 'LINDA.WILLIAMS@sakilacustomer.org' THEN 'Cliente de alto valor'
        ELSE 'não classificado'
    END AS valor
FROM sakila.customer
LIMIT 10;
```

# Parafixar

1. Usando o IF na tabela sakila.film, exiba o id do filme, o título e uma coluna extra chamada 'conheço o filme?', em que deve-se avaliar se o nome do filme é 'ACE GOLDFINGER'. Caso seja, exiba "Já assisti a esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
```
SELECT
	film_id, title,
	IF(title = 'ACE GOLDFINGER', 'Já assisti esse filme', 'Não conheço o filme')
    AS 'Conheço o filme?'
FROM sakila.film;
```

2. Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating) e uma coluna extra que vamos chamar de 'público-alvo' em que colocaremos a classificação do filme de acordo com as seguintes siglas:
G: "Livre para todos";
PG: "Não recomendado para menores de 10 anos";
PG-13: "Não recomendado para menores de 13 anos";
R: "Não recomendado para menores de 17 anos";
Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
```
SELECT
	title, rating,
    CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomandado para menores de 17 anos'
	ELSE 'Proibibido para menores de idade'
    END
    AS 'público-alvo'
FROM sakila.film;
```

# Funções matemáticas do MySQL

Divisão de inteiros com DIV e como encontrar seus restos com o MOD

```
SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6
```

Já o operador MOD retorna o resto de uma divisão como resultado. Por exemplo:

```
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5
```

# Desafios com DIV e MOD

Dica: Números pares são aqueles que podem ser divididos em duas partes iguais. Ou seja, são aqueles cuja divisão por 2 retorna resto 0.

1. Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Ímpar'.
```
SELECT
	IF(15 MOD 2 = 0, 'PAR', 'IMPAR');
```

2. Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?
```
SELECT
	220 DIV 12; -- 18
```

3. Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
```
SELECT
	220 MOD 12; -- 4
```

# Arredondando valores

## ROUND 

Arredonda os números de acordo com sua parte decimal. Se for maior ou igual a 0.5, o resultado é um arredondamento para cima. Caso contrário, ocorre um arredondamento para baixo. Veja os exemplos abaixo:
```
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493
```

O arredondamento sempre para cima pode ser feito com o CEIL:
```
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11
```

O arredondamento sempre para baixo pode ser feito com o FLOOR:
```
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10
```
# Exponenciação e raiz quadrada

Elevando um número X à potência Y usando a função POW:
```
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16
```

Encontrando a raiz quadrada de um valor usando SQRT:
```
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4
```

# Gerando valroes aleatórios

Para situações em que se faz necessário gerar valores aleatórios, podemos usar a função RAND, em conjunto com as funções anteriores.
```
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))
```

# Parafixar

1. Monte uma query que gere um valor entre 15 e 20.

`SELECT ROUND(15 + (RAND() * 10));`

2. Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.

`SELECT ROUND(15.7515971, 5);`

3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

`SELECT FLOOR(39.494);`

4. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?

`SELECT CEIL(85.234);`

# Trabalhando com datas
```
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS
```

Podemos calcular a diferença entre dias entre duas datas usando o DATEDIFF e a diferença de tempo entre dois horários usando o TIMEDIFF. EM ambos os casos, o segundo valor é subtraído do primeiro para calular o resultado.
```
-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');
```

Podemos usar CURRENT_DATE() e NOW() em conjunto com os comandos de manipulação de datas e tempo para encontrar resultados dinâmicos da seguinte maneira:
```
SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual
```

# Para fixar

1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.

`SELECT DATEDIFF('2030-01-20', NOW()); -- 2795 dias`

2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.

`SELECT TIMEDIFF('10:25:45', '11:00:00'); -- -00:34:15`

# Funções AVG, MIN, MAX, SUM e COUNT

Existem calculos frequentes com funções especificas para aumento de velocidade;
```
-- Usando a coluna replacement_cost (valor de substituição), vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)
```

# Para fixar

Monte um query que exiba:
A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
A duração mínima dos filmes como 'Duração Mínima';
A duração máxima dos filmes como 'Duração Máxima';
A soma de todas as durações como 'Tempo de Exibição Total';
E, finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
```
SELECT AVG(length) AS 'Média de Duração',
       MIN(length) AS 'Duração Mínima',
       MAX(length) AS 'Duração máxima',
       SUM(length) AS 'Tempo de Exibição Total',
	   COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;
```

# Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING

Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o GROUP BY, o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos juntos. O GROUP BY também pode ser usado em conjunto com as funções de agregação que vimos anteriormente.
O GROUP BY pode ser construído da seguinte forma:
```
SELECT coluna(s) FROM tabela
GROUP BY coluna(s);
```

Ao usar essa query ela também elimina duplicação de nomes, assim como o distrinct.

É mais comum utilizar o GROUP BY em conjunto com o AVG, MIN, MAX, SUM ou COUNT. Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado, podemos usar o COUNT(). Assim, teremos uma informação mais fácil de ser compreendida.
```
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;
```

Exemplos;
```
-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;
```

# Praticando Group BY

1. Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
```
SELECT 
  active,
	COUNT(*)
FROM sakila.customer
GROUP BY active;
```

2. Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
```
SELECT store_id, active, COUNT(*) AS 'Total quantity'
FROM sakila.customer
GROUP BY store_id, active;
```

3. Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
```
SELECT AVG(rental_duration) AS avg_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_duration DESC;
```

4. Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
```
SELECT 
	district,
	COUNT(*) AS address_quantity
FROM sakila.address
GROUP BY district
ORDER BY address_quantity DESC;
```

# Filtrando Resultados do GROUP BY com HAVING

Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos o SELECT...WHERE para filtrar resultados individuais.
A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados agrupados usando o HAVING, para que somente os nomes que estão cadastrados mais de duas vezes sejam exibidos.

```
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;
```

É importante entender que, quando usamos o HAVING, estamos filtrando somente os resultados gerados após o GROUP BY ter sido executado.

# Para fixar

1. Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
```
    SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating;
```

Resultado:
```
SELECT rating, AVG(length) AS avg_rating
FROM sakila.film
GROUP BY rating
HAVING avg_rating BETWEEN(115.0) AND 121.50;
```

2. Usando a query a seguir, exiba apenas os valores de total do custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost), de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
```
    SELECT rating, SUM(replacement_cost)
    FROM sakila.film
    GROUP by rating;
```
```
SELECT rating, SUM(replacement_cost) AS total_rating
FROM sakila.film
GROUP by rating
HAVING total_rating > 3950.50
ORDER BY total_rating;
```
#

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

Por meio do JOIN poderia ser também feitas as consultas anteriores, então cabe a escolha entre um e outro dependendo de sua afinidade e por performance da busca, usando o execution plan(no caso do workbench).

# Execution plan

Mensura o custo de uma query e exibe o tipo de scan  que é motor de busca efetuado em cada tabela na query com seu custo total.

## Table scan

Não usa um mecânismo de busca por índice, precisa percorrer todos os registros da tabela para recuperar os resultados, assim como buscar informações em um livro sem índice, sendo necessário ler todo o livro para encontrar a informação.

## Index Seek

Quando é especificado um WHERE em que a coluna tem um índice clusterizado, que é quando adicionado uma coluna que possui uma chave primária na criação da tabela, o SQL automáticamente cria um index clusterizado na coluna, como um índice que contém os capítulos de um livro, que pode ser utilizado para otimizar a uma busca. Com isso o index seek realiza uma busca mais rápida que o table scan e possui uma performance melhor em tabelas com muitas linhas.

#

Com o execution plan, pode-se analisar qual dos tipos de busca está sendo usado, para modificar a query e melhora-la.

# Stored Procedures, stored functions e triggers

Podem te ajudar a seguir um conceito de programação chamado DRY, que preza pela redução de código repetido, quando possível.

Podemos armazenar blocos de código para serem usados posteriormente no MySQL de duas maneiras:

1. Stored Procedure
2; Stored Function

Como o próprio nome ja diz, o código fica armazenado no servidor do banco de dados para que possa ser utilizado sem a necessidade de reescrever uma funcionalidade.

Para tornar a leitura do código mais fácil e a manutenção simples, siga o seguinte padrão ao nomear suas procedures e functions:
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

```
USE sakila
DELIMITER $$

CREATE PROCEDURE checkCLientStatusBy(IN customerEmail VARCHAR(100))
BEGIN
    SELECT CONCAT(first_name, ' is ', IF(active = 1, 'active', 'inative')) FROM customer
    WHERE email = emailSelected;
END $$
DELIMITER ;
```

# Stored Functions

DRY (Don't Repeat Yourself) é uma prática bem comum que tem como foco o reaproveitamento de código, evitando a repetição do mesmo código ao longo do projeto.\
Para aplicar isso com SQL é usado o stored function, com ele podemos encapsular as queries mais usadas dentro de um bloco nomeado e parametrizável.

Sintaxe;
```
USE banco_de_dados;
DELIMITER $$

CREATE FUNCTION nome_da_função(parametro1, parametro2, ...n)
RETURN tipo_de_dado tipo_de_retorno
BEGIN
    query_sql
    RETURN resultado_a_ser_retornado;
END $$

DELIMITER ;
```

Exemplo;
```
USE sakila;
DELIMITER $$

CREATE FUNCTION MoviesWithActor(id INT)
RETURNS INT READS SQL DATA // retorna um inteiro e somente lê os dados no banco
BEGIN
    DECLARE movie_total INT;
    SELECT COUNT(*)
    FROM filme_actor
    WHERE film_actor.actor_id = id INTO movie_total;
    RETURN movie_total;
END $$

DELIMITER ;
```

Exemplo;
```
USE sakila;
DELIMITER $$

CREATE FUNCTION GetFullName(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
    DECLARE full_name VARCHA(200)
    SELECT concat(first_name, ' ', last_name)
    FROM actor
    WHERE actor_id = id
    LIMIT 1
    INTO full_name;
    RETURN full_name;
END $$

DELIMITER ;
```

Chamando as Funções;
```
SELECT MoviesWithActor(1);
SELECT GetFullName(1);
```

## Pratices

1. Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.

```
USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPaymentDoneBy(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE total INT;
    SELECT COUNT(1)
    FROM payment
    WHERE customer_id = id AND payment_date IS NOT NULL INTO total;
    RETURN total;
END $$

DELIMITER ;

SELECT GetTotalPaymentDoneBy(2);
```

2. Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado ao registro de inventário com esse id.

```
USE sakila;

DELIMITER $$

CREATE FUNCTION GetFilmeNameBy(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
	DECLARE film_title VARCHAR(50);
    SELECT title
	FROM film f
	INNER JOIN inventory i
	ON f.film_id = i.film_id
	WHERE i.inventory_id = id INTO film_title;
    RETURN film_title;
END $$

DELIMITER $$

SELECT GetFilmeNameBy(156);
```

3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.

```
USE sakila;

DELIMITER $$

CREATE FUNCTION GetTotalFilmCategory(category_selected VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total INT;
	SELECT
	COUNT(1)
	FROM film f
	INNER JOIN film_category fc
	ON f.film_id = fc.film_id
	INNER JOIN category c
	ON fc.category_id = c.category_id
	WHERE c.`name` = category_selected INTO total;
    RETURN total;
END $$

DELIMITER ;

SELECT GetTotalFilmCategory('Action');
```

- Stored Procedures podem ser chamadas através do comando CALL, e o retorno de um valor é opcional;
- Já as Stored Functions são executadas com o comando SELECT e obrigatoriamente retornam algum valor;
- A Stored Functions não pode ser utilizada para alterar o estado global da base dados. (Ex. Por meio das instruções INSERT, UPDATE e DELETE);
- Stored Procedures permite alterar o estado global.
- Stored Procedures permitem realizar o tratamento de excepções, via try/catch.

# Trigger

Blocos de código SQL disparados em reação a alguma atividade que ocorreu no banco. Sendo possivel dispara-los em dois momentos antes ou depois da ação.\

Trigger pode ser ativado quando realizada as ações de INSERT, UPDATE e DELETE.\

Quando usando o trigger, temos acesso as variaveis OLD e NEW, que armazenam informações, de antes da ação (OLD) e depois (NEW).

Quando elas estão disponiveis;

| Operação | OLD | NEW |
| :--: | :--: | :--: |
| INSERT | Não | Sim |
| UPDATE | Sim | Sim |
| DELETE | Sim | Não |

Sintaxe;
```
DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- SQL
END $$

DELIMITER ;
```

Modelo para Exemplos;
```
CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY AUTO_INCREMENT,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualização DATETIME,
    acao VARCHAR(50),
    ativo BOOLEN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    perfil_id INT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;
```

Exemplo;
```
USE rede_social;

DELIMITER $$

CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$

DELIMITER ;
```

Dessa forma quando criarmos um novo cadastro, será inserido a data atual, e a ação de INSERT naquela inserção, mantendo um log de ações.\

Exemplo;
```
USE rede_social;

DELIMITER $$

CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$

DELIMITER ;
```

Agora, sempre que for realizada uma atualiada no perfil, é atualizada a data com a ultima ação, como update.\

Exemplo;
```
USE rede_social;

DELIMITER $$

CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUE (OLD.perfil_ID, 'exclusão', NOW());
END $$

DELIMITER ;
```

Com esse trigger, quando for deletado alguma linha do perfil, fica armazenado um log de exclusão com data.

## Trigger Practices

```
CREATE DATABASE IF NOT EXISTS automoveis;

USE automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;
```

1. Crie um TRIGGER que, a cada nova inserção feita na tabela carros, defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1.
```
USE automoveis;

DELIMITER $$

CREATE TRIGGER insert_new_car
    BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$

DELIMITER $$
```
2. Crie um TRIGGER que, a cada atualização feita na tabela carros, defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO'.

```
USE automoveis;

DELIMITER $$

CREATE TRIGGER update_car
    BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
    SET NEW.data_atualizacao = NOW(),
        NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;
```

3. Crie um TRIGGER que, a cada exclusão feita na tabela carros, envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

```
USE automoveis;

DELIMITER $$

CREATE TRIGGER delete_car
    AFTER DELETE ON carros
    FOR EACH ROW
BEGIN
    INSERT INTO log_operacoes (tipo_operacao, data_ocorrido)
    VALUES
        ('EXCLUSÃO', NOW());
END $$

DELIMITER ;
```

# Exists

Retorna os registros de uma tabela que possue relacionamentos com outros tabela.\

Exemplo;
```
USE praticando;

SELECT `name` FROM manufacturers AS m
WHERE NOT EXISTS (
    SELECT * FROM products
    WHERE manufacturer = m.code
);
```
Neste exemplo, queremos vizualizar o nome da manufacturer que não possui relacionamento por meio do código há tabela products.\
A empresa que não tiver seu código na tabela de products, irá aparecer no resultado. Agora removento a negação do exists, ele retornaria o nome de todas empresa que tem seu Code relacionados em products.

## Practices

Banco de dados praticando: [link](https://lms-assets.betrybe.com/lms/praticando.sql).

Banco de dados hotel: [link](https://lms-assets.betrybe.com/lms/hotel.sql).

1. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.

```
SELECT Id, Title FROM Books AS b
WHERE NOT EXISTS (
	SELECT * FROM Books_Lent
    WHERE book_id = b.Id
);
```

2. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra “lost” no título.

```
SELECT Id, Title FROM Books AS b
WHERE EXISTS (
	SELECT * FROM Books_Lent
    WHERE book_id = b.Id AND b.title LIKE '%lost%'
);
```

3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.

```
SELECT Name FROM Customers AS c
WHERE NOT EXISTS (
	SELECT * FROM CarSales
    WHERE CustomerId = c.CustomerId
);
```

4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.

```
SELECT c.`Name`, cr.`Name`
FROM Customers AS c
INNER JOIN CarSales AS cs
ON c.CustomerId = cs.CustomerId
INNER JOIN Cars AS cr
ON cr.id = cs.CarId
WHERE EXISTS (
	SELECT * FROM Cars
    WHERE id = cs.CarId
);
```


#

# 21.1

- [O que é linguagem de programação de alto/baixo nível?](https://woliveiras.com.br/posts/o-que-e-linguagem-de-programacao-de-alto-nivel/)

# 21.2

- [Como utilizar INNER JOIN, LEFT e RIGHT JOIN, por Dev Media](https://www.devmedia.com.br/clausulas-inner-join-left-join-e-right-join-no-sql-server/18930)
- [Entenda mais sobre o INNER JOIN no MySQLTutorial](https://www.mysqltutorial.org/mysql-inner-join.aspx)
- [W3Schools](https://www.w3schools.com/sql/sql_join_inner.asp)
- [Aprenda SQL JOINS na prática com SQL Bolt](https://sqlbolt.com/lesson/select_queries_with_joins)
- [Maneiras diferentes de otimizar suas queries](https://dev.mysql.com/doc/refman/8.0/en/optimization.html)
- [Exercícios de fixação SQL](https://github.com/XD-DENG/SQL-exercise)

# 21.3

- [Ferramentas gratuitas para modelagem de tabelas](https://www.holistics.io/blog/top-5-free-database-diagram-design-tools/)
- [Boas práticas na criação de tabelas](https://www.devmedia.com.br/padronizacao-de-nomenclatura-revista-sql-magazine-100/24710)
- [Modelo ER e Diagrama ER](https://www.devmedia.com.br/mer-e-der-modelagem-de-bancos-de-dados/14332)
- [Como modelar um banco de dados gratuitamente através do draw-io](https://drawio-app.com/entity-relationship-diagram-erd/)
- [SQL Data Types](https://www.w3schools.com/sql/sql_datatypes.asp)
- [MySQL Data Types](https://www.mysqltutorial.org/mysql-data-types.aspx)
- [Quando é recomandado o uso de chave composta](https://pt.stackoverflow.com/questions/15883/quando-%C3%A9-recomendado-o-uso-de-chave-prim%C3%A1ria-composta)
- [Normalização em Bancos de Dados - Diego Machado](https://medium.com/@diegobmachado/normaliza%C3%A7%C3%A3o-em-banco-de-dados-5647cdf84a12)
- [Conceitos gerais sobre normalização](https://www.luis.blog.br/normalizacao-de-dados-e-as-formas-normais.html)