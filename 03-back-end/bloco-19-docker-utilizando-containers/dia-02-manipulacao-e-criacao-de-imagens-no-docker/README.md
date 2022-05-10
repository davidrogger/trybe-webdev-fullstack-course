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

