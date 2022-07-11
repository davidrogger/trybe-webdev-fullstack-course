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

# Dynos

O heroku utiliza o conceito de container, em que as responsabilidades de gerenciar máquinas virtuais ou físicas são abstraídas. Isso significa que em vez de se preocupar com máquina onde você irá rodar seu código, você pode focar em desenvolver aplicações mais poderosas.

Ao fazer o deploy no Heroku, voocê estará colocando sua aplicação dentro de um container. O Container é um ambiente isolado e leve que provê os recursos necessários de CPU, memória RAM, um sistema operacional e um sistema temporário de arquivos para rodar seu código. No heroku, os containers são chamados de dynos.

Os containers normalmente rodam em ambientes compartilhados, porém isolados um dos outros.

No Heroku é possiǘel escalar a aplicação, verticalmente alterando o tipo do dyno para um que possua mais recursos, para fazer um escaling horizontal, pode-se aumentar o número de dynos.

# Instalando heroku
```
curl https://cli-assets.heroku.com/install.sh | sh
```
verificando a versão `heroku -v`

Caso não veja a versão do heroku ou prefira instalar via snap faça o seguinte: sudo `snap install hello-world`

Caso o comando retorne sucesso, siga para o próximo passo. Caso retorne que o comando snap não é conhecido, instale-o utilizando o apt: `apt-get update && apt-get install snapd`

## Instalando o CLI via Snapd
```
sudo snap install heroku --classic
```

Para que os comandos funcionem é necessário estar logado em sua conta heroku use o comando `heroku login` para logar.

Aprendemos no módulo sobre git: ao versionar os projetos, nós os associamos a repositórios remotos. Por padrão o nome deste repositório remoto do git é origin. Para visualizá-los, basta executar o comando git remote -v.

Para realizar o deploy pelo heroku, precisamos adicionar mais um remote, dessa vez apontadno para o servidor Heroku.

Primeiramente criando uma aplicação react, depois vinculando ela há um repositório git;
```
npx create-react-app my-first-deploy-heroku
git remote -v
git add remote "ssh ou https"
heroku create
git remote -v (vericando o vinculo remoto, a aplicação terá um nome aleatório criado pelo heroku)
git remote rm -heroku (remove o heroku feito anteriormente)
heroku create my-first-deploy-2930 (cria novamente, mas definindo o nome, como o nome deve ser único, é utilizado um númoro aletadorio no final)
```

## Nomeação do remote

Por padrão, o CLI vai nomear todos os remotes criados como heroku. Porém podemos criar o nosso remote passando um nome diferente. Isso pode ser feito utilizando a flag --remote;
```
heroku create my-first-deploy-29302 --remote heroku-homolog
```

Também podemos renomeá-los utilizando o comando git remote rename. Vale lembrar que o comando abaixo não vai manter o remote heroku, ele vai renomear o remote heroku para heroku-origin.
```
git remote rename heroku heroku-origin
```

## Vincular um app existente a um novo remote

heroku git: remote -a nome-do-app --remote nome-do-remote

O atributo -a é um alias para --app que é usado para indicar qual app será vinculado em casos de haver mais de uma aplicação no repositório.

exemplo:
`heroku git:remote -a meu-deploy-de-testes-29302 --remote heroku-test`

[Link para ver mais comandos do Heroku Cli](https://devcenter.heroku.com/articles/heroku-cli-commands)

