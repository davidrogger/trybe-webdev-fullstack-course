anotações do dia...

# ORM

Mapeamento objeto-realacional ou ORM (object-relational Mapping) é uma técnica que permite fazer um mapeamento estrutural entre as entidades do banco de dados e os objetos que as representam no código JavaScript. O mapeamento objeto-relacional abstrai as diferenças entre os dois paradigmas, da aplicação e do banco de dados.
Com ORM não precisamos mais escrever uma query SQL "crua" para cada vez que formos inserir um registro na tabela. A prórpa biblioteca fica responsável por isso. É necessário apenas passar o objeto JS para ela e ela insere os dados no banco de dados.

No Node.js temos o Sequelize, uma biblioteca de ORM bem conhecida e com suporte aos bancos de dados PostgreSQL, MariaDB, MySQL, SQLite e Microsoft SQL Server.

# Mapeamento

No mercado de trabalho existem dois padrões que são mais utilizados para fazer o mapeamento entre as entidades do banco de dados e os objetos que as representam no código. Esses padrões são Data Mapper e o Active Record. Ambos os padrões foram definidos por Martin Fowler em seu livro Padrões de Arquitetura de Aplicações Corporativas. Vamos entender um pouco mais sobre esses padrões a seguir.

# Data Mapper

Nesse padrão, a classe que representa a tabela do banco de dados não deve conehcer os recursos necessários para realizar as transações com o banco de dados.

# Active Record

Diferente do padrão Data Mapper, no Active Record a classe que representa a tabela conhece os recursos necessários para realizar as transações no banco de dados.

O padrão Active Record é mais simples de se implementar, mas o Data Mapper facilita atualizações e mudanças na estrutura do banco de dados. Por tanto, essas informações precisam ser levadas em consideração no momento de escolher um desses padrões.


