anotações pessoais do bloco...

# Instalando MySQL Server

Ferramentas que serão usadas: **MySQL Server** e **MySQL Workbench**

instalação guiada para distribuição linux ubuntu:
```
sudo apt update

sudo apt install mysql-server

mysql --version
```

Para acessar o mysql é necessário definir um acesso seguro, com o comando:
```
sudo mysql_secure_installation
```

O terminal apresentará uma sequencia de perguntas:

1. Pergunta se você deseja iniciar a configuração de seguranção.

2. Definir o Nível de complexibilidade da senha, 0 para mais fraca e 2 para mais forte.

3. Seguindo do campo onde será digitado a senha.

4. Validação da senha digitada anteriormente.

5. Remover usuário anonimos existentes

6. Desabilitar o login de usuário root remotamente.

7. Resetar o banco de teste padrão.

8. Reiniciar privilegio das tabelas.

Caso ocorra um erro para criar a validação de senha com o comando secure_installation, pode-se usar o seguinte comando

acessando o mysql sem senha:
```
sudo mysql
```

Dentro do terminal do mysql, uso do seguinte comando:
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'SetRootPasswordHere';
```

Comando para criar um novo usuário:

CREATE USER 'trybe'@'localhost' IDENTIFIED BY 'trybe12345';

[Link interessante para lidar com password policy](https://stackoverflow.com/questions/43094726/your-password-does-not-satisfy-the-current-policy-requirements)

SHOW VARIABLES LIKE 'validate_password%';
The output should be something like that :

+--------------------------------------+-------+
| Variable_name                        | Value |
+--------------------------------------+-------+
| validate_password.check_user_name    | ON    |
| validate_password.dictionary_file    |       |
| validate_password.length             | 6     |
| validate_password.mixed_case_count   | 1     |
| validate_password.number_count       | 1     |
| validate_password.policy             | LOW   |
| validate_password.special_char_count | 1     |
+--------------------------------------+-------+
then you can set the password policy level lower, for example:

SET GLOBAL validate_password.length = 6;
SET GLOBAL validate_password.number_count = 0;

Comando para verificar se o serviço do mysql está rodando:
```
sudo systemctl status mysql
```

Deve retornar uma mensagem de active

Caso o serviço esteja parado use o comando:
```
systemctl start mysql
```

Comando para parar:
```
systemctl stop mysql
```

# Configurando Inicialização MYSQL

Por padrão após a instalação o servidor vai estar configurado para iniciar junto ao sistema.

Para desativar essa inicialização automática:
```
sudo systemctl disable mysql
```

# Desinstalando o MySQL server

Removendo todos os pacotes:
```
sudo apt-get remove mysql-server mysql-client mysql-common
```

Removendo arquivos de dependências:
```
sudo apt-get autoremove
sudo apt-get autoclean
```

Removendo os arquivos do mysql:
```
sudo rm -rf /var/lib/mysql
sudo rm -rf /etc/mysql
```

Para confirmar a remoção dele: `mysql --version`

# Instalando uma interface gráfica (MySQL WorkBench)

[Link para download](https://dev.mysql.com/downloads/workbench/)

Não é necessário criar uma conta. Procure pelo link "No thanks, just start my download" e faça o download.

Onde foi feito o download, rode o comando a seguir e aceite a instalação:
```
sudo apt install ./nome-do-arquivo
#ex no Ubuntu 20.04: sudo apt install ./mysql-workbench-community_8.0.21-1ubuntu20.04_amd64.deb
```

#

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

#

# Principais tipos de queries

Em banco de dados você pode trazer dados e alterá-los, atribuir permissões e manipualçao entre mais possibilidades.

## DDL

Data Definition Language - Todos os comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados:

- CREATE: Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers;
- ALTER: Para laterar a estrutura de qualquer objeto;
- DROP: Permite deletar objetos;
- TRUNCATE: Apenas esvazia os dados dentro de uma tabela, mais a mantém no banco de dados.

## DML

Data Manipulation Language - Comandos que são usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados. Os comandos e usos mais comuns nesta categoria são:

- SELECT: Usado para buscar dados em um banco de dados;
- INSERT: Insere dados em uma tabela;
- UPDATE: Altera dados dentro de uma tabela;
- DELETE: Excluir dados de uma tabela.

## DCL

Data Control Language - Mais focado nos comandos que concedem direitos, permissões e outros tipos de controle ao sistema de banco de dados.

- GRANT: Concede acesso a um usuário;
- REVOKE: Remove acessos concedidos através do comando GRANT.

## TCL

Transactional Control Language - Lida com as transações dentro de suas pesquisas.

- COMMIT: Muda suas alterações temporárias para permanentes no seu banco de dados.
- ROLLBACK: Desfaz todo o impacto realizado por um comando;
- SAVEPOINT: Define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query;
- TRANSACTION: Comandos que definem onde, como e em que escopo suas transações são executadas.

# Parafixar

1. Monte uma query que exiba seu nome na tela;

`SELECT 'David' AS name;`

2. Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;

`SELECT 'David' AS name, 'Arruda' AS lastname, 'Boituva' AS birthcity, 33 AS age;`

3. Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);

`Already done in the up question.`

4. Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;

`SELECT 13 * 8;`

5. Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

`SELECT now() AS 'Data Atual;`

