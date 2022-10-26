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


```
curl -X POST \
http://localhost:3001/matches \
-H "Content-Type: application/json" \
-H "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY2Njc5MDE1OX0.NP18YIcrt4mc9jpEYmtHxT8jTvxtZs_pdVOHRBhS65k" \
-d '{ "homeTeam": 16, "awayTeam": 8, "homeTeamGoals": 2, "awayTeamGoals": 2 }'
```

Exercício 2: Ainda utilizando o cURL, vamos explorar mais alguns conceitos do HTTP. Relembre que falamos que o HTTP organiza e dá significado aos dados encapsulados nessa camada. Por exemplo: ao vermos um 200 tanto nós quanto um client HTTP sabemos que aquela request foi realizada com sucesso. Vamos explorar isso com o cURL.

1. Faça uma chamada GET, utilizando o cURL, para “google.com”.
```
curl google.com
```
Perceba que foi retornado um 301. Isso quer dizer que existem diversos redirecionamentos que nos encaminham para o lugar certo. No caso, o caminho certo para a página do google é www.google.com. Ao acessarmos pelo navegador, não percebemos isso porque ele faz o redirecionamento para a página certa ao encontrar o 301, porém se você inspecionar a network vai identificar esse redirecionamento.

2. Faça uma nova chamada a “google.com”, porém agora utilizando o parâmetro -L ou --location, que serve para “seguir redirecionamentos”.
```
curl -L google.com
```

Exercício 3: Agora utilizando o wget, pegue o conteúdo da página do site da Trybe, depois abra o arquivo HTML baixado em seu navegador. Faça o mesmo processo com outras páginas web
```
wget betrybe.com
```

Exercício 4: Agora vamos para a camada de transporte. Crie um servidor TCP usando o módulo socketserver que já vem embutido com o Python. Nosso servidor TCP deverá:

Responder com um “Olá, client”, logo quando estabelecer uma conexão.

Imprimir no console todo dado recebido.

Responder com os dados recebidos (como um eco).

Utilizar a porta 8085.

Perceba que o servidor sozinho não faz nada. Ele precisa que alguém se conecte a ele. Então para testá-lo você pode utilizar o comando telnet localhost 8085, onde telnet é a aplicação que vamos utilizar, localhost é o local onde o servidor está (no caso, o seu próprio PC) e 8085 é a porta em que o servidor está escutando conexões.

👀 De olho nas dicas:

A documentação do módulo traz exemplos de como instanciar seu servidor TCP;
Na mesma documentação temos exemplos de classes para responder as requisições;
Os dados na requisição vem em bytes, não strings! bytes podem ser decodificados em string com a codificação correta;
Do mesmo jeito, para responder você pode precisar codificar strings em bytes;
telnet sempre envia ASCII, já o netcat envia no encoding do sistema (em Linux, geralmente utf-8, mas confirme com o comando locale).
