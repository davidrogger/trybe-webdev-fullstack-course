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

