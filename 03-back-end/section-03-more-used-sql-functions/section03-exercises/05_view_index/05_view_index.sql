USE sakila;

-- Crie uma view chamada film_with_categories utilizando as tabelas category, film_category e film do banco de dados sakila. Essa view deve exibir o título do filme, o id da categoria e o nome da categoria. Os resultados devem ser ordenados pelo título do filme.

CREATE VIEW film_with_categories AS
	SELECT
	  f.title,
	  c.`name` AS category,
	  c.category_id
	FROM film f
	INNER JOIN film_category fc ON fc.film_id = f.film_id
	INNER JOIN category c ON c.category_id = fc.category_id
	ORDER BY f.title ASC;

SELECT * FROM get_film_category;

-- Crie uma view chamada film_info utilizando as tabelas actor, film_actor e film do banco de dados sakila. Sua view deve exibir o actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

CREATE VIEW film_info AS
	SELECT
		a.actor_id,
        CONCAT(a.first_name, ' ', a.last_name) AS actor,
        f.title
	FROM actor a
    INNER JOIN film_actor fa ON fa.actor_id = a.actor_id
    INNER JOIN film f ON f.film_id = fa.film_id
    ORDER BY actor;

SELECT * FROM film_info;

-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila. Sua view deve exibir o address_id, o address, o district, o city_id e a city. Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.

CREATE VIEW address_info AS
	SELECT
		a.address_id,
        a.address,
        a.district,
        c.city_id,
        c.city
	FROM address a
    INNER JOIN city c ON c.city_id = a.city_id
    ORDER BY c.city;

SELECT * FROM address_info;

-- Crie uma view chamada movies_languages, usando as tabelas film e language do banco de dados sakila. Sua view deve exibir o título do filme, o id do idioma e o idioma do filme;

CREATE VIEW movies_languages AS
	SELECT
		f.title,
        l.language_id,
        l.`name`
	FROM film f
  INNER JOIN `language` l ON l.language_id = f.language_id

SELECT * FROM movies_languages;

-- Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila), adicionando-o na coluna name. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE FULLTEXT INDEX category_index ON category(name);

SELECT * FROM category
WHERE MATCH(name) AGAINST('action');

-- Query cost: 0.35

DROP INDEX category_index ON category;

SELECT * FROM category
WHERE name LIKE '%action%';

-- Query cost: 2.15

-- Verifique o impacto de um INDEX na tabela address (banco de dados sakila) adicionando-o na coluna postal_code. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE INDEX addres_index ON address(postal_code);

SELECT * FROM address
WHERE postal_code = 35200;

-- Query cost: 61.8

DROP INDEX addres_index ON address;

SELECT * FROM address
WHERE postal_code = 35200;

-- Query cost: 61.8

USE hr;

-- Escreva uma query SQL para alterar na tabela locations o nome da coluna street_address para address, mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE locations RENAME COLUMN street_address TO address;

-- Escreva uma query SQL para alterar na tabela regions o nome da coluna region_name para region, mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE regions RENAME COLUMN region_name TO region;

-- Escreva uma query SQL para alterar na tabela countrieso nome da coluna country_name para country, mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE countrieso RENAME COLUMN country_name TO country;
