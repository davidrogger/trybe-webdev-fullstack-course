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