# Parafixar2

`USE sakila;`

1. Escreva uma query que selecione todas as colunas da tabela city;

`SELECT * FROM city;`

2. Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;

`SELECT first_name, last_name FROM customer;`

3. Escreva uma query que exiba todas as colunas da tabela rental;

`SELECT * FROM rental;`

4. Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
[Comando para visualizar as colunas de uma tabela](https://stackoverflow.com/questions/1526688/get-table-column-names-in-mysql)

```
SHOW COLUMNS FROM filme;
SELECT title, description, release_year FROM film;
```

5. Utilize o SELECT para explorar todas as tabelas do banco de dados.
```
SHOW TABLES;
SELECT * FROM <tables que você quiser> resposta ótima do gabarito
```

# Parafixar CONCAT

1. Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.

`SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme FROM sakila.film;`

2. Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

`SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film;`

3. Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.

`SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address;`

# Parafixar DISTINCT

1. Monte uma query para encontrar pares únicos de nomes e idades.

`SELECT DISTINCT nome, idade FROM Escola.Estudantes;`

2. Quantas linhas você encontraria na query anterior?

`5`

3. Monte uma query para encontrar somente os nomes únicos.

`SELECT DISTINCT nome FROM Escola.Estudantes;`

4. Quantas linhas você encontraria na query anterior?

`4`

5. Monte uma query para encontrar somente as idades únicas.

`SELECT DISTINCT idade FROM Escola.Estudantes;`

Quantas linhas você encontraria na query anterior?

`4`

# Parafixar COUNT

![BD sakila](/03-back-end/bloco-20-introducao-a-sql/20.imagens/sampleSelect1.png)

1. Quantas senhas temos cadastradas nessa tabela?

`SELECT COUNT(password) FROM sakila.staff;`

2. Quantas pessoas temos no total trabalhando para nossa empresa?

`SELECT COUNT(staff_id) FROM sakila.staff;`

3. Quantos emails temos cadastrados nessa tabela?

`SELECT COUNT(email) FROM sakila.staff;`

# LIMIT

É um parametro, para determinar um limite de visualização.
Exemplo, para limitar os 10 primeiros valores;

`SELECT * FROM sakila.rental LIMITE 10;`

Ele irá mostrar apenas as 10 primeiras linhas da tabela rental.

# LIMIT OFFSET

É usado para pular linhas do resultado.
Exemplo, para pular os 3 primeiro valores da mesma busca anterior, exibindo apenas 10 resultados;

`SELECT * FROM sakila.rental LIMITE 10 OFFSET 3;`

Apresentaria 10 linhas, pulando as 3 primeiros.

# ORDER BY

Para ordenar as linhas de forma ascendente e descendente é usado o comando ORDER BY a seguir:
Usando a tabela de estudantes anterior.

`SELECT * FROM Escola.Estudantes`
```
'Rafael', '25'
'Amanda', '30'
'Roberto', '45'
'Carol', '19'
'Amanda', '25'
```

`SELECT * FROM Escola.Estudante ORDER BY nome ASC;`

```
'Amanda', '30'
'Amanda', '25'
'Carol', '19'
'Rafael', '25'
'Roberto', '45'
```

Queremos que os alunos mais novos apareçam primeiro de forma ordenada por nome:

`SELECT * FROM Escola.Estaudante ORDER BY nome ASC, idade ASC;`

```
'Amanda', '25'
'Amanda', '30'
'Carol', '19'
'Rafael', '25'
'Roberto', '45'
```

Caso não seja declarada a ordem, por padrão ele orderna de forma ascendente, então o código poderia ficar assim:

`SELECT * FROM Escola.Estudante ORDER BY nome, idade;`

# Exercício Geral

tabela sakila.film

1. Escreva uma query que exiba todos os filmes cadastrados no banco de dados.

`SELECT * FROM sakila.film;`

2. Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.

`SELECT title, release_year, rating FROM sakila.film;`

3. Quantos filmes temos cadastrados?

`SELECT COUNT(*) FROM sakila.film;`

- Para os exercícios a seguir, vamos usar a tabela sakila.actor:

4. Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.

`SELECT DISTINCT(last_name) FROM sakila.actor;`

5. Quantos sobrenomes únicos temos na tabela?

`SELECT COUNT(DISTINCT last_name) FROM sakila.actor;`

6. Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.

`SELECT * FROM sakila.actor ORDER BY last_name, fist_name DESC;`

- Usando a tabela language:

7. Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.

`SELECT * FROM sakila.language LIMITE 5 OFFSET 1;`

- Usando a tabela film:

8. Selecione todos os dados da tabela. 
    - Crie uma query para encontrar os 20 primeiros filmes, incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

```
SELECT title, release_year, length, rating, replacement_cost
FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMITE 20;
```
#

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

# Parafixar

1. Mostre todos os detalhes dos filmes que contêm a palavra ace no nome.
```
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';
```

2. Mostre todos os detalhes dos filmes cujas descrições finalizam com china.
```
SELECT * FROM sakila.film
WHERE description LIKE '%china';
```

3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra girl e o título finaliza com a palavra lord.
```
SELECT * FROM sakila.film
WHERE description LIKE '%girl'
AND title LIKE '%lord'
LIMIT 2;
```

4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra gon.
```
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';
```

5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra gon e a descrição contém a palavra Documentary.
```
SELECT * FROM sakila.filme
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';
```

6. Mostre os dois filmes cujos títulos ou finalizam com academy ou iniciam com mosquito.
```
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';
```

7. Mostre os seis filmes que contêm as palavras monkey e sumo em suas descrições.
```
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';
```

# Englobando uma faixa de resultados com IN e BETWEEN

# Operador IN

É possivel juntar várias condições nas suas queries usando os operadores AND e OR. No entanto, ainda é necessário digitar cada condição separadamente;
```
SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';
```

Uma forma melhor de fazer essa mesma pesquisa seria usando o IN:
```
SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE', 'NICK', 'ED', 'JENNIFER');
```

Esse mesmo processo pode ser realizado para números;
```
SELECT * FROM sakila.customer
WHERE customer_id IN (1, 2, 3, 4, 5);
```

# BETWEEN

Você pode usar o between para determinar um alcance de busca, determinando que entre um valor especifico inicial e um valor final, devem aparecer todos os resultados;
```
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 and 120;
```

Resultado da busca acima, seria os valores entre os valores indicados incluindo eles.

## BETWEEN com strings

Para encontrar uma faixa de valores em que os valores são strings podemos digitar a palavra por completo para encontrar os valores.
```
SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;
```

No exemplo acima, será apresentado os resultados de todas linhas entre Italian e mandarin.

## BETWEEN com datas

Deve ser usado o valor padrão de datas a seguir: YYYYY-MM-DD HH:MM:SS, sendo os valores de horas, minutos e segundos opcionais.
```
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';
```

Consulta acima, retorna as colunas rental_id e rental_date, entre os meses 05 e 07;

# Parafixar

1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
```
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
```

2. Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
```
SELECT email FROM sakila.customer
WHERE address_id BETWEEN(172) AND (176)
ORDER BY email;
```

3. Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
```
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN('2005-05-01') AND ('2005-08-01');
```

4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
```
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN(3) AND (6)
ORDER BY rental_duration DESC,title;
```

5. Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Os resultados devem estar ordenados por título.
```
SELECT title, rating FROM sakila.film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
```

# Datas

[Tipos de dados](https://www.mysqltutorial.org/mysql-data-types.aspx) temporais.

- DATE: Possui apenas data, no formato YYYY-MM-DD na faixa de 1001-01-01 até 9999-12-31
- DATETIME Possui data e tempo, no formato YYYY-MM-DD HH:MM:SS com a faixa de 1000-01-01 00:00:00 até 9999-12-31 23:59:59

# Maneiras de encontrar dados por data
```
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';
```
Será mostrada todos elementos que possui a coluna payment_date igual a data indicada.

Usando LIKE para valores aproximados:
```
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';
```

Resultado encontra todos pagamentos deste dia, ignorando o tempo.
```
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';
```
Resultado encontra o pagamento com dia e hora exatos.

Usando BETWEEN:
```
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '205-05-27 23:59:59';
```

Resultado da pesquisa, encontra pagamentos especificando um valor mínimo e um valor máxim para a data.

# Selecionando paenas partes de uma data

-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo

# Parafixar

1. Quantos pagamentos temos com a data de retorno 2005-05-25? Há múltiplas maneiras possíveis de encontrar a resposta.
```
SELECT COUNT(*) FROM sakila.rental
WHERE return_date LIKE '2005-05-25%';
```

2. Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005?
```
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN('2005-07-01') AND ('2005-08-22');
```

3. Usando a tabela rental, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
```
SELECT rental_date FROM sakila.rental
WHERE rental_id = 10330;
```

4. Monte uma query que retorne todos os dados do pagamento feito no dia 28/07/2005 a partir das 22 horas.
```
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-28 22%';
```

# Banco para o exercicio

```
DROP SCHEMA IF EXISTS PecasFornecedores;
CREATE SCHEMA PecasFornecedores;
USE PecasFornecedores;

CREATE TABLE Pecas (
  code INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecedores (
  code VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecimentos (
  code INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  peca INTEGER,
  FOREIGN KEY (peca) REFERENCES Pecas (code),
  Fornecedor VARCHAR(40),
  FOREIGN KEY (fornecedor) REFERENCES Fornecedores (code),
  Preco INTEGER NOT NULL
);

CREATE TABLE Vendas (
  code INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fornecimento INTEGER,
  quantity INTEGER,
  order_date DATETIME,
  FOREIGN KEY (fornecimento) REFERENCES Fornecimentos (code)
);

INSERT INTO Fornecedores(code, name)
  VALUES ('ROB', 'Robauto SA'),
    ('CNF', 'Confiauto LTDA'),
    ('MAP', 'Malok Auto Peças'),
    ('INF', 'Infinity Peças LTDA');

INSERT INTO Pecas(code, name)
  VALUES (1, 'Rebimboca'),
    (2, 'Parafuseta'),
    (3, 'Grampola'),
    (4, 'Grapeta');

INSERT INTO Fornecimentos(peca, fornecedor, preco)
  VALUES (1, 'CNF', 10),
    (1, 'ROB', 15),
    (2, 'CNF', 20),
    (2, 'ROB', 25),
    (2, 'MAP', 14),
    (3, 'INF', 50),
    (3, 'MAP', 45),
    (4, 'CNF', 5),
    (4, 'ROB', 7);

INSERT INTO Vendas(fornecimento, quantity, order_date)
  VALUES (1, 3, '2017-05-22 11:28:36'),
    (2, 2, '2018-03-22 11:35:24'),
    (3, 8, '2018-11-16 15:51:36'),
    (3, 10, '2019-02-13 13:23:22'),
    (8, 5, '2019-06-11 12:22:48'),
    (6, 1, '2019-09-07 09:53:58'),
    (7, 3, '2020-01-05 08:39:33'),
    (9, 5, '2020-05-13 14:05:19');
```

1. Faça uma consulta que retorne todas as peças que começam com as letras GR.
```
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE '%GR%';
```
2. Escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
```
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE code = 2;
```
3. Faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
```
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%n%';
```
4. Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
```
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;
```
5. Faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.
```
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';
```
6. Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
```
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE preco BETWEEN(15) AND (40)
ORDER BY preco;
```
7. Faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
```
SELECT * FROM PecasFOrnecedores.Vendas
WHERE order_date BETWEEN ('2018-04-15) AND ('2019-07-30').
```

# Bônus

## BD para o exercicio:
Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste [link](https://creativecommons.org/licenses/by-sa/3.0/).

```
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN, Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

1. Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra 'e' em seu nome.
```
SELECT * FROM Scientists
WHERE name LIKE '%e%';
```
2. Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.
```
SELECT * FROM Prjects
WHERE Code LIKE 'A%'
ORDER BY Name;
```
3. Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.
```
SELECT code, name FROM Projects
WHERE code LIKE '%3%'
ORDER BY name;
```
4. Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.
```
SELECT COUNT(*) AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');
```
5. Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
```
SELECT * FROM Projects
WHERE Hours > 500;
```
6. Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
```
SELECT * FROM Projects
WHERE Hours BETWEEN(250) AND (800);
```
7. Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.
```
SELECT name, code FROM Projects
WHERE name NOT LIKE 'A%';
```
8. Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
```
SELECT name FROM Projects
WHERE code like '%h%';
```
#

# Insert

- Backticks ou crase (``): são usadas para identificar nome de tabelas e colunas. São necessárias apenas quando o identificador for uma palavra reservada do MySQL, ou quando o nome da tabela ou coluna contiver espaços em branco.

- Aspas simples (''): devem ser usadas em valores do tipo string. Aspas simples são aceitas na maioria dos sistemas de gerenciamento de banco de dados, sendo assim, é preferível usar aspas simples no lugar das aspas duplas.

Sintax para inserir dados em uma tabela:
```
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');
```

## Inserindo várias linhas de uma vez

Inserindo múltiplas linhas em uma tabela com uma única query:
```
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1', 'valor_2'),
('valor_3', 'valor4'),
('valor_5', 'valor_6');
```

## Inserindo selecionando informações de várias tabelas

```
INSERT INTO store (manager_staff_id, address_id)
	SELECT
		(SELECT staff_id FROM staff WHERE first_name = 'mary'),
    (SELECT address_id FROM address WHERE address = '1440 Fukuyama Loop');
```

## Ignorando linhas existentes

| id | name |
| --- | --- |
| 1 | Nissim |
| 2 | Garrison |
| 3 | Benjamin |
| 4 | Gloria |
```
INSERT IGNORE INTO pessoas (id, name) VALUES
(4, 'Gloria'),
(5, 'Amanda');
```

Caso não fosse usado o ignore ele retornaria um erro, e não iria inserir a Amanda, com ignore ele ignora a parte com erro, e adicionaria o valor.

## Inserindo valores em colunas com auto_increment

Colunas que possui auto_increment é omitida no INSERT, caso fosse inserido na tabela superior id como auto_increment, seria inserido somente o nome, e ele seguiria a contagem incremental.

## INSERT SELECT (Inserindo dados de uma outra tabela)

É possivel inserir dados a partir de outro tabela usando o INSERT INTO SELECT:
```
INSERT INTO tabelaA (coluna1, coluna2)
  SELECT tabelaB.coluna1, tabelaB.coluna2
  FROM tabelaB
  WHERE tabelaB.nome_da_coluna <> 'algumvalor'
  ORDER BY tabelaB.coluna_de_ordenacao;

```

# Parafixar

1. Insira um novo funcionário na tabela sakila.staff.
Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
```
INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username)
VALUES ('David', 'Rogger', 2, 1, 1, 'dvd');
```
2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
```
INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username) VALUES
('Jonas', 'Thirsty', 2, 1, 1, 'jthir'),
('Emanuel', 'delavants', 1, 1, 1, 'emavants');
```
3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
```
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    LIMIT 5;
```
4. Cadastre três categorias de uma vez só na tabela sakila.category.
```
INSERT INTO sakila.category (name) VALUES
('Koreama'),
('Slice of life'),
('Isekai');
```
5. Cadastre uma nova loja na tabela sakila.store.
```
INSERT INTO sakila.store (manager_staff_id, address_id) VALUES
(5, 10);
```

# UPDATE

| staff_id | first_name | last_name |
| --- | --- | --- |
| 1 | Devidi | Nizuk |

Sintaxe:
```
UPDATE sakila.staff
SET first_name = 'David'
WHERE first_name = 'Deividi'
```
```
UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!
```

Uma curiosidade sobre o UPDATE e o DELETE no MySQL Server é que, por padrão, existe uma configuração chamada safe updates mode que só vai te permitir executá-los caso eles incluam quais ID's devem ser modificados.

Para evitar essa restrição deve-se usar o seguinte comando: `SET SQL_SAFE_UPDATES = 0`

## Alterando mais de uma coluna ao mesmo tempo

Basta inserir o nome da coluna que seja alterar, em seguida definir o id do usuário.
```
UPDATE sakila.staff
SET first_name = 'David', last_name = 'Rogger'
WHERE staff_id = 1;
```

## Update em massa

```
-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);
```

[Link com mais informações sobre o case](https://www.w3schools.com/sql/func_mysql_case.asp)

## Fazendo um UPDATE de forma sequencial

Se o comando ORDER BY for usado juntamente com o UPDATE, os resultados serão alterados na ordem em que forem encontrados.

Se o comando LIMIT for usado em conjunto com o UPDATE, um limite será imposto na quantidade de resultados que podem ser alterados. Caso Contrário, todos os resultados que satisfizerem a condição serão atualizados.

Os valores entre colchetes([]) são opcionais:
```
UPDATE nome_da_tabela
SET coluna1 = valor1, coluna 2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC]]
[LIMIT quantidade_resultados];

UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;
```

## --safe-updates

A opção --safe-updates exige que o mysql execute a seguinte instrução ao se conectar ao servidor:
```
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
```

- sql_select_limit=1000: limita o conjunto de resultados SELECT a 1.000 linhas, a menos que a instrução inclua LIMIT.

- max_join_size=1.000.000: faz com que as instruções SELECT de várias tabelas produzam um erro se o servidor estimar que deve examinar mais de 1.000.000 combinações de linhas.

Você pode desabilitar o --safe-updates utilizando o comando SET:
```
SET SQL_SAFE_UPDATES = 0;
```

Ou configurar para um modo mais conveniente para você, alterando os valores das variáveis:
```
SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;
```

# Parafixar

1. Atualize todas as linhas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
```
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'julia';
```
2. Altere a linha da tabela categoria onde o valor da coluna x é igual "Sci-fi" para "Science Fiction".
```
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';
```
3. Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que possuem classificação "G", "PG" ou "PG-13" e um custo de substituição maior que $20.
`Não existe columa rental_cost usei replacement_cost como coluna de substituição.`
```
UPDATE sakila.film
SET replacement_cost = 25
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;
```
4. Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel dos filmes com duração acima de 100 minutos passará a ser de $20,00.
```
UPDATE sakila.film
SET replacement_cost = (
CASE 
  WHEN length BETWEEN(0) AND (100) THEN 10
	WHEN length > 100 THEN 20
ELSE replacement_cost
END);
```

## DELETE

Não necessariamente itens que foram excluidos, foram excluidos, pois por normais para necessidade de relatórios eles ficam em estado de inativo ou até como excluidos, sem serem necessariamente removidos do local.

Sintaxe:

DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.

Exemplo:
```
DELETE FROM sakila.film
WHERE title = 'ACADEMY DINOSAUR';
```

## DELETE Não permitido

Caso haja relações entre as tabelas (primary key e foreign keys) e existam restrições aplicadas a elas, ao executar o DELETE ocorrerá uma ação de acordo com a restrição que tiver sido imposta na criação da foreign key. Essas restrições podem ser as seguintes:
```
-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;
```

Exemplo:
```
DELETE FROM sakila.actor
WHERE first_name = 'GRACE';
```

O banco de dados não vai permitir que você delete o ator chamado "GRACE". Isso acontece porque a coluna actor_id da tabela film_actor é uma chave estrangeira (foreign key) que aponta para a coluna actor_id na tabela actor, e essa chave estrangeira possui a restrição ON DELETE RESTRICT. Se essa restrição não existisse, o ator seria deletado, deixando nosso banco de dados em um estado inconsistente, pois haveria linhas na tabela film_actor com um actor_id que não mais existiria!
Para conseguir excluir este ator em actors, precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor:
```
DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE
```

Após excluir as referências, podemos excluir o ator com o nome "GRACE":

## DELETE VS TRUNCATE

Se tem certeza absoluta de que quer excluir os registros de uma tabela de uma maneira mais rápida, para efeitos de testes ou necessidade, o TRUNCATE é mais rápido que o DELETE. A função principal e única do TRUNCATE é de limpar (excluir todos os registros) de uma tabela, não sendo possível especificar o WHERE. Por isso, o TRUNCATE só pode ser usado nesse cenário.
```
TRUNCATE banco_de_dados.tabela;
```
Caso precise excluir condicionalmente, usando regras e especificações, use sempre o comando DELETE juntamente com o WHERE.

# Parafixar

1. Exclua do banco de dados o ator com o nome de "KARL".
```
DELETE FROM sakila.film_actor
WHERE actor_id = (
SELECT actor_id FROM sakila.actor
WHERE first_name = 'karl');

DELETE FROM sakila.actor
WHERE first_name = 'karl';
```
2. Exclua do banco de dados os atores com o nome de "MATTHEW".
```
SELECT actor_id FROM sakila.actor
WHERE first_name = 'matthew';

DELETE FROM sakila.film_actor
WHERE actor_id = (8, 103, 181) -- numeros encontrando com o SELECT acima
```
3. Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
```
DELETE FROM sakila.filme_text
WHERE description LIKE '%saga%';
```
4. Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
```
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_actor;
```
5. Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).

----

6. Exclua o banco de dados e o recrie (use as instruções no início desta aula).
```
DROP Schema sakila;
```
#

Recursos Adicionais:

1. [Resetar Senha de Usuário](https://stackoverflow.com/questions/42153059/mysqld-safe-directory-var-run-mysqld-for-unix-socket-file-dont-exists)

# 20.1
1. [Diferença entre dados, informações e conhecimento](https://www.estrategiaconcursos.com.br/blog/dados-informacao-conhecimento-uma-apresentacao)
2. [Importância dos bancos de dados na sociedade](https://tecnoblog.net/responde/banco-de-dados-importancia/)
3. [O que é um banco de dados?](https://www.homehost.com.br/blog/tutoriais/mysql/o-que-e-um-banco-de-dados/)
4. [Explicação e exercícios sobre tipos de chaves](https://www.blogson.com.br/chave-primaria-estrangeira-e-composta-no-mysql)
5. [SQL vs NoSQL, como são diferentes?](https://www.treinaweb.com.br/blog/sql-vs-nosql-qual-usar)
6. [Guia de Estilo SQL · SQL Style Guide](https://www.sqlstyle.guide/pt-br/)

# 20.2
1. [Introdução ao básico do SQL com prática](https://sqlzoo.net/wiki/SELECT_basics)
2. [W3Schools Curso SQL Online](https://www.w3schools.com/sql/)
3. [Documentação Oficial MySQL](https://dev.mysql.com/doc/refman/8.0/en/)
4. [Tutorial Sobre tipos de comando SQL do W3Schools](https://www.w3schools.in/mysql/ddl-dml-dcl/)
5. [Tutorial sobre tipos de comando SQL do Java T Point](https://www.javatpoint.com/dbms-sql-command)

# 20.3
1. [Quiz prêmio nobel com MySQL](https://sqlzoo.net/wiki/Nobel_Quiz)
2. [Desafios do HackerRank sobre conhecimentos básicos](https://www.hackerrank.com/domains/sql?filters%5Bsubdomains%5D%5B%5D=select)
3. [Lidando com datas no MySQL](https://popsql.com/learn-sql/mysql/how-to-query-date-and-time-in-mysql)
4. [Recrusos para aprender e praticar SQL](https://www.w3resource.com/mysql/mysql-tutorials.php)
5. [Dates area more troublesome than they seem!](https://www.youtube.com/watch?v=-5wpm-gesOY)

# 20.4
1. [Tutorial sobre INSERT do Guru99](https://www.guru99.com/insert-into.html)
2. [Tutorial sobre INSERT do MySQL Tutorial](https://www.mysqltutorial.org/mysql-insert-statement.aspx)
3. [Tutorial sobre UPDATE do MySQL Tutorial](https://www.mysqltutorial.org/mysql-update-data.aspx)
4. [Tutorial sobre DELETE e UPDATE do Guru99](https://www.guru99.com/delete-and-update.html)
5. [Tutorial sobre DELETE do MYSQL Tutorial](https://www.mysqltutorial.org/mysql-delete-statement.aspx)
6. [Tutorial sobre DELETE do Tech On The Net](https://www.techonthenet.com/mysql/delete.php)
7. [Documentação sobre restrições de chaves estrangeiras no MySQL](https://dev.mysql.com/doc/refman/5.7/en/create-table-foreign-keys.html)