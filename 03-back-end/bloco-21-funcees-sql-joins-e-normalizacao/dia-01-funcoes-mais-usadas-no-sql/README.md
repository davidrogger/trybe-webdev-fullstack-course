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