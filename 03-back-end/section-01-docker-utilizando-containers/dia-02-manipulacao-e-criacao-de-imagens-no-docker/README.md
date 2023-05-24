anotações pessoais...

# Imagens

Imagens Docker são arquivos que funcionam como espécie de foto de programas, bibliotecas, frameworks ou mesmo sistemas opercionais, a partir das queis contruimos contêineres e executamos códigos dentro do docker.

comando para listar imagens que foram baixas localmente:
`docker images`

Para excluir uma image, pode-se usar o comando
`docker rmi -f <ID>`

Esse ID é encontrando na listagem das imagens, é necessário o uso -f para forçar a exclusão da imagem, caso ela esteja sendo usado em algum container, ao excluir ela, você não exclui o container dependente, ele apenas fica sem uma imagem de referencia, sendo necessário o download da imagem novamente, para o funcionamento do container.

## Sistema de camadas de uma image

Quando fazemos o download de uma imagem, ela não cria nenhum contêiner, mas durante o download existem vários downloads e extrações acontecendo, cada download representa uma camada:

O Docker divide suas imagens em camadas para que elas possam ser reaproveitadas por outras imagens e não precisem ser instaladas em duplicidade. Toda iamgem no Docker pode ter uma ou várias camadas e esse sistema é conhecido como Layered File System (Sistema de Arquivos em Camadas).

Portanto, se dermos o comando docker pull alpine:3.13 e docker pull node:alpine3.13 durante o processo de download eles possuem camadas com as mesmas hashs, logo eles não baixam novamente reaproveitando hashs de imagens que ja estão localmente, economizando tempo e espaço.

Um ponto importante sobre as camadas é que aquelas que pertencem a imagem são somente para leitura.

Porém vale lembrar, que ao acessarmos uma imagem de forma interativa, e realizarmos alterações na imagem local, como atualizações e criarmos novos arquivos, estes serão persistentes mesmo se reiniciarmos o contêiner, pois toda vez que criarmos um contêiner, uma camada extra (chamada frequentemente de container layer - camada do contêiner) é adicionada àquela imagem para que seja possível ler e escrever nela.
Desse modo, ao criar um container sobre uma imagem, é possível interagir (por meio de leitura e escrita) como essa camada extra do container e o restante das camadas permanece inalterada, apenas com permissões de leitura.

## Mapeamento de Portas

Para criarmos um container com uma porta padronizada do docker, usando o servidor apache, podemos usar o comando: `docker container run -d -P httpd:2.4`

O prefixo -P faz com que o docker gere as portas de forma automatica, mas caso seja necessário gerar um container com portar predefinidas é usado o prefixo -p seguindo das portas que você precisa, inicialmente indicamos a porta local, e na sequencia a porta do container, exemplo, porta local 80 e porta do container 80: docker `container run -d -p 80:80 httpd:2.4`

## Dockerfile

É um arquivo de configuração usado pelo Docker com a descrição passo a passo do que você deseja que aconteça.

## FROM

Ao criarmos uma nova imagem, sempre devemos baseá-la em uma outra, e para isso utilizamos o FROM. Por exemplo, para criar uma nova imagem que rodará sob um ubuntu:
```
FROM ubuntu:latest
```

## WORKDIR

Com o comando WORKDIR podemos definir um "diretório de trabalho" que será utilizado como base para a execução dos comandos. Sua estrutura é a seguinte:
```
WORKDIR /diretorio/que/sera/utilizado
```

## COPY

É usado para copiar os arquivos para dentro da nossa imagem.
```
COPY ["./app", "/usr/src/app"]
```
Com o comando COPY conseguimos montar nossa estrutura do código fonte dentro da imagem. Porém, para executá-la precisaríamos apontar para o diretório que definimos anteriormente como nosso diretório de trabalho (WORKDIR).
Vale ressaltar que no COPY tanto a sintaxe na forma exec (COPY ["arquivo1", "arquivo2", "./destino"]) como na shell (COPY arquivo1 arquivo2 ./destino) são aceitas*.

