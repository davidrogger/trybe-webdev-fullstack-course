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

# Link entre dados

É comum termos diferentes tabelas, cada uma armazenando seus respectivos dados, mas que em conjunto tem um significado maior. Num exemplo de sorveteria, poderíamos ter outras 2 tabelas que se relacionariam com a tabela de sabores: empresas fornecedoras e pedidos.
Para não duplicarmos dados em tabelas diferentes, é possivel estabelecer relacionamentos entre as tabelas.
Em um banco de dados existem quatro tipos de relacionamentos.

## Um para um

Uma linha da tabela A só deve possuir uma linha correspondente na tabela B ou vice-versa.

Esse tipo de relacionamento é usado normalmente quando se quer dividir as informações de uma tabela maior em tabelas menores por questões de performance, a fim de evitar tabelas com dezenas de colunas, ou por várias outras questões específicas de um negócio. Pode ser encontrado em alguns contéudos com a abreviação: 1:1.

## Um para Muitos ou Muitos para Um

Esse é um dos tipos mais comuns de relacionamento. Em cenários assim, uma linha na tabela A pode ter várias linhas correspondentes na tabela B, mas uma linha da tabela B só pode possuir uma linha correspondente na tabela A.
Exemplo:
Uma caterogira pode estar ligada a vários livros; porém um livro deve possuir apenas uma categoria. Pode ser encontrado em alguns conteúdos com a abreviação: N:1 ou 1:N, depende da regra de negocio.

## Muitos para Muitos

O tipo de relacionamento muitos para muitos acontece quando uma linha na tabela A pode possuir muitas linhas correspondentes na tabela B e vice-versa.

Pode ser visto também como dois relacionamento um para muitos ligados por uma tabela intermediária, como é o caso da tabela filme_ator do banco sakila. Podemos chamar essa tabela de intermediária de tabela de junção. Ela é usada para guardar informações de como as tabelas se relacionam entre si.
Dessa maneira, quando queremos demostrar que um filme pode contar com vários atores, e também que os atores podem atuar em vários filmes, surge a necessidade de um relacionamento muitos para muitos. Pode ser encontrado em alguns conteúdos com a abreviação: N:N.

# EXERCICIO DO BLOCO

EXERCICIOS REALIZADOS NO WORKBENCH MYSQL

1. Exercício 1: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.

`Clicar com o botão direito na tabela desejada dentro do banco desejado, e selecionar ROW.`

2. Exercício 2: Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.

`Clicar com o botão direito no banco de dados que deseja criar uma nova tabela e create table.`

3. Exercício 3: Feito isso, crie uma tabela com as seguintes restrições:
Nome da tabela: Filme
Colunas:
FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
Descricao - não permite nulos, tipo texto (varchar(100));
AnoLancamento - não permite nulos, tipo int;
Nota - permite nulos, tipo int;

`Mesmo passo anterior inserindo cada coluna de forma dinâmica conforme o workbench oferece.`

4. Exercício 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

`tabela contray`

Exercício 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?

`N:1, São varias cidades para um país`

Exercício 6: Qual tipo de relacionamento a tabela country faz com a tabela city?

`1:N Um país para muitas cidades`

Exercício 7: Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

1. **filme_category** varios film_id com 1 categoria_id
2. **customer** varios store_id com 1 customer_id
3. **payment_id** varios customer_id ou staff_id para 1 payment_id

