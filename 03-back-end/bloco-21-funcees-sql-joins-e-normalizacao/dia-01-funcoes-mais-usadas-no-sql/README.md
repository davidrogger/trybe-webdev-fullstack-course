anotações pessoais do dia...

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