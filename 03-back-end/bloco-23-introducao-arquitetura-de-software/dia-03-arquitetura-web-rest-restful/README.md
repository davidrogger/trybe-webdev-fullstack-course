anotações pessoais do dia...

# REST

Rest Representational State Transfer, tradução transferência de estado representacional, é um conjunto de boas práticas utilizada sdurante a construção de uma API. Ao usarmos REST estamos transferindo uma representação do estado de algum recurso.
É um estilo de arquitetura controlado pelo W3C, que define um conunto de restrições que podem ter seu estado representado de alguma forma. Ao consumir esses recursos, estamos transferindo as informações sobre esse estado para o cliente (um exemplo seria uma requisição GET) ou fazendo uma alteração nele (um POST, PUT ou DELETE).

Podemos definir recurso como abstração da informação, como Usuários, produtos, compras e etc...

Consumindo a API [SWAPI](https://swapi.dev/), podemos chamar um endpoint para listar todos os planetas ou apenas um. Nesse caso, se chamarmos, os planetas teremos uma coletação de recursos, se chamarmos apenas um teremos um recurso.

# RESTfull

É um serviço web que segue as regras definidas pelo REST.

# Restrições para ser RESTful

A arquitetura REST define SEIS restrições, chamadas constraints, que devem ser respeitadas para que sua API seja RESTful. Vamos entender detalhamente cada uma delas a seguir:
