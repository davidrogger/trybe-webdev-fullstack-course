# Mongoose

No mundo dos bancos de dados e APIs, existem dezenas de ferramentas que são criadas para facilitar a interação e a manipulação desses dados, assim fornencendo rubestez à sua aplicação.

- **ORM's:** (Object Relational Mapping), que lidam com dados estruturados em bancos de dados relacionais (MySQL, PostgreSQL e etc...).
- **ODM's:** (Object Document Mapping), que lidam com dados estruturados em bancos de dados não relacionais (como o MongoDB).

O mongoose é um desses ODMs, trabalhando como se fosse um tradutor.

Temos uma API escrita em Node.js, cujo objetivo é acessar nosso banco de dados em MongoDB e realizar manipulações de dados. Porém, o Mongo não entende diretamente JavaScript/TypeScript, precisando assim de um tradutor, ou seja, "alguém" que faça com que a interação entre essas duas partes seja facilitada.

# Criando uma conexão no MongoDB com o Mongoose

Primeiramente instalando:
```
npm install mongoose
```

Criando o arquivo de conexão:
```
import { connect } from 'mongoose';

connect('mongodb://localhost:27017/nomeDaBaseDeDados');
```

# Mais configurações em minha conexão

- Pode-se passar o usuário e senha, tanto pela URI, quando como segundo parametro do connect.

```
connect('mongodb://username:password@localhost:27017/nomeDaMinhaBaseDeDados');
```
```
connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', options);

//options deve ser um objeto:
connect('mongodb://localhost:27017/nomeDaMinhaBaseDeDados', { user: 'user', pass: 'password' });
```

Mais indicado é o uso de variaveis de ambiente para acesso do password e usuário por questões de segurança.

Mais campos relacionados a opções do segundo parâmetro:
```
const options = {
  user: 'user', // Usuário do banco de dados.
  pass: 'password' // senha do usuário do banco de dados.
  autoIndex: false, // Não cria index para cada inserção de dado no banco.
  dbName: 'glassesStore', // Define qual banco de dados vou utilizar.
};

connect('mongodb://localhost:27017/', options);
```

- autoIndex - Por padrão, o Mongoose construirá automaticamente os índices definidos em seu schema quando se conectar. Isso é ótimo para desenvolvimento, mais não é o ideal para grandes implementações de produção, pois as compilações de índice podem causar prejuízos do desempenho.

- dbName - Específica a qual banco de dados se conectar e substitui qualquer banco de dados especificado na cadeia de conexão. Isso é útil quando não pudermos definir um banco de dados padrão na cadeia de conexão, como em algumas mongodb+srv (exemplo: 'mongodb://localhost:27017/meu_data_base') e conexões de sintaxe.

Se for dedinido autoIndex como false, o mongoose não criará índices automaticamente para nenhum modelo associado a essa conexão.

# Interface, Schemas e Models

Na prática para acessar uma consulta simples, db.books.find(); Essa consulta retorna todos os documentos de coleção chamada books, como abaixo:
```
[
  { title: 'Design Patterns com Java', author: 'Eduardo Guerra' },
  { title: 'Arquitetura limpa', author: 'Robert C. Martin' },
  { title: 'Refatoração', author: 'Martin Fowler' }
]
```
Acima temos uma estrutura básica dos documentos da coleção books, cada documento possui sua, chave title e author.

No mongoose, essa estrutura básica é chamada de schema. Para acessarmos os dados utilizando o Mongoose, precisamos primeiro escrever um schema para a coleção que gostariámos de acessar. Para representar um schema em TypeScript usamos as interfaces:

```
import { Schema } from 'mongoose';

interface IBook {
  title: string,
  author: string,
}

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }});
```
O método schema(ex: new Schema<Book>) pode receber até 3 parâmetros genéricos dentro dos <> em sua instanciação, estes parâmetros são:
- DocType: A interface que descreve os dados do nosso schema, que por sua vez também representa a coleção no MongoDB e no nosso caso acima, usamos a interface IBook;
- Model: A tipagem do Model. Geralmente é omitida se o próximo parâmetro não for passada (como padrão ela recebe a tipagem do próprio DocType);
- TInstanceMethods: Uma interface que contém os métodos deste schema;

