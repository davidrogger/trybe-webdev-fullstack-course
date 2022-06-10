anotações pessoais do dia...

# Middlewares

No express qualquer função passada para uma rota é um middleware, seja de forma direita ou indireta.

Middleware são funções que realizam o tratamento de uma request e que pode encerrar essa request ou chamar o próximo middleware.
Essas funções recebem três parâmetros, req, res e next. Eles podem retornar qualquer coisa, incluindo promises, o express ignora o retorno dos middlewares, visto que o importante é se aquele middleware chamou ou não um método que encerra a request, ou a função next.

# Middlewares globais com app.use

Usado quando precisamos reaproveitar um middleware para todas as rotas da aplicação.
Exemplo, quando vamos criar uma forma de autenticar se um determinado usuário pode ter acesso à nossa API de receitas. Para isso, será necessário enviar as informações de nome de usuário e senha pelo Header da requisição.

## Passando valores entre middlewares com objeto req

Middlewares também podem modificar o objeto req, e essas modificações serão recebidas pelos próximos middlewares caso next seja chamado. Geralmetne utilizamos isso para propagar informações de um middleware para o outro.

# Pacotes que são middlewares

Existem pacotes que nos fornecem ferrametnas necessárias para o desenvolvimento de nossa aplicações. Um exemplo disso é o módulo body-parser. Ele é um middleware que lê o corpo da request, cria nela uma propriedade body e coloca o contúdo do corpo lá. Para utiliza-lo e ter acesso às informações do corpo da request, só precisamos instalá-lo.
A função json() utilizada diz ao body parse que queremos um middleware que processe corpos de requisições escritos em JSON. Se executarmos API e fizermos uma requisição do tipo POST, conseguiremos ter acesso aos valores evnaidos no body da requisição. Porém se tirarmos o uso deste middleware, as requisições do tipo POST não conseguem processar os dados enviados no body da requisição.

# Visualizando o conteúdo das requisições no Console

É comum ter dificuldade para visualizar o que está sendo feito por cada endpoint em cada requisição.
Para resolver esse problema, é possível adicionar um middleware que imprimirá no console as informações recebidas no parâmetro req.
```
app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});
```

Sempre que uma requisição http for executada, o middleware criado imprimirá no console as informações contidas no parâmetro req. Lembrando que isso só afetará as rotas que forem declaradas abaixo da definição do app.use.

# Router middleware

É um middleware que agrupa várias rotas em um mesmo lugar, como se fosse uma versão mini do app do Express. Ele é depois "plugado" no "app principal".

Analise o arquivo index.js na src

O uso de mais de um parâmetro na chamada à função app.use. Isso diz ao Express que queremos que aquele middleware (no caso o router) seja executado para qualquer rota que comece com aquele caminho, evitando a repetição de nomes, por isso é definido router.get('/:id) o caminho acessado seria o "recipes/:id".

Routers suportam que qualquer tipo de middleware seja registrado. Se tivermos vários endpoints com autenticação e vários endpoints abertos, podemos criar um router, e registrar nele nosso middleware de autenticação, bem como todas as rotas que precisam ser autenticadas, registrando as rotas abertas diretamente no app.
```
/* recipesRouter.js */
// const express = require('express');
// const router = express.Router();

const authMiddleware = require('./auth-middleware');
router.use(authMiddleware);

// ...

// module.exports = router;
```
```
/* index.js */
// const express = require('express');
// const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

// const app = express();
// app.use(bodyParser.json());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
	res.send('open!')
});

// Esta rota passa pelo middleware de autenticação!
app.get('/fechado', authMiddleware, function (req, res) {
	res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

// app.all('*', function (req, res) {
// 	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });


// app.listen(3001, () => { console.log('Ouvindo na porta 3001'); });
```