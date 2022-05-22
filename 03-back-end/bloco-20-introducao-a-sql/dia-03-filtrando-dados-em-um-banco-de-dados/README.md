anotações pessoais do bloco...

# WHERE

Pode-se realizar buscar usando o where por meio de operadores lógicos;
| OPERADOR | DESCRIÇÃO |
| --- | --- |
| = | IGUAL |
|<> | DIFERENTE DE |
| > | MAIOR QUE |
| < | MENOR QUE |
| >= | MAIOR QUE OU IGUAL A |
| <= | MENOR QUE OU IGUAL A |
| AND |  OPERADOR LÓGICO E |
| OR | OPERADOR LÓGICO OU |
| IS | COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL) |
| NOT | NEGAÇÃO |

```
SELECT * FROM sakila.payment
WHERE amount = 0.99 OR amount = 2.99 AND staff_id = 2;
```

Como o operador AND tem preferência sobre o operador OR, ele é avaliado primeiro. Então os registro buscados são aqueles nos quais amount = 2.99 e staff_id - 2. Na sequência, são buscados os registros nos quais amount = 0.99, independente do valor de staff_id. Os valores retornados serão os resultados dessas duas buscas. Ou seja, a query é executada como se tivesse os seguites parênteses: amount = 0.99 OR (amount= 2.99 AND staff_id = 2).

Agora, quando executar a seguinte query:
```
SELECT * FROM sakila.payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 2;
```

A expressão dentro dos parênteses é avaliada, e todos os resultados que satisfazem a condição amount = 0.99 OR amount = 2.99 são retornados. O AND então compara o resultado de ambos os lados e faz com que somente os resultados que satisfazem ambas as condições retornados.

## Parafixar

A tabela a seguir é uma guia de como a classificação indicativa é usada no banco de dados sakila.

1. Precisamos identificar os dados do cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org. As informações podem ser encontradas na tabela customer

`'SELECT * FROM sakila.customer WHERE first_name = 'leonard';`

2. Precisamos de um relatório dos nomes dos clientes, em ordem alfabética, que não estão mais ativos no nosso sistema e pertencem à loja com o id = 2, e não inclua o cliente KENNETH no resultado. As informações podem ser encontradas na tabela customer

```
SELECT * FROM sakila.customer
WHERE active IS NOT TRUE
AND store_id = 2
AND first_name <> 'kenneth'
ORDER BY first_name;
```

3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film.
```
SELECT title, description, release_year, replacement_cost, rating FROM sakila.film
WHERE (rating = 'PG' OR rating = 'PG-13')
AND (replacemente_cost <= 18>)
ORDER BY replacemente_cost DESC, title ASC
LIMIT 100;
```

4. Quantos clientes estão ativos na loja 1? As informações podem ser encontradas na tabela customer
```
SELECT COUNT(*) FROM sakila.customer
WHERE store_id = 1
AND active is TRUE;
```

5. Mostre todos os detalhes dos clientes que não estão ativos na loja 1. As informações podem ser encontradas na tabela customer

```
SELECT * FROM sakila.customer
WHERE store_id = 1
AND active is TRUE;
```

6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em ordem alfabética pelo título. As informações podem ser encontradas na tabela film
```
SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC
LIMIT 50;
```

# Criando pesquisas mais dinâmicas e maleáveis usando o LIKE

O **LIKE** é usado para buscar por meio de uma sequência específica de caracteres.
Existe dois 'curingas' ou modificadores que são normalmente usados com o LIKE:

**%** - O sinal de percentual, que pode representar zero, um ou múltiplos caracteres.

**_** - O underscore (às vezes chamado de underline, no Brasil), representa um único caractere

Procurando um titulo de filme com o final 'don';
```
SELECT * FROM sakila.film
WHERE title LIKE '%don';
```

Um titulo que começa com uma letra e termina com outra;
```
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';
```

Usando underscore, o resultado a seguir será de qualquer titulo que o segundo caracter é igual a C;
```
SELECT * FROM sakila.film
WHERE title LIKE '_C%';
```

A seguir qualquer titulo com 8 caracteres;
```
SELECT * FROM sakila.filme
WHERE title LIKE '________';
```

A seguir todas as palavras com no mínimo 3 caracteres e que iniciam com E;
```
SELECT * FROM sakila.films
WHERE title LIKE 'E__%';
```

# Parafixar

1. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
```
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';
```

2. Mostre todos os detalhes dos filmes cujas descrições finalizam com china.
```
SELECT * FROM sakila.film
WHERE description LIKE '%china';
```

3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
```
SELECT * FROM sakila.film
WHERE description LIKE '%girl'
AND title LIKE '%lord'
LIMIT 2;
```

4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
```
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';
```

5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
```
SELECT * FROM sakila.filme
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';
```

6. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
```
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';
```

7. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
```
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';
```

# Englobando uma faixa de resultados com IN e BETWEEN

# Operador IN

É possivel juntar várias condições nas suas queries usando os operadores AND e OR. No entanto, ainda é necessário digitar cada condição separadamente;
```
SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';
```

Uma forma melhor de fazer essa mesma pesquisa seria usando o IN:
```
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE', 'NICK', 'ED', 'JENNIFER');
```

Esse mesmo processo pode ser realizado para números;
```
SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5);
```

# BETWEEN

Você pode usar o between para determinar um alcance de busca, determinando que entre um valor especifico inicial e um valor final, devem aparecer todos os resultados;
```
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 and 120;
```

Resultado da busca acima, seria os valores entre os valores indicados incluindo eles.

## BETWEEN com strings

Para encontrar uma faixa de valores em que os valores são strings podemos digitar a palavra por completo para encontrar os valores.
```
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;
```

No exemplo acima, será apresentado os resultados de todas linhas entre Italian e mandarin.

## BETWEEN com datas

Deve ser usado o valor padrão de datas a seguir: YYYYY-MM-DD HH:MM:SS, sendo os valores de horas, minutos e segundos opcionais.
```
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';
```

Consulta acima, retorna as colunas rental_id e rental_date, entre os meses 05 e 07;

# Parafixar

1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
```
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
```

2. Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
```
SELECT email FROM sakila.customer
WHERE address_id BETWEEN(172) AND (176)
ORDER BY email;
```

3. Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
```
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN('2005-05-01') AND ('2005-08-01');
```

4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
```
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN(3) AND (6)
ORDER BY rental_duration DESC,title;
```

5. Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Os resultados devem estar ordenados por título.
```
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
```