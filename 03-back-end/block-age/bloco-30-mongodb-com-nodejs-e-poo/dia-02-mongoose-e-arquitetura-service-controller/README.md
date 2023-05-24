# Arquitetura Multicamadas

Essa arquitetura não tem restrições sobre o número de camadas, por isso pode-se ter visto várias siglas e mesmo as camadas que conhecemos com um nome sendo chamada por outro, como a Model pode ser chamada de DAO(Data Acess Object) ou Repository.

Exemplo destas siglas e nomes:

- MVC: Model View Controller
- MVCS: Model View Controller Service
- Controller-Service-Repository

Independente dos nomes, o que é importante nessas estruturas são principalmente duas coisas:

- A camada num nível acima sempre chama outroa num nível abaixo, nunca acim,a nem na mesma camada.
  - A Service só chama uma ou mais models;
- A camada só deve implementar o que é responsabilidade dela.
  - A model não deve responder a requisição, nem a controller acessar o banco diretamente.

# Testando a camada controllers

Aqui os métodos são testados de forma colateral e não pelo retorno da função. Esse método normalmente recebe dois parâmetros:

- A Request, um objeto podem conter as chaves body, params, query e assim por diante;
  - Quando testamos a Controller, devemos observar a implementação do método e nos perguntar: "O que este método utiliza do objeto request"?
  - Assim conseguimos passar para esse método um Request que ao menos permita que o código chegue onde você quer testar
  - Por exemplo, se usarmos o req.params.id no método, devemos passar um objeto Request assim `{ params: { id: '1' } }`.Se passarmos um objeto vazio como Request, vai gerar aquele clássico Unchaught TypeError: Cannot read properties of undefined (reading 'id').
- A response, por onde faremos nossa asserções, iremos testar se os métodos json e status foram chamados com os valores esperados.
 - Por isso construímos um objeto com esses métodos e por termos escrito em nossa implementação a instrução `res.status(200).json('text')` é necessário que res.status() returne o próprio res que tem método json.

