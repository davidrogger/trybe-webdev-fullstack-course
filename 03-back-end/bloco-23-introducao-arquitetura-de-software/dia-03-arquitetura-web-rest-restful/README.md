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

# 1 - Interface uniforme (Uniform Interface)

A interface de comunicação entre seu servidor e seu cliente deve ser definida e seguida à risca por meio de um padrão, para que assim ela se mantenha consistente. Quando respeitando essa constraint, ela simplifica ae desacopla a nossa arquitetura.
Essa interface inclui: endpoint, tipo de retorno e o uso dos verbos HTTP.

## Recursos e coleções

O recurso a ser acessado/alterado deve ser identificado pelo endpoint da requisição.

Exemplo: `https://swapi.dev/api/planets/:id`

Nessa URl o recuso que queremos acessar (planet) é facilmente identificado. Não importa se for plural ou singular a forma que é representada o importante é manter o padrão da restrição.

## Tipo de retorno

No header há o Content-type para dizer qual o tipo de conteudo estamos retornando.
Exemplo:
- Se estamos retornando um JSON, enviamos o header como Content-type: application/json.
- Se nosso retorno fosse HTML, seria Content-type text-html.

Formatos comuns de Content-type são: JSON, XML e JavaScript.
Em síntese, devemos manter nosso retornos consistentes.

- Se o cliente pede ou envia informações no formato JSON, devemos processar e retornar o mesmo formato JSON.
- Se um erro em um endpoint retorn os campos code, error e message, todos erros devem retornar, pelo menos, esses mesmos campos.
- Se, por exemplo, quando realizamos uma requisição GET /products, recebemos um array de produtos, ao realizar a requisição GET /sales, não devemos receber um JSON no formato { sales: [{...}] }, já que esse comportamento é inconsistente com o do endpoint GET /products.

Dessa forma, ao consumir um endpoint da sua API, é possível deduzir o comportamento dos demais endpoints, dispensando a ação de "tentativa e erro".


