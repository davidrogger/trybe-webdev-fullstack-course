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
  - A model não deve responsar a requisição, nem a controller acessar o banco direitamente.

