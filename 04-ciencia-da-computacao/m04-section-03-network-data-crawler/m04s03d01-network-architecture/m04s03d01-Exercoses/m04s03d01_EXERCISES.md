👀 De olho na dica: se tiver dúvidas ao utilizar alguma das ferramentas que mencionamos nos exercícios, exercite suas habilidades de busca no Google ou experimente o comando man!

Exercício 1: O primeiro server que vamos utilizar é o nosso velho amigo HTTP, na camada de aplicação. Você pode tanto criar um, quanto utilizar um dos projetos ou exercícios dos módulos anteriores. A ideia é utilizarmos os conhecimentos do conteúdo e a ferramenta cURL para realizarmos uma chamada HTTP para ele. O projeto deve ter rotas GET e POST para que seja possível enviar requisições para os endpoints e receber respostas, assim como já nos acostumamos a receber via browser ou utilizando programas como o Postman.

Caso tenha dificuldades maiores, você pode utilizar o Postman para converter uma requisição em cURL, é só fazer a requisição nele como você já sabe e depois clicar no botão code (que fica embaixo do save) e escolher cURL.

1. Faça uma chamada GET, utilizando o cURL.
```
curl localhost:3001
```
Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.
```
curl -X POST http://localhost:3001/login -H "Content-Type: application/json"  -d '{ "email": "admin@admin.com", "password": "secret_admin" }'
```
Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.
Tudo na mesma linha, quebra usada apenas para organizar:
```
curl -X POST http://localhost:3001/matches
-H "Content-Type: application/json"
-H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2Njc5MDE1OX0.NP18YIcrt4mc9jpEYmtHxT8jTvxtZs_pdVOHRBhS65k"
-d '{ "homeTeam": 16, "awayTeam": 8, "homeTeamGoals": 2, "awayTeamGoals": 2 }'
```