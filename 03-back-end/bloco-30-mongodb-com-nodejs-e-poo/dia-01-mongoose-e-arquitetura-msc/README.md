# Mongoose

No mundo dos bancos de dados e APIs, existem dezenas de ferramentas que são criadas para facilitar a interação e a manipulação desses dados, assim fornencendo rubestez à sua aplicação.

- ORM's (Object Relational Mapping), que lidam com dados estruturados em bancos de dados relacionais (MySQL, PostgreSQL e etc...).
- ODM's (Object Document Mapping), que lidam com dados estruturados em bancos de dados não relacionais (como o MongoDB).

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

