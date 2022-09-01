# Mongoose

No mundo dos bancos de dados e APIs, existem dezenas de ferramentas que são criadas para facilitar a interação e a manipulação desses dados, assim fornencendo rubestez à sua aplicação.

- ORM's (Object Relational Mapping), que lidam com dados estruturados em bancos de dados relacionais (MySQL, PostgreSQL e etc...).
- ODM's (Object Document Mapping), que lidam com dados estruturados em bancos de dados não relacionais (como o MongoDB).

O mongoose é um desses ODMs, trabalhando como se fosse um tradutor.

Temos uma API escrita em Node.js, cujo objetivo é acessar nosso banco de dados em MongoDB e realizar manipulações de dados. Porém, o Mongo não entende diretamente JavaScript/TypeScript, precisando assim de um tradutor, ou seja, "alguém" que faça com que a interação entre essas duas partes seja facilitada.


