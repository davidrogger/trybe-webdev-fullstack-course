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
É usado em casos em que uma tabela faz join consigo mesma. Você pode utiliza rqualquer dos tipos de JOIn vistos para realizar um SELF JOIN.

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

