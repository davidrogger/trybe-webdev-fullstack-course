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

# Configurando Sequelize

instalando:
```
npm init -y
npm i sequelize
npm i sequelize-cli
npm i mysql2
```

Depois de instalado o CLI, é necessário iniciar um projeto com o comando `npx sequelize-cli init`

Ele irá criar as pastas:

- configs: contém um arquivo de configuração, com orientaçoes para o CLI se conectar com o nosso banco de dados;
- models: contém todos os modelos da nossa aplicação;
- migrations: contém todos os arquivos de migração da nossa aplicação;
- seeders: contém todos os arquivos de "seeds" (sementes que são usadas para poupar o banco).

## Conexão com o banco de dados

config.json
{
  "development": {
    "username": "root",
    "password": "",
    "database": "orm_example",
    "host": "127.0.0.1",
    "dialect": "mysql",
  }

  // No resto do arquivo você vai encontrar as convenções para conectar o Sequelize em outros ambientes
}

# Criação do banco de dados usando o CLI do Sequelize

criar o banco de dados orm_example pelo comando `npx sequelize db:create`

# Para criar um model:

`npx sequelize model:generate --name NomeDoModel --attributes nameDoAtributo:string`;

Exemplo: `npx sequelize model:generate --name User --attributes fullName:string`

Depois de rodar esse comando, foi criado um arquivo user.js na pasta model, e na pasta migration foi criado o arquivo com a data yyy-mm-dd-hh:mm:ss-create-user.js

Dentro do arquivo user, temos um código padrão do sequelize, vamos trocar para o define, pois ainda não iremos usar orientação ao objeto:
```
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;
```

# Migrations

É uma forma de versionar o schema do banco de dados. Ou seja, cada migration conterá um pedaço de código que representa o histórico de alterações feitas no nosso banco de dados.

Ao escrever um código definindo como um banco de dados deve ser criado esse código fica salvo num arquivo na psta migrations. Após um tempo, uma atualização é feita e uma coluna é acrescentada em uma tabela, será escrito o código em outro arquivo para acrescentar essa coluna, cada arquivo será mercado com uma estampa de datetime, então ao longo do tempo esse código vai empilhar dezenas, às vezes centanas de arquivos. Cada um desses arquivos merca uma versão do banco de dados e o seu histórico de mudanças e evoluções.
Quem clona umprojeto pela primeira vez roda suas migrations para configurar o banco de dados no formato mais recente enviado para master, sem ter que fazer mais nada. Aí sim, é possível trabalhar localmente no banco de dados da aplicação sem medo de ele ser diferente da versão mais nova que encontramos na master.

Usando migrations, o mapeador objeto-relacional sabe exatamente quais alterações executar no banco de dados, tanto para criar algo novo quanto para restaurar o banco para um versão mais antiga. Além disso, uma migration tem dois códigos conhecidos como Up e Down. Ou seja: toda migration, além de saber o que fazer para executar as mudanças no banco de dados(Up), também deve saber como reverter essas mudanças(Down). Isso significa que as migrations têm o poder de avançar ou reverter o seu banco de dados para qualquer um dos estados que ele já teve.

Configurando a migration:

no arquivo na psta migration após criar o user, deve ser algo similar ao item abaixo:
```
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
```

# Funções UP e DOWN

Ambos recebem dois parâmetros, queryinterface eo Sequelize, eles são objetos que armazenam dados e operações.
- queryInterface: é usado pela biblioteca para modificar o banco de dados, seguindo o "dialeto" do banco que estamos utilizando. 
- sequelize: armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar, string, integer, date e etc.

Na criação automática do o model foi criado com os campos id, fullName, createdAt e updatedAt o que facilita bastante o trabalho.

Com a migration criada, é necessario adicionar o que ela vai fazer, tanto na execução (up), quando na reversão (down).

Adicionando uma coluna de email na migration da tabela Users;
```
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      // adicionamos um novo campo 'email' como foi feito no model !
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
```

Com o dado adicionado, basta executar o seguinte comando pelo CLI: `npx sequelize db:migrate`

Caso seja necessario reverter a migration: `npx sequelize db:migrate:undo`