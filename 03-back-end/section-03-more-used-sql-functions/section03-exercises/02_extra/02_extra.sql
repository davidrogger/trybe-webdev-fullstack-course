-- Exercício 1: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

SELECT m.title
FROM movies AS m
INNER JOIN box_office AS b ON m.id = b.movie_id
WHERE b.international_sales > 500000000 AND m.length_minutes > 110;

SELECT
	title
FROM movies
WHERE id IN (
	SELECT movie_id FROM box_office
    WHERE international_sales > 500000000
)
AND length_minutes > 110;

-- Exercício 2: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz.

SELECT name, location FROM theater AS t
WHERE EXISTS (
	SELECT * FROM movies
	WHERE theater_id = t.id
);

-- Exercício 3: Utilizando o EXISTS, selecione o nome e localização dos cinemas que não possuem filmes em cartaz.

SELECT name, location FROM theater AS t
WHERE NOT EXISTS (
	SELECT * FROM movies
    WHERE theater_id = t.id
);