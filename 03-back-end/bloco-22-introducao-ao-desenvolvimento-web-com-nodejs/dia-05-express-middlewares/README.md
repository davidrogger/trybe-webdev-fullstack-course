anotações pessoais do dia...

# Middlewares

No express qualquer função passada para uma rota é um middleware, seja de forma direita ou indireta.

Middleware são funções que realizam o tratamento de uma request e que pode encerrar essa request ou chamar o próximo middleware.
Essas funções recebem três parâmetros, req, res e next. Eles podem retornar qualquer coisa, incluindo promises, o express ignora o retorno dos middlewares, visto que o importante é se aquele middleware chamou ou não um método que encerra a request, ou a função next.

