anotações pessoais do dia...

# API

Application Programing Interface, interface de programação de aplicação, é qualquer coisa que permita a comunicação, de forma programática com uma determinada aplicação.
São extremamente importantes nos dias de hoje, em que temos mútiplos clients se comunicando com o mesmo servidor.

# ENDPOINT

São como o proprio nome diz, o final do endereço que lidam com informações especificas, eles seguem recras;

A-dress vem do endereço de onde ele está hospetadada
B-inding como você vai poder acessar esse dado se é uma regra ou metodo.
C-ontract é algo que você pode ver dado a requisição que foi feita. Exemplo: se você está fazendo uma requisição de produtos, você irá ter acesso aos produtos.

AS API's seguem uma especificação podem ser Open API ou GRPC API.

# Segurança

Quando lidando com endpoint expostos é importante adesão de criptografia para os dados e certificação SSL(HTTPS) a certificação trás mais credibilidade para aplicação.

# Express

É um framework Node.js criado para facilitar a criação de APIs HTTP com Node. Ele foi construído pensando em um padrão de APIS chamado REST.
Existem outras ferrametnas semelhantes no mercado, mas ele é pergamente adotado pela comunidade hoje, e seu lançamento foi no final de 2010 deixando ele mais maduro para o uso, e ele é um framework sem opinião, isso significa que ele não impõe um padrão de desenvolvimento na hora de escrever sua aplicação.

Hoje ele faz parte do [Node.js Foundation](https://openjsf.org/) mostrando o quão relevante ele é para a comunidade.

# Criando uma aplicação com Express
```
mkdir hello-express
cd hello-express
npm init -y
```

instalando: `npm i express`

Criando um arquivo js na sequencia.

# Nodemon

Para facilitar o fluxo de desenvolvimento usamos o Nodemon, que reinicia a aplicação toda vez que editarmos e salvamos os nossos arquivos. Para utilizar esse pacote, vamos começar instalando ele.

`npm i nodemon -D`

Após instalar devemos adicionar o uso do node no script do package.json
```
//...
// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
		"dev": "nodemon index.js"
//  },
// ...
```

Ele não deve ser utilizado para rodar a aplicação para o usuário final, por reiniciar toda hora que o arquivo sofre alguma alteração, deve-se usar como `node index.js`.

# Roteamento

O aspecto mais básico de uma API HTTP se dá através de suas rotas, também chamadas de endpoints. Uma rota ou endpoint é definida pelo método HTTP e caminho.

No express. uma rota é registrada utilizando a assinatura app.METODO(caminho, callback), onde a função de callback recebe três parâmetros: request, response e next.

- request: geralmetne chamado de req, contém as informações enviadas pelo cliente ao servidor;
- next: função que diz para o Express que aquela callback terminou de ser executada, e que ele deve prosseguir para executar a próxima callback para aquela rota. Este parâmetro é opcional.
```
const express = require('express');
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método POST */
app.post('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método PUT */
app.put('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete('/', function (req, res) {
  res.send('Hello World!');
});

/* Rota com caminho '/' para qualquer método HTTP */
app.all('/', function (req, res) {
  res.send('Hello World!');
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route('/')
  .get(function (req, res) {
		// Requisições para rota GET `/` são resolvidas aqui!
    res.send('Hello World! Get');
  })
  .post(function (req, res) {
		// Requisições para rota POST `/` são resolvidas aqui!
    res.send('Hello World! post');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

