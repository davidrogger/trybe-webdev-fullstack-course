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


