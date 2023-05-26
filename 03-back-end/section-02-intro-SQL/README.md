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

Recursos Adicionais:

1. [Resetar Senha de Usuário](https://stackoverflow.com/questions/42153059/mysqld-safe-directory-var-run-mysqld-for-unix-socket-file-dont-exists)

# 20.1
1. [Diferença entre dados, informações e conhecimento](https://www.estrategiaconcursos.com.br/blog/dados-informacao-conhecimento-uma-apresentacao)
2. [Importância dos bancos de dados na sociedade](https://tecnoblog.net/responde/banco-de-dados-importancia/)
3. [O que é um banco de dados?](https://www.homehost.com.br/blog/tutoriais/mysql/o-que-e-um-banco-de-dados/)
4. [Explicação e exercícios sobre tipos de chaves](https://www.blogson.com.br/chave-primaria-estrangeira-e-composta-no-mysql)
5. [SQL vs NoSQL, como são diferentes?](https://www.treinaweb.com.br/blog/sql-vs-nosql-qual-usar)

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