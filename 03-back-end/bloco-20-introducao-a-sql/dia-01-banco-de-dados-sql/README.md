anotações pessoais do bloco 20.1...

# O que são dados

São fatos, percepções ou observações, que existem de forma não organizada.

# Banco de dados

Reuni os dados, de forma estruturada, organizada e pesquisavel.(sendo possivel gerar mais dados pelos mesmos dados).
Vantagem de limite de acesso aos dados.

# Tipos de bancos de dados

## Relacionais

Armazenam os dados em forma de tabela onde existem linhas e colunas e sua estrutura predefinida, não permitindo alterações dinâmicas isso cria previsibilidade e a possibilidade de criar relacionamentos entre as tabelas, para esse tipo de banco de dados usamos o SQL.

## Não relacionais

Pode também usar estruturas pré-definidas não sendo obrigatório, ou seja os dados podem ser inseridos dinâmicamente sem precisar alterar a estrutura do seu banco de dados, não ha uma linguagem de pesquisa fixa.

# SQL

**S**tructured **Q**uery **L**anguage é a linguagem mais usada para criar, pesquisar, extrair e manipular dados dentro de um banco de dados relacional.

## Como as Informações são Armazenadas

Todas as pesquizas realizadas dentro deu m banco de dados são feitas em tabelas, tabelas possuem linhas e colunas. As linhas representam aquilo que se deseja representar, e as colunas descrevem algum aspecto.

Exemplo:

| nome | sobrenome | email |
| --- | --- | --- |
|david| rogger | dvd@email.com|

# Constraints (restrições), chaves primárias e chaves estrangeiras

Dentro de uma banco de dados é possivel restringir a forma como os dado podem ou não ser manipulados nas tabelas.

## Tipos de constrains

- **NOT NULL** Garante que aquele campo não pode conter valores nulos, ou seja, se não houver um valor padrão (default) definido, será sempre necessário passar um valor para esse campo durante a inserção ou alteração de dados.
- **UNIQUE** Garante que o valor inserido na coluan da tabela é único, isto é, não pode haver ou valor igual para esta coluna registrado nesta tabela.
-  **PRIMARY KEY** Garante que o valor seja a chave primária da tabela, ou seja, que a coluna que possui essa constraint aplicada seja o identificador único da tabela. Ela também é por definição, não nula e única.
- **FOREIGN KEY** Garante que o valor seja uma chave estrangeira da tabela, ou seja, faça referência à chave primária (valor em uma coluna com constraint PRIMARY KEY) de outra tabela, permitindo um relacionamento entre tabelas.
- **DEFAULT** Garante que, caso nenhum valor seja inserido na coluna (ou caso a pessoa usuária insira um valor nulo), a constraint colocará o valor padrão passado para ela.

Para fixar:

![Imagem para exercicio](/03-back-end/bloco-20-introducao-a-sql/20.imagens/table1.png)

Sem ter acesso à estrutura interna de como essa tabela foi criada, tente responder as seguintes perguntas:

1. Quais constraints a coluna address_id poderia ter? Por quê?

`PRIMARY KEY`

2. A coluna city_id é um número. Consegue identificar que tipo de constraint foi aplicado a ela?

`FOREIGN KEY`

3. A coluna address (endereço) possui uma constraint. Qual tipo de constraint seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?

`NOT NULL`

Outra tabela:
![Imagem para exercicio2](/03-back-end/bloco-20-introducao-a-sql/20.imagens/table2.png)

1. Que tipo de constraint a coluna city_id possui?

`PRIMARY KEY`

2. Qual é o motivo de a coluna country_id não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?

`Ela é usada como chave estrageira, para identificação dessa informação em uma tabela externa.`

Mais uma exercicio:
![Imagem para exercicio3](/03-back-end/bloco-20-introducao-a-sql/20.imagens/table3.png)

1. Qual coluna possui uma primary key?

`film_id`

2. Qual coluna possui uma foreign key?

`category_id`

# MySQL Comandos

Entrando no banco de dados:
```
mysql -u USUARIO -p
```

Para visualizar os bancos que estão instalados atualmente:
```
show databases;
```

Por convenção é utilizado as palavras chave do SQL em caixa alta para diferenciar das indicações de tabelas e colunas, no final de cada comando deve-se usar o ; para seu funcionamento.

1. a - USE é usado para definir a referência do banco de dados que será utilizado na query:

USE nome_do_banco_de_dados_que_quero_conectar;
EX:
```
USE trybe;
```

1. b - Outra forma de fazer referência ao banco, sem ter que rodar o USE é no formato banco_de_dados.tabela:

SELECT * FROM banco_de_dados.tabela:
EX:
```
SELECT * FROM trybe.students;
```
2. Para retornar todas as tabelas inicializadas no seu server:
```
SHOW TABLES;
```

3. Visualizar estrutura de uma tabela:

DESCRIBE nome_da_tabela;
EX:
```
DESCRIBE students;
```

4. Criar um banco de dados:

CREATE DATABASE nome_do_banco_de_dados;

EX:
```
CREATE DATABASE trybe;
```

# O que é uma entidade?

Entidade em banco de dados, é o alvo que possui as propriedades para o banco.
Exemplo; a entidade pessoal, possui propriedades como, altura, peso, idade, escolaridade...

A entidade é a nossa tabela dentro de um banco de dados e as propriedades fazem parte dessa tabela.
As entidades são individuais e não se relacionam entre si, porém às vezes, elas são ligadas umas às outras através de relacionamentos.