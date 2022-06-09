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

# Estruturando uma API

Ao invés de utilizar o método .send, vamos usar o json, ja que o send consegue retornar a resposta de uma requisição de uma forma genérica, adaptando o tipo do retorno ao que será retornado, para deixar mais evidente o que vai ser devolvido é usado o .json.
```
const express = require('express');

const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', (req, res) => {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
```

Para uma aplicação back-end receber requisições de uma aplicação front-end, ou qualquer outra aplicação, é precisa instalar um módulo que libera o acesso da nossa API para outras aplicações. Para isso basta instalar um módulo chamado cors usando npm i cors e adicionar as seguintes linhas no seu arquivo index.js
```
// const express = require('express');
// const app = express();
const cors = require('cors');

app.use(cors());
```

# Parâmetros de rota

Caso precisemos acessar objetos específicos, o Express tem alguns recursos que vaibilizam passar informações para além da rota que você deseja buscar.
Páginas seguindo o mesmo template com informações diferentes são um exemplo de uso de parâmetro de rota, seguindo o padrão http://<site>/noticias/489 ou http://<site>/pedidos/713.
Para facilitar o processo é utilizado parâmetros de rota, que no express, podem ser definidos assim: </rota>/<:parametro> onde :parametro vai servir para qualquer valor que vier na URL com aquele prefixo.

No caso da API de receitas, pode-se montar uma rota que recebe o id como parâmetro:
```
// const express = require('express');
// const app = express();
//
// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];
//
// app.get('/recipes', function (req, res) {
// 	res.json(recipes);
// });

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// });
```

No código acima, o que fizemos foi adicionar uma rota /recipes/:id
Qualquer rota que chegar nesse formato, independentemente do id ser um número ou string, vai cair na segunda rota (ao invés de cair na rota /recipes definida no tópico anterior).
Para cessar o valor do parâmetro evniado na URL é feita a desestruturação do atributo id do objeto req.params. Note que o objeto req traz informações a respeito da requisição. É importante que o nome do parâmetro noemado na rota seja igual ao atributo que você está desestruturando. Por exemplo, se na definição da rota estivesse escrito /recipes/:nome teríamos que usar const { nome } = req.params.

# Query String

É usado em funcionalidades de pesquisa, quando se utiliza além da barra de pesquisa, filtros avançados para definir o preço máximo, marca e outras classificações em e-commerces.
```
// ...

app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});


// app.get('/recipes/:id', function (req, res) {
// 	const { id } = req.params;
// 	const recipe = recipes.find((r) => r.id === Number(id));
//  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});
//
//  res.status(200).send(recipe);
// });

// ...
```

A rota ficou apenas com o prefixo /recipes/search, já que os parâmetros enviados via query string não dependem desse prefixo e sim das informações que vem após o uso da ? na URL. é importante entender que é possível colocar na URL quantos parâmetros forem necessários, desde que eles sigam o formato <chave>=valor e que entre cada parâmetro exista o & para definir que ali está sendo passado um novo parâmetro.

Quando houver rotas com um mesmo radical e uma dela tuilizar parâmetro de rota, as rotas mais específicas sempre devem ser definidas antes. Isso por que ao resolver uma rota, o Express verifica rota por rota qual corresponde à URL que chegou. Se a rota for /recipessearch depois da rota /recipes/:id, o Express vai entender a palavra search como um id e vai chamar a callback da rota /recipes/:id.

Agora dicionando a possibilidade de filtro pelo preço:
```
// ...

app.get('/recipes/search', function (req, res) {
	const { name, maxPrice } = req.query;
	const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
	res.status(200).json(filteredRecipes);
})

// ...
```

Não foi preciso alterar a definição da rota, apenas foi feita uma alteração no código da callback para desestruturar também o atributo maxPrice do objeto req.query. Além disso, foi adicionado uma condição na chamada da função filter para filtrar os objetos pelo nome e pelo valor do atributo maxPrice enviado na requisição.

# Recebendo dados no body da requisição