Nesse exemplo será copiado todos os arquivos que começam com package para o diretório atual, a pasta /app, usando a forma exec:
```
# FROM node:14-alpine AS build
# WORKDIR /app
COPY package*.json ./
```

## RUN

É usado para executar uma lista de comandos durante a criação da imagem.
```
RUN ["<COMANDO>", "<SUBCOMANDO>", "<PARAMETRO-1>", ... , "<PARAMETRO-N>"]
```

Exemplo Dockerfile:
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
RUN npm install
```
É possível fazer esse comando de instalação pois a imagem Node já possui esses aplicativos internamente.

## Passos intermediários

Como é usado o npm install é interessante criar um arquivo chamado dockerignore para adicionarmos a ele a node_modules, de modo que ela não seja copiada.
```
touch .dockerignore

node_modules
```

Definindo a cópia de todos os arquivos com o comando:
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
COPY . .
```

Também devemos adicionar um comando para executar o processo de build da aplicação no Dockerfile:
Esses comandos podem variar dependendo da aplicação que você for rodar.

Em uma aplicação React há um script para gerar uma versão otimizada da página criada:
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
RUN npm run build
```

## NGINX

Multi-stage build, é a divisão do script do Dockerfile em mais de uma parte.
[Documentação multi-stage build](https://docs-docker-com.translate.goog/develop/develop-images/multistage-build/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=nui)

Nessa segunda parte será definido no Dockerfile os comandos do ambiente de produção, no qual será utilizado o servidor HTTP NGINX, que é um software de código aberto para servidores web, originalmente utilizado para navegação HTTP, mas que atualmente também tem outras funcionalidades.

Será definido na imagem de origem do Nginx, como o alias "prod", em seguida, será copiado as informações da imagem apelidada de "build" e sua respectiva pasta para o diretório do servidor, como a seguir:
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
```

## Expose

É usado para especificar as portas de acesso da nossa aplicação dentro do contêiner.
```
EXPOSE <PORTA-DO-APP-NO-CONTAINER>
```

Exemplo:
```
EXPOSE 3000
```

Por padrão o Nginx usa a porta 80 para executar as aplicações, pode-se expor ela em nosso Dockerfile:
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
```

Quando formos rodar um container utilizando uma imagem que expõe uma porta, precisamos atribuir uma porta do nosso sistema hospedeiro que direcionará para a porta do sistema convidado.

Isso é feito com o parâmetro -p:
```
docker container run \
   -p <PORTA-HOST>:<PORTA-GUEST> \
   <IMAGEM>:<TAG>
```

Exemplo, uma aplicação que serve na porta 80 que está exposta no Dockerfile e queremos acessá-la a partir da porta 3000 do host:
```
docker container run \
   -p 3000:80 \
   --rm \
   -dit \
   yeasy/simple-web:latest
```

Após rodar o container, basta acessar o localhost:3000, para visualizar o "Real Visit Results"

## CMD

O comando CMD sempre é executado quando o contêiner é iniciado, pode acontecer de mais de um CMD ser definido em um mesmo Dockerfile, mas somente um terá efeito.
O CMD possui 2 formas: a que vimos até aqui para a execução de comandos shell e as formas para executáveis.

Exemplo:
O primeiro argumente é o executável e os demais são seus parâmetros:
```
CMD ["/bin/echo", "Hello World"]
```

Normalmente o CMD é uzado para executar o comando que irá rodar com o contêiner.
Poderia ser usado como exemplo o start de um app:
```
CMD npm start
```

Caso o contêiner seja executado passando um comando no RUN, o comando passado sobrescreverá o comando definido no CMD.

Pode-se usar o CMD no Dockerfile da seguinte forma:
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Entrypoint

Ele é mais recomendado para declararmos comandos de inicialização do app, pois diferente do CMD, o comando não será sobrescrito pelo RUN, ao executarmos o contêiner.
Exemplo:
```
ENTRYPOINT ["/bin/echo", "Hello World"]
```

Ao definir um entrypoint, é alterado o comportamento do CMD que, ao ser utilizado, irá rodar como base para o comando definido pelo entrypoint apenas como "parâmetros adicionais" à ele. Por exemplo:
Ao iniciar o contêiner será executado um `echo Hello World`.
```
ENTRYPOINT [ "/bin/echo" ]
CMD [ "Hello World" ]
```

Exemplo de como o container sobreescreve o CMD:

Seria escrito Hello World conforme abaixo
```
ENTRYPOINT ["/bin/echo", "Hello"]
CMD ["World"]
```

Com esse mesmo Dockerfile, usando o seguinte container:
```
docker container run nossa-hello-world-image John
```

Teriamos um echo de `Hello John`.
Pois o CMD seria substituido pelo comando passado no container run.

A seguir será substituido a linha de CMD pelo entrypoint:
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

## Gerando uma imagem a partir do nosso Dockerfile

Para consolidar as instruções criadas no dockerfile e gerar a imagem, usamos o comando
```
docker image build -t <name:tag> <origem_docker_file>
```

Temos o comando docker acompanhado da instância image e do subcomando build, isso retorna um log do processo build:
```
docker image build -t react-dockerized:v1 .

