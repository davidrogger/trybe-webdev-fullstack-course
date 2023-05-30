-- Exercício 1: Insira as produções da Pixar na tabela movies:

-- Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
-- Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
-- Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
-- WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
-- Exercício 2: O filme Procurando Nemo foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Insira as informações à tabela box_office.

INSERT INTO movies (title, director, `year`, length_minutes) VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
  ('Procurando Nemo', 'John Lasseter', 2003, 107),
  ('Os Incríveis', 'Brad Bird', 2004, 116),
  ('WALL-E', 'Pete Docter', 2008, 104);

-- Exercício 3: O nome do diretor do filme “Procurando Nemo” está incorreto, ele foi dirigido por Andrew Stanton. Corrija esse dado utilizando o comando UPDATE.

INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
	SELECT
		(SELECT id FROM movies WHERE title LIKE 'Procurando Nemo'),
    (6.8),
    (450000000),
    (370000000);

-- Exercício 4: O título do filme “Ratatouille” está incorreto na tabela movies. Além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o comando UPDATE.

UPDATE movies
	SET director = 'Andrew Stanton'
    WHERE id IN (
		SELECT id FROM (
			SELECT id FROM movies WHERE title LIKE 'Procurando Nemo'
		) AS subquery
	);

-- Exercício 5: Insira as novas classificações abaixo na tabela box_office, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies:

UPDATE movies
	SET title = 'Ratatouille', year = 2007
    WHERE id IN (
		SELECT id FROM (
			SELECT id FROM movies WHERE title LIKE 'ratatui'
		) AS subquery
	);

-- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
-- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
-- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.

INSERT INTO box_office (movie_id, rating, domestic_sales, international_sales)
	VALUES
		((SELECT id FROM movies WHERE title LIKE 'Monster SA'),
		(8.5),
		(300000000),
		(250000000)),
		((SELECT id FROM movies WHERE title LIKE 'Os Incríveis'),
		(7.4),
		(460000000),
		(510000000)),
		((SELECT id FROM movies WHERE title LIKE 'WALL-E'),
		(9.9),
		(290000000),
		(280000000));

-- Exercício 6: Exclua da tabela movies o filme “WALL-E”.

DELETE FROM box_office
	WHERE movie_id LIKE (
		SELECT id FROM movies WHERE title LIKE 'WALL-E'
    );

DELETE FROM movies
    WHERE id LIKE (
		SELECT id FROM (
			SELECT id FROM movies WHERE title LIKE 'WALL-E'
		) AS subquery
	);

-- Exercício 7: Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.

DELETE FROM box_office
	WHERE movie_id IN (
		SELECT id FROM movies WHERE director LIKE 'Andrew Stanton'
    );

DELETE FROM movies
	WHERE id IN (
		SELECT id FROM (
			SELECT id FROM movies WHERE director LIKE 'Andrew Stanton'
        ) AS subquery
    );


-- BONUS

-- Exercício 8: Altere a classificação da tabela box_office para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.

UPDATE box_office
	SET rating = 9.0
    WHERE movie_id IN(
		SELECT movie_id FROM (
			SELECT movie_id FROM box_office WHERE domestic_sales > 400000000
        ) AS subquery
    );

-- Exercício 9: Altere a classificação da tabela box_office para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

UPDATE box_office
	SET rating = 6.0
    WHERE movie_id IN(
		SELECT movie_id FROM (
			SELECT movie_id FROM box_office WHERE domestic_sales > 200000000 AND international_sales < 300000000
        ) AS subquery
    );

-- Exercício 10: Exclua da tabela movies todos os filmes com menos de 100 minutos de duração.

DELETE FROM box_office
	WHERE movie_id IN(
		SELECT id FROM movies WHERE length_minutes < 100
    );

DELETE FROM movies
	WHERE id IN(
		SELECT id FROM (
			SELECT id FROM movies WHERE length_minutes < 100
        ) AS subquery
    );
