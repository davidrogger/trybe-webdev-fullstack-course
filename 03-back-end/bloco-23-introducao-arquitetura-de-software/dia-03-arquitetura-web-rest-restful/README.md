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

## Ações/Verbos

A ação que vamos realizar no recurso deve ser identificada pelo verbo HTTP da requisição. Para o REST, os principais verbos HTTP são: POST, GET, PUT e DELETE. Cada um realiza um ação específica, que depende do lugar que será enviado, neste caso ou para um endpoint de um recurso ou para um endpoint de uma coleção.

# Respostas

Nunca deixe seu cliente sem resposta. Elas são sempre obrigatórias, mesmo que não tenham uma estrutura satisfátoria.
Existem boas práticas em relação aos status code que nosso servidor envia como resposta. TEmos uma variedade de códigos que devem ser utilizados em situações específicas:

- 1xx: Informação;
- 2xx: Sucesso;
- 3xx: Redirecionamento;
- 4xx: Erro do cliente;
- 5xx: Erro no servidor;

[Lista completa e detalhada sobre os códigos de status HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)


# 2 - Arquitetura cliente-servidor

Não importa quem é nosso cliente: app mobile, web, tv, arduino, entre outros. Nossa API deve conseguir retornar dados para ele, isso é o que chamamos de arquitetura cliente-servidor.

Há uma separação de responsabilidades entre o cliente e o servidor. O cliente se preocupa com a exibição dos dados, experiências da pessoa usuária, etc. O servidor  se preocupa com o armazenamento e acesso dos dados, cache, log e etc.

Essa separação permite que as duas partes se desenvolvam de forma independente, ou seja, você pode trocar o cliente ou adicionar um novo sem mudar nada no servidor. Também pode mover o servidor para outra plataforma, escalá-lo ou até mesmo mudar completamente sua arqutetura interna, desde que a API que você fornece para seus clientes não mude(endpoint, resposta etc.).

# 3 - Sem estado (Stateless)

Esse é um dos conceitos mais importantes do REST, pois é ele que vai tonar possível nossa API responder a múltiplos clientes. Sem estado significa que toda requisição deve conter todas as informações necessárias (ser autossuficiente) para nossa API realizar uma ação. Dessa forma, não podemos reutilizar nenhum contexto que está armazenado no servidor (uma variável, por exemplo).

- Em um app no qual você faz uma requisição para se logar, o servidor inicia sua sessão e te retornar um token.
Na próxima requisição, você precisa enviar o token, novamente, pois o servidor "não se lembra" de você.

Ao criarmos componentes que não tenham estado, temos os seguintes beneficíos.

- Transparência: facilita o trabalho do servidor, pois todas as informações necessárias já estão na requisição;
- Escalabilidade: sem precisar manter estado, nosso servidor pode desalocar recursos que foram alocados para realizar uma ação específica e só voltar a útilizá-los quando necessário.

# - 4 Cacheable

Cache é definido como um "depósito de informações". Quando seu navegador armazena imagens e arquivos para não precisar pedi-los para o servidor toda vez que você revisitar uma página.
Esse cache é feito no lado do cliente, no browser. O princípio aqui é que as respostas dadas pela nossa API devem dizer, explicitamente, se podem ou não ser cacheadas e por quanto tempo. Evita-se que clientes forneçam respostas "velhas ou inapropriadas.
O cache deve ser usado equilibradamente, se usá-lo demais faz sua API perder a confiabilidade; mas, se usá-lo de menos pode sobrecarregar seu servidor desnecessariamente.
Uma camada de cache bem gerenciada pode reduzir ou elimitar iterações do lado do cliente, aumentando a escalabilidade e a performance da API.

No HTTP, o cache é definido pelo header cache-control: max-age=120. O cliente "cacheia" a resposta da requisição por 120 segundos. Durante esse tempo, o cliente fornecerá a resposta cacheada, sem precisar consultar o servidor.

# - 5 Sistema em camadas (layered system)

No caso do REST, essa divisão em camadas é sobre: abstrair do cliente as camadas necessárias para responder a uma requisição.
Para o cliente não importa se você tem uma "API A" que se comunica com a "API B" que se comunica com uma fila ou um arquivo em um "local C", ou até mesmo se sua API consulta um banco de dados local ou se está armazenado em outro lugar.
Em síntese, quem consome a API só precisa receber a resposta esperada e não de qual lugar ela vem.