Sending build context to Docker daemon  870.4kB
Step 1/10 : FROM node:14-alpine AS build
 ---> fe39f43f1d22
Step 2/10 : WORKDIR /app
 ---> Running in e42203ccae10
Removing intermediate container e42203ccae10
 ---> 890531fc8024
Step 3/10 : COPY package*.json ./
 ---> 7c756629dd86
Step 4/10 : RUN npm install
 ---> Running in 379b2754f2f6

# ... demais passos

Removing intermediate container 1be22b2c3906
 ---> 9392a56b85dc
Successfully built 9392a56b85dc
Successfully tagged react-dockerized:v1
```

É utilizado o parâmetro -t (de tag) com o valor react-dockerizad:v1 (esta sendo puxado uma tag v1 para a imagem) e o ponto ".", indica que o dockerfile se encontra na mesma pasta em que o comando está sendo executado.

Após a execução da build, pode-se listar a imagem e verificar a presença dela:
```
docker images
```

Para ver a aplicação funcionando, basta roda o projeto no terminal interativo, definindo qual porta do nosso localhost será atribuida para qual porta do contêiner.
```
docker run -dit -p 8000:80 --name reactdockerized react-dockerized:v1
```

## Dockerfile comandos adicionais

## LABEL
Labels são mecanismos para atribuir metadatas aos seus objetos Docker, como imagens e contêineres.
Com o parâmetro LABEL é possível fazer essas definições em nosso Dockerfile.

A documentação oficial recomenda o uso de labels para organizar nossas imagens, registrar informações de licenças, anotar relacionamentos entre contêiner e outros componentes, ou qualquer outra informações que façam sentido ao objetivo do contêiner ou da sua aplicação.

As informações são registradas seguindo o parâmetro de "chave e valor", caso uma chave steja repetida, a última sobrescreverá as anteriores:
```
LABEL <KEY>=<VALUE>
```
É comum registrarmos o maintener da imagem para um possível contato posterior para tirar dúvidas ou sugerir contribuições:
```
LABEL maintener="John Doe <john.doe@trybe.com.br>"
```

Esse valor pode ser resgatado posteriormente através do comando `docker inspect <CONTAINER ID || NAME>`, onde o valor estará no atributo Labels:
```
"Labels": {
   "maintener": "John Doe <john.doe@trybe.com.br>"
}
```

## ENV

Em ambientes de desenvolvimento de apps é muito importante o uso de enviroment variables e isso também pode ser adotado em nossos contêiners.

Variáveis de ambiente são valores que são definidos dentro do escopo do sistema operacional, ou seja, são valores que estão disponíveis para todas as aplicações que estão instaladas dentro daquele SO.

No Dockerfile podemos definir nossas variáveis durante a criação da imagem utilizando o comando ENV:
```
ENV <ENV NAME> <ENV VALUE>
```

Podemos utilizá-la por exmeplo, para setar o ambiente onde vamos rodar o app.
```
ENV NODE_ENV production
```

Ao rodar nossos contêineres também podemos passar variáveis. Basta utilizar a tag --env ou -e:
```
docker container run \
   --env myCat=fluffy \
   --env myName=johnDoe \
   <IMAGE NAME>
