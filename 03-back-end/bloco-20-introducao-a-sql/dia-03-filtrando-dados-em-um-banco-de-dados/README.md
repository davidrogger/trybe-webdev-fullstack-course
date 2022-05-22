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