Como visto é possível receber dados da URL via query string, porém em casos de dados sensíveis como uma senha ou número de algum documento importante, enviado via URL qualquer pessoa que conseguir espiar o tráfego da rede entre o cliente o servidor vai ter acesso a essa informação. Uma forma que o protocolo HTTP encontrou para resolver isso foi criando o tráfego atraves do corpo da requisição, onde o que acontece é uma compressão dos dados enviados que só serão descomprimidos do lado do back-end. Além de não deixar as informações trafegadas tão exposta, isso deixa a requisição um pouco mais rápida, ja que ocorre um processo de serialização dos dados enviados. Porém para enviar dados no body da requisição, geralmetne você precisa usar algum tipo especifico de requisição, como o verbo HTTP POST.

Para isso é necessário instalar o pacote bodyParse. Para conseguir remontar os dados enviados precisamos parsear as informações para um formato compreensível para o back-end, esse formato é o JSON.
```
npm i body-parser
```

No express, é possível ter rotas com o mesmo caminho desde que o método (ou verbo) HTTP utilizado seja diferente, na outra rota foi definido o que acontece para o método GET.

Por padrão as requisições são feitas no navegador ou no fetch como GET, para modificar o fetch seria necessario um segundo parâmetro de um objeto passando as configurações de method, headers, body.

Exemplo:
```
fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 4,
    name: 'Macarrão com Frango',
    price: 30
  })
});
```

- method: Método HTTP utilizado. Existem 4 que são mais utilizados (GET, POST, PUT e DELETE);

- headers: Define algumas informações sobre a requisição como o atributo Accept que diz qual o tipo de dado esperado como resposta dessa requisição e o Content-Type que sinaliza que no corpo da requisição está sendo enviado um JSON;

- body: É o corpo da requisição. Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que você quer enviar para uma string JSON. Por isso que o lado do back-end é necessário utilizar o body Parser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto Javascript.

Não é possível fazer requisiçoes POST diretamente pelo navegador como foi feito para requisição para rota GET / recipes.
Por isso deve-se usar aplicações como o Insomnia ou Postman para fazer requisições de qualquer tipo diferente do GET.

Usando o HTTPie para exemplificar a inserção de um item ao array da nossa API
```
http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30 // execute apenas essa linha!
> HTTP/1.1 201 Created
> Connection: keep-alive
> Content-Length: 32
> Content-Type: application/json; charset=utf-8
> Date: Sat, 21 Aug 2021 19:26:46 GMT
> ETag: W/"20-bnfMbzwQ0XaOf5RuS+0mkUwjAeU"
> Keep-Alive: timeout=5
> X-Powered-By: Express
>
> {
>     "message": "Recipe created successfully!"
> }
```

Nos campos id e price foi utilizado := enquanto em name apenas =, Isso acontece pois o operador = envia os dados como string, enquanto com := o dado é enviado como número.
Como no exemplo é uma lista de receitas através de um array, sempre que a aplicação é reiniciada, o array volta ao formato original, com os 3 objetos definidos direto no código. Por tanto, caso as receitas que foram inseridas sumam repentinamente da listagem, provavelmente foi por isso, os dados estão armazenados em memória.
```
// ...

app.post('/recipes', function (req, res) {
	const { id, name, price } = req.body;
	recipes.push({ id, name, price});
	res.status(201).json({ message: 'Recipe created successfully!'});
});

// ...
```

Na primeira linha os atributos id, name e price foram desestruturados do objeto req.body para que, na segunda linha, esses valores sejam utilizados para inserir um novo objeto dentro do array receitas.
Na terceira e ultima linha, a resposta foi retornada como status 201, que serve para sinalizar que ocorreu uma operação de persistência de uma informação e um json com o atributo message. Pronto, agora você tem uma rota que permite cadastrar novas receitas no array.

## Headers

Assim como é possível enviar informações no **body** da requisição, também é possível enviar informações no **header** da mesma. Imagine que você precisa ter uma rota que recebe um token para ser validada, a regra de validação é checar se o token possui 16 caracteres:
```
// ...

app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'})';

  res.status(200).json({message: 'Valid Token!'})'
});

// ...
```

Exemplo usando HTTPie para fazer uma requisição enviando informações no headers:
```
http :3001/validateToken Authorization:abc # vai devolver token inválido
http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido
```

# Atualizando e deletando objetos através da API

Métodos PUT e DELETE ditam e removem objetos. O express tem métodos específicos para definir rotas para esses dois verbos.

## PUT
```
// ...

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});
// ...
```