```

## USER

Com o comando USER podemos definir qual o usuário que irá iniciar nosso app no contêiner.
Caso não seja definido nenhum usuário, o Docker irá utilizar o usuário root como padrão, o que não é recomendado por motivos de segurança.

Abaixo temos um exemplo da criação de um usuário com apenas as permissões necessárias em uma imagem ubuntu:
```
FROM ubuntu:8
RUN mkdir /app
RUN groupadd -r node-user && useradd -r -s /bin/false -g node-user node-user
WORKDIR /app
COPY . /app
RUN chown -R node-user:node-user /app
USER node-user
CMD node index.js
```
Normalmente as imagens já possuem um usuário criado para a execução de nossos apps.
Por exemplo, as imagens node já possuem um usuário genérico chamado "node" com os privilégios necessários e para usá-lo basta adicionarmos o usuário ao diretório de nosso projeto e utilizarmos a tag user:
```
FROM node:10-alpine
COPY . /app
RUN chown -R node:node /app
USER node
CMD [“node”, “index.js”]
```

## Layers e Cache

Ao criarmos as imagens cada comando é considerado uma camada. Podemos ver detalhadamento ao gerar uma build:

![layer-image](/03-back-end/bloco-19-docker-utilizando-containers/images/dockerfile-layers.webp)

É importante entender essa arquitetura para explorarmos uma de seus principais funções: o uso de cache.

Esse termo remete ao uso de uma memória cache, que na prática é um armazenamento rápido e temporário que pode ser utilizado junto a algum recurso.
Nesse o contexto, o nosso cache mantém armazenadas camadas de uma image após seu processo de build.

Caso o Docker identifique que não houve mudança naquela Step, ele irá utilizar o cache do último build.

Exemplo:
```
# Step 1
FROM node:10-alpine
# Step 2
WORKDIR /usr/src/app
# Step 3
COPY [".", "./"]
# Step 4
RUN ["npm", "install"]
# Step 5
ENTRYPOINT [ "npm", "start" ]
```

Uma vez que é realizado o build dessa imagem, ela não repetirá nenhum desses passos, a menos que haja alguma alteração.

Realizando a alteração em qualquer parte do código fonte, todos os passos apartir do step 3 que utilizam diretamente o arquivo, serão reexecutados.

Agora se a alteração foi em alguma parte do código e não teve nenhuma relação com as dependências. Será executado o comando `npm install` novamente, mesmo que não tenhamos atualizado, adicionando ou removido nenhum dependência.

Ilustração de como é feito esse algoritmo:
![algoritmo de cache do dockerfile](/03-back-end/bloco-19-docker-utilizando-containers/images/dockerfile-cache-algorithm.webp)

Para tirarmos melhor proveito dessa estrutura é recomendado dividirmos em partes cada etapa do processo e sempre deixando as etaps mais propensas a alterações para baixo do nosso pipeline(nossa segmentação de instruções).

Vamos a uma nova versão do nosso Dockerfile de exmeplo:
```
# Step 1
FROM node:10-alpine
# Step 2
WORKDIR /usr/src/app
# Step 3
COPY ["./package.json", "./package-lock.json", "./"]
# Step 4
RUN ["npm", "install"]
# Step 5
COPY ["./src", "./"]
# Step 6
ENTRYPOINT [ "npm", "start" ]
```

Nessa nova versão temos mais steps, porém, caso haja alteração somente me nosso código fonte, apenas os passos a partir do quinto passo, serão repetidos, evitando a reinstalação das dependências. Esse é um exemplo simples mas qjá podemos perceber grande ganho em nosso Dockerfle. Em arquivos mais complexos esse ganho é ainda maior.