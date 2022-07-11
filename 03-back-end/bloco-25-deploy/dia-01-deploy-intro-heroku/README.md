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

## Buildpack

Em alguns casos, precisamos rodar algum script ou realizar alguma configuração para publicar nosso app. Por exemplo, para publicar uma aplicação React precisamos "servi-la" com um server-side app (back-end), como um server com express.

Porém, para facilitar, existem os buidpacks, que automatizam esses e outros processos. Existem buidpacks oficiais do heroku, mas também existem aqueles criados e publicados pela comunidade. Seja como for, eles podem agregar muito em nosso processo de deploy.
Com um buildpack, conseguimos fazer facilmente o deploy da nossa aplicação criada em react.

[Heroku buildpacks](https://elements.heroku.com/buildpacks)

# Fazendo deploy

Para fazer o deploy basta utilizar o comando git push do seu repositório local para a branch master do remote do heroku;

`git push heroku-origin master`

Heroku sempre publicará seu ultimo commit feito para master/main, demais branches são ignoradas por ele.

Para publicar uma branch que não está na branch master/main local. É necessário criar uma branch a partir da master/main.

Realizar o commit como é realizado normalmente e para publicar será usado o seguinte comando;
```
git push heroku(nome do remote) branch(nome da branch):main

git push heroku test-branch:main
```

# Lidando com vários deploys

É possível iniciar um novo deploy mesmo que um outro, do mesmo app, já esteja executando e ainda não tenha finalizado. Por exemplo, duas pessoas estão contribuindo para o mesmo projeto e executam push de commits diferentes quase ao mesmo tempo. Se isso ocorrer, ambos os processos serão iniciados paralelamente e conforme os processos forem finalizados, as versãoes serão publicadas.

As versões serão publicadas na ormde em que os processos forem concluídos, e não na ormde em que os comandos push forem realizados.

# Acompanhando sua aplicação

Após o deploy, seu serviço fica disponível em uma URL do heroku, e o app pode ser gerenciado pelo CLI. Para listar os serviços que você tem em execução:
```
heroku apps
```

Para ver detalhes de um app específico:
```
heroku apps:info nome-do-seu-app
```

# Variáveis de ambiente

Caso o projeto possua variáveis de ambiente, é possivel configura-las pelo config:set;

heroku config:set TESTE="texto qualquer" -- app nome-do-seu-app

Para listar as variáveis de ambiente, basta utilizar o comando config. O comando config mostra as variáveis de ambiente criadas por o usuário mas não as variáveis padrão do Heroku (como por exemplo a variável PORT).

heroku config -a nome-do-seu-app

# Logs

Para monitorar os logs dos apps;
```
heroku logs -a nome-do-seu-app
```
Por padrão, o comando retorna as últimas 100 linhas de logs. Caso você queria mudar isso, utilize o parâmetro --num our -n:
```
heroku logs -n 200 -a nome-do-seu app
```

O parâmetro --tail ou -t abre uma seção para mostrar em tempo real os últimos logs. Para retornar ao prompt, basta executar ctrl+c
```
heroku logs -t -a nome-do-seu-app
```

