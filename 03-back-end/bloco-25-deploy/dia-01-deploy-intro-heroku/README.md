anotações do dia...

# Deploy

É um termo comumnete usado para quando vamos disponibilizar o acesso a aplicação.

# Serviçoes em nuvem

Para facilitar o processo de publicação, existem diversos serviçoes em nuvem que abstraem as complexibilidades de se administrar um servidor e suas diversas camadas (rede, disco, recursos. etc).

## Serviços populares:

- Heroku
- Google GCE
- Amazon AWS
- Microsoft Azure
- IBM Cloud

# Heroku

É um PaaS (platform as a Service), ele provém de uma plataforma em nuvem para configuramos e realizarmos nosso deploy de maneira simples e fácil.
Ele gerencia aplicações escritas em Node.js, Ruby, Java, Python, clojure, Scala, Go e PHP.
Para ele é importante saber qual linguagem está sendo utilizada na aplicação e framework. A partir dessas informações ele saberá, como executar o projeto.

# Variáveis de ambiente

Usado para adaptar de forma dinâmica algumas configurações e informações para o funcionamento.
É uma variavel cujo valor é definido fora do programa, normalmente por meio de funcionalidades incorporadas ao sistema operacional ou microserviço.
Elas são definidas em um arquivo .env, que fica na raiz da aplicação de pode ser lido pela biblioteca dotenv.

