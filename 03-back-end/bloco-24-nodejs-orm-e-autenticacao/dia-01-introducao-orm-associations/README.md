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

# Sequelize

É uma das bibliotecas de ORM mais conhecidas, que segue o padrão Active Record, juntamente com uma aplicação simples Node.js.
A maioria dos métodos fornecidos pelo Sequelize são assíncronos, portanto retornam promises. Dito isso, podemos usar then, catch, async.

Sequelize possui muitas vantagens sobre a utilização de uma interface direta com o MYSQL. Quando tentamos fazer a interação direta com o banco de dados, enfrentamos problemas como:
- O Javascript sozinho não possui um suporte eficiente para o SQL, você precisaria de um script SQL separado para criar seu database e tabelas.
- As queries SQL precisam ser incorporadas ("embedadas") no código Javascript para serem utilizdas.
- Por causa dessas limitações, acabamos apenas incluindo boilerplates de SQL em vez de utilizar a lógica de négocio na nossa aplicação.

Boilerplates são trechos de código que podem ser reutilizados em muitos lugares com pouca ou nenhuma alteração.

Esses são alguns problemas que o Sequelize ajuda a resolver! Com ele, você pode evitar a criação de queries SQL para produzir as tabelas. Com o uso de models e migrations no Sequelize, o seu código se torna mais legível, extensível e de fácil manutenção.

Por meio do mapeamento de objetos relacionais (Active Record), é possível criar as relações e associações entre as tabelas com javascript. E ainda, é possível migrar o banco de dados para outro banco sem precisar reescrever todo o código (por exemplo mudar de MYSQL para SQL server);