[Mais informações sobre os parâmetros](https://mongoosejs.com/docs/typescript/schemas.html)

Dentro da interface definimos cada campo presente no schema. Caso algum campo do schema, esteja diferente a interface(nome diferente), ele emitira um erro na hora de transpilar, porém se o schema retornar algum campo faltando, não teremos nenhum erro.

Exemplo:
```
import { Schema } from 'mongoose';

interface IBook {
  title: string,
  author: string,
  coAuthor: string,
}

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }});
```

Isso ocorre pois, mesmo que você não deixe explícito ao construir o seu schema, o Mongoose possui inúmeras ferramentas que adicionam campos no schema. Para aprofundar e entender mais sobre acesse [aqui](https://app.betrybe.com/course/back-end/mongodb-com-nodejs-e-poo/mongodb-e-arquitetura-msc/937f00cb-42ae-42f4-9705-b46b1214cdc4/recursos-adicionais-opcional/2c51579c-9054-48c8-906b-ffbeec380bec?use_case=side_bar).

# Aprofundando mais em schemas e models

Ao criar o nosso bookSchema, estamos dizendo ao Mongoose que possuímos uma coleção de livros na sua base de dados, que segue a estrutura passada. Caso algum campo definido no Schema<Interface> seja opcional, ou não exista em alguns dos documentos da sua base de dados, basta definir o seu tipo e omitir a chave required. Assim o Mongoose interpretará o campo required como false.
Criar schemas não é o suficiente para termos acesso completo e começar a manipular os dados do nosso banco utilizando TypeScript, precisamos criar um Model baseado no schema que foi criado.

```
// Repare que aqui importamos a função 'model' do Mongoose:
import { Schema, model } from 'mongoose';

// interface IBook {
//   title: string,
//   author: string,
// }

// const bookSchema = new Schema<IBook>({
//   title: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
// });

// Para acessarmos os métodos disponibilizados pelo Mongoose(create, find, update...) e
// implementarmos nossa API, criamos um model

const bookModel = model<IBook>('Book', bookSchema);
```

A função model recebe dois parâmetros:

- 1º parâmetro: Uma string que representa o nome da coleção no nosso banco de dados;
- 2º parâmetro: A variável que armazena nosso schema e que fazemos referência no Model;
- E para a função também podemos passar um generic;
- - No Exemplo representado por nosso interface <IBoook>

Com isso temos acesso a todos os métodos find, create, e etc... apartir do bookModel.

# Como pensar orientado a objetos

Uma das maiores vantagens da arquitetura MSC é que, ao dividir as funções e responsabilidades da aplicação em camadas, podemos fazer alterações em uma das partes sem que as outras sejam afetadas.
É na camada model, que são definidas as estruturas de dados utilizadas em uma aplicação e é responsabilidade desta camada abstrair todos os detalhes de acesso, é lá que precisaremos fazer as adequações necessárias.
Ja sabemos que a camada model é a camada responsável pela interação com nosso banco de dados, mas qual banco de dados? Qualquer um ! A camada model não precisa saber qual banco estamos trabalhando, ela sabe apenas que devemos criar, alterar, pesquisar e deletar coisas, independente da coisa ou banco de dados, sendo ele relacional ou não.
A camada é apenas uma abstração e sua implementação real é parecida em qualquer cenário.

# Camada Model com Mongoose

[Boileplate](https://github.com/davidrogger/guia-mongodb-com-nodejs-e-poo) para praticar.

Dependencias instaladas nesse repositório:

- mongoose
- express
- express-async-erros
- zod

Dependencias de desenvolvimento:

- dotenv
- typescript
- @types/express
- @types/node
- @ts-node-dev

Boilerplate ou código boilerplate, no contexto de programação se refere a seções de código que podem ser incluídas em muitos lugares com pouca ou nenhuma alteração.

# Interfaces e como aumentar a produtividade com Zod

Para criar um model de algo, por exemplo lens, é necessário de um schema que por sua vez possa receber um generic para que nossos objetos tenham os atributos que definimos lá! Porém um ponto importante a se observar é que por mais que o TypeScript garanta os tipos dos dados que utilizamos durante o desenvolvimento, ele não garante estes tipos durante a execução.
No caso de uma API como a nossa, se dissermos que vamos receber no corpo da requisição um conteúdo do tipo lens, o TypeScript deixará você acessar os atributos de acordo no seu código. Mas se por algum motivo uma requisição inválida for enviada, seu código quebrará durante a execução pois você pode tentar acessar um valor inexistente ou com um tipo inválido.
Para que isto não aconteça, é necessário que façamos validações dos tipos e valores ao recebermos as requisições. Entretanto, conforme a aplicação cresce, é inviável fazer cada validação de forma manual. Por isso, utilizaremos a biblioteca Zod para definir nossas tipagens e se responsabilizar pela validação dos dados na camada de service.

```
// ./src/interfaces/Lens.ts

import { z } from 'zod';

const lensZodSchema = z.object({
  degree: z.number(),
  antiGlare: z.boolean(),
  blueLightFilter: z.boolean()});

type ILens = z.infer<typeof lensZodSchema>;

export default ILens;
export { lensZodSchema };
```

Se não estivessemos usando o zod, seria o mesmo que:
```
interface ILens {
  degree: number,
  antiGlare: boolean,
  blueLightFilter: boolean,
}

export default ILens;
```

Como o schema que o Zod cria para validação não é um tipo do TypeScript, foi criado esse tipo explicitamente utilizando type MeuTipo = z.infer<typeof MeuSchema>. Mesmo sendo um type (não uma interface), se comporta da mesma forma que nossa interface. Já que o MeuSchema é o lensZodSchema.

Schema Frame:
```
// ./src/interfaces/Frame.ts

import { z } from 'zod';

const FrameZodSchema = z.object({
  material: z.string(),
  color: z.string({
    required_error: 'Color is required',
    invalid_type_error: 'Color must be a string',
  }).min(3, { message: 'Color must be 3 or more characters long' })});

type IFrame = z.infer<typeof FrameZodSchema>;

export default IFrame;
export { FrameZodSchema };
```

A título de exemplo do uso do Zod, nosso atributo color também possui erros personalizados, por exemplo, se não for passado o atributo (required_error) ou se o tipo estiver incorreto (invalid_type_error), bem como uma validação de que deve possuir pelo menos 3 caracteres (no método min). [Mais possibilidades com o Zod](https://github.com/colinhacks/zod#defining-schemas).

# Interfaces Genéricas e Classes Abstratas

Padronizando através de uma interface, nós temos apenas 2 entidades(lens e frame), mas poderíamos ter várias e eu gostaria que todas tivessem os mesmo meodos e comportamentos. Dentro do diretório interfaces vamos criar o arquivo IModel.ts com o seguinte código:
```
// ./src/interfaces/IModel.ts

interface IModel<T> {
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T | null>,
}

export default IModel;
```

IModel recebe um genérico. Isso é necessário pois cada model irá receber um objeto diferente e seus retornos vão ser tipos diferentes também. Por exemplo, podemos ter um model de frame e outro de Lens, o método read no model de framee vai retornar um Frame (ou null), enquanto que o mesmo método no model de Lens vai retornar uma Lens (ou null).

Como todas as models que forem criadas tem que ter obrigatóriamente os métodos create e readOne, podemos criar um unico mode que pode ser usado em todos.

Dentro do diretório de models, vamos criar um arquivo chamado MongoModel.ts e começar a escrever nossa classe abstrata, vamos usar esse nome, pois se um dia por algum motivo precisarmos mudar o banco de dados da aplicação, poderíamos ter um outrobancoModel assim diminuindo o desacoplamento em nossa aplicação.
```
// ./src/models/MongoModel.ts

import IModel from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  // atributos...
  // métodos...
}

export default MongoModel;
```

Aqui começamos importando nossa interface IModel e implementamos ela em nossa MongoModel. MongoModel continua recebendo um genérico, pois essa classe poderá ser utilizada com diversos objetos diferentes. Dito isso, precisamos implmentar os métodos que a interface nos pede.

# Classes Lens e Frame

Criando os arquivos Lens com base na classe MongoModel:
```
// ./src/models/Lens.ts

import { model as mongooseCreateModel, Schema } from 'mongoose';
import ILens from '../interfaces/Lens';
import MongoModel from './MongoModel';

const lensMongooseSchema = new Schema<ILens>({
  degree: Number,
  antiGlare: Boolean,
  blueLightFilter: Boolean});

class Lens extends MongoModel<ILens> {
  constructor(model = mongooseCreateModel('Lens', lensMongooseSchema)) {
    super(model);
  }
}

export default Lens;
```
O Mongoose solicita, ao criarmos um model com a função model(que renomeamos para mongooseCreateModel) passamos a ela um esquema (Schema) que deverá ser respeitado. Esse esquema deve ter o tipo do model a ser criado, no caso do exemplo o tipo é ILens. Isso é necessário para que quando o nosso objeto for instanciado, podermos ter acesso ao todos os métodos e atributos disponíveis para usarmos.

Ao criarmos nosso Schema, chamado de lensMongoSchema, passamos como genérico o ILens. E em seguida, dentro do construtor da classe, criamos um model com a função mongooseCreateModel, passando 2 parâmetros:

- O 1º parâmetro é uma string com o nome da nossa classe para o Mongoose saber;
- O 2º parâmetro é o Schema que criamos para o Mongoose saber a estrutura que deve ser respeitada;

Observe que interessante, bastou criarmos o schema, sobrescrever o construtor com o valor padrão do model e extends nossa classe abstrata MongoModel. Assim conseguimos uma classe  que funciona como model para nosso Lens, como todos os métodos (create, read e etc..) agindo em cima do banco MongoDB.
O último ponto aqui é que ao estendermos a classe abstrata MongoModel, bastou apenas invocar seu construtor com a palapavra reservada super que os métodos escritos na super classe já podem ser utilizados sem nenhuma modificação! Se caso precisássemos mudar alguma coisa mais específica para Frame ou Lens, bastava fazer a sobescrita de algum método (antes comentamos sobre o Princípio de Substituição de Liskov, aqui veremos ele na prática).
```
// ./src/models/Frame.ts

import { model as mongooseCreateModel, Schema } from 'mongoose';
import IFrame from '../interfaces/Frame';
import MongoModel from './MongoModel';

const frameMongooseSchema = new Schema<IFrame>({
  material: String,
  color: String});

class Frame extends MongoModel<IFrame> {
  constructor(model = mongooseCreateModel('Frame', frameMongooseSchema)) {
    super(model);
  }
}

export default Frame;
```

Podemos criar diversas classes para diversos models, apenas criando o esquema exigido pelo Mongoose e herdando de MongoModel. Além disso, se for necessário, os métodos do CRUD podem ser sobrescritos na subclasse, de forma a implementar regras específicas para um model específico.

# Realizando testes na classe em Frame

Para realizar os testes é necessário a instalação das dependências de teste:

- mocha
- @types/mocha
- chai
- @types/chai
- sinon
- @types/sinon
- nyc
- [@istanbuljs/nycconfig-typescript](https://istanbul.js.org/)

Na raiz do projeto foi criado um arquivo chamado nyc.config.json e em nosso package.json adicionamos dois scripts:
```
"test:dev": "mocha -r ts-node/register src/tests/unit/**/*.test.ts --exit -t 60000",
"test:coverage": "nyc npm run test:dev"
```


