anotações pessoals do bloco...

# Seção 01

anotações pessoais...

# Docker

Foi desenvolvido com o objetivo de resolver os problemas de compatibilidade, com ele conseguimos definir exatamente como nossa aplicação deve rodar, desde configurações e bibliotecas a sistema operacional.
Ele usa um conceito de containerização.
O contêiner é um processo Docker que, internamente, possui tudo aquilo que é necessário para seu funcionamento: Sistema Operacional (Binários e Bibliotecas) e recursos necessários para sua aplicação;
A imagem é uma espécie de "fotografia" de um contêiner. Resgatamos uma imagem quando queremos iniciar um novo contêiner a partir de uma estrutura já conhecida.

### Instalando Docker

Instalando no Ubuntu via terminal:

antes de mais nada realize as atualizações:

`sudo apt-get update`

`sudo apt-get upgrade`

#### Habilite HTTPS para o apt

Os pacotes a seguir são recomendados pela documentação oficial para habilitar a utilização dos repositórios via HTTPS pelo apt-get. Precisaremos disso para prosseguir a instalação:
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

#### Adicione uma chave de acesso ao repositório remoto

Adicione a chave GPG³ oficial do Docker:
Para adicionar uma camada de segurança nas transferências de dados entre computadores remotos no Linux, é possível que eles se comuniquem utilizando um sistema de chaves pública e privada, como o GPG (GnuPG).

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`

Se tudo correr bem, você não receberá nenhum retorno visual.

#### Adicione o repositório

Para adicionar o repositório oficial, execute o seguinte comando⁴:
```
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
Perceba que adicionamos o repositório stable (em $(lsb_release -cs) stable). Isso significa que teremos somente o repositório com as versões estáveis do Docker.
Em distribuições baseadas no Ubuntu (como o Linux Mint), talvez você precise alterar o comando $(lsb_release -cs) para uma versão do Ubuntu que seja compatível com aquele sistema. Exemplo: caso você utilize o Linux Mint Tessa, você deve alterar o valor para bionic.
⚠️Atenção: O Docker não garante o funcionamento em sistemas fora do [requisito de sistema operacional](https://docs.docker.com/engine/install/ubuntu/#os-requirements). 👀

### Instale o Docker Engine

`sudo apt-get update`

Vamos instalar a última versão estável do Docker Engine - Commmunity, uma versão mantida pela própria comunidade (o Docker é Open-source!). Faremos isso com a interface de linha de comando (CLI) e o containerd⁵.
O containerd é um serviço que funciona em segundo plano (daemon), utilizado no funcionamento dos contêiners.
Para isso, execute no terminal:

`sudo apt-get install docker-ce docker-ce-cli containerd.io`

### Adicione um usuário ao grupo de usuários docker

⚠️ IMPORTANTE ⚠️ Esse procedimento faz com que seu usuário tenha os mesmos privilégios do usuário root (o superusuário no linux) na execução dos comandos Docker⁶, então use-o com moderação e apenas em ambiente de desenvolvimento.
Por padrão, o Docker faz a vinculação (bind) entre o sistema operacional hospedeiro e o cliente via socket Unix (um tipo de conexão que possui mais performance) e não via porta TCP (que possui menos performance).
Sockets Unix são de uso exclusivo do usuário root. Sendo assim, qualquer comando do Docker que executarmos exigirá ser iniciado como root, ou com sudo por qualquer usuário.
Para mais informações consulte a documentação oficial [no site do Docker Docs](https://docs.docker.com/engine/security/#docker-daemon-attack-surface).

Para evitar o uso de sudo em todos os comandos Docker que formos executar, vamos dar as devidas permissões ao nosso usuário. Para isso, primeiramente crie um grupo chamado docker:

`sudo groupadd docker`

Caso ocorra uma mensagem: groupadd: grupo 'docker' já existe, é só prosseguir.
Então, use o comando abaixo para adicionar seu usuário a este novo grupo. Obs.: execute o comando exatamente como a indicação abaixo:

`sudo usermod -aG docker $USER`

Para ativar as alterações realizadas aos grupos, você pode realizar logout e login de sua sessão, ou executar no terminal:

`newgrp docker`

### Inicie o Daemon do Docker

Para consultar o status do daemon do Docker, execute:

`sudo systemctl status docker`

Esse comando deve retornar algo como um pequeno relatório sobre o serviço, onde consta seu status de funcionamento:
```
● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: inactive (dead) since Thu 2021-09-23 11:55:11 -03; 2s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
    Process: 2034 ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock (code=exited, status=0>
   Main PID: 2034 (code=exited, status=0/SUCCESS
```

Caso o parâmetro Active esteja como stop/waiting ou, no nosso caso, como inactive, rode o comando start para iniciá-lo:

`sudo systemctl start docker`

Ao consultar o status novamente, o processo deverá estar como start/ running/ active.
Habilite o daemon do Docker para que seja iniciado durante o boot:

`sudo systemctl enable docker`

### Valide a instalação

Para validar se tudo ocorreu como deveria na instalação, vamos executar um hello world⁷ do Docker:

`docker run hello-world`

O terminal deve retornar uma mensagem com dicas, conforme a seguir:

![Hellow World](/03-back-end/bloco-19-docker-utilizando-containers/images/docker-hello-world.png)

Quando damos o comando docker run hello-world, estamos pedindo para que ele busque em seu repositório oficial uma imagem chamada hello-world. Trata-se de um exemplo simples de um contêiner, que ao final nos retorna uma mensagem de texto. Falaremos mais sobre isso adiante!
Voilà 👌 Temos o Docker prontinho para utilizarmos! 🐋

# Desinstalando o Docker Engine

`sudo apt-get purge docker-ce docker-ce-cli containerd.io`

Para remover contêiners, volumes (que veremos nas próximas aulas) e configurações personalizadas que não são removidas automaticamente pelo apt-get, utilize os seguintes comandos:
```
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

#### Container

Lembram muito, mas não são máquinas virtuais, já que podemos roda uma aplicação Linux em qualquer ambiente através deles.
Um contêiner não é uma máquina virtual pois, embora compartilhem de mesmas caracterísitcas, o contêiner é uma instância isolada (tem apenas uma finalidade) e compartilha dos mesmos recursos do sistema operacional hospedeiro ao que damos o nome de virtualização a nível de sistema operacional.
Um contêiner não deve ser utilizado para abrigar várias aplicações. Justamente por isso que ele ocupa muito menos espaço que uma VM. Sua tendência é de manter somente o essencial no seu contéudo.

#### Imagens

Imagens podem se referir a praticamente qualquer tipo de contêiner. Um exemplo disso é pensar o próprio sistema operacional Ubuntu, que possui [uma imagem oficial no Docker Hub](https://hub.docker.com/_/ubuntu).

O [Docker Hub](https://hub.docker.com/) é o principal repositório de imagens Docker atualmente. Nele, possuimos o que é chamado de [Registro](https://docs.docker.com/registry/introduction/) onde requisitamos essas imagens.

O registry é um sistema de armazenamento e entrega no qual podemos ter um usuário com nossas próprias imagens. Possui certa similaridade com o GitHub, já que podemos dar pull nessas imagens para uso posterior.

### Registry

Local remoto onde é enviado ou baixado as imagens do Docker.\

Plataformas de Registry:\
- [Docker Hub](https://hub.docker.com/): registry público da empresa Docker Hub.
- [Quay Container Registry](): registry semelhante ao Docker hub, oferecido pela Red Hat

Grandes empresas como AWS, GCP e Azure tem seu propri serviço de registry.

- [Amazon Elastic Container Registry](https://aws.amazon.com/pt/ecr/): ECR.
- [Google Container Registry](https://cloud.google.com/container-registry): GCR
- [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/): ACR

## Fluxo padrão

![fluxo docker](/03-back-end/bloco-19-docker-utilizando-containers/images/docker-flow.webp)

#### Dockerfile

Possui as instruções necessárias para que possamos gerar uma imagem, aqui vão instruções de qual sistema operacional usar, tal como quais comandos devem ser executados quando a imagem for rodada em um contêiner.
Após isso, podemos dar push ou pull (como em um repositório do GitHub) em uma imagem no Registry.
Pode-se dar pull na sua própria imagem (caso tenha dado push nela) ou em outra de sua escolha, como ocorreu anteriormente no hello-world.

O registro mais comum é o Docker Hub, mas temos outros exemplos, como a imagem expõe.

Por último, rodamos a imagem em um contêiner, utilizando o comando run.

Após isso, temos que dizer para o contêiner o que deve acontecer: se ele deve se manter ativo ou não. Caso o contrário, o contêiner é encerrado, o que faz parte de seu ciclo de vida.

Sintaxe para os comandos do docker:
```
docker <comando> <sub-comando> <parâmetros>
```

Podemos abreviar alguns comandos, como foi o caso do docker run hello-world, que também poderia ser escrito como docker container run hello-world. Utilizaremos esta última forma por ser mais atual e verbosa.

Para saber quais contâiner estão ativos com o seguinte comando:
`docker container ls`

Para visualizar todos incluindos os inativos:
`docker container ls -a`

Para visualizar o ultimo container criado:
`docker container ls -l`

**Contrainer ID:** Identificador único.
**Image:** O nome da imagem utilizada para a criação do contêiner.
**Command:** O comando executado/ em execução dentro do contêiner.
**Created:** Quando foi criado o contêiner.
**Status:** O status atual.
**Port:** A porta que estamos utilizando para nos comunicar com o contêiner.
**Names:** O apelido do contêiner. Quando não é definido um, ele é criado aleatóriamente.

Quando executamos algum comando relacionado ao contêiner, podemos nos referenciar tanto pelo campo ID(inteiro ou parte dele), quanto pelo campo name.

#### Comando adicional antes de terminar o contêiner

É possivel executar comandos de terminal no contêiner antes que ele seja encerrado.
`docker container run <nome-da-imagem>:<tag> <comando> <argumentos-do-comando>`

Exemplo:
`docker container run ubuntu echo 'Hello Tryber!!'`

#### Rodando o contêiner de forma interativa

Para usar o terminar acessando o container diretamente basta passar o parâmetro -ti ao comando run que dá acesso a esse terminal*:
O comando -ti são dois comandos juntos:
`-t` que indica pro Docker que estamos requisitando um terminal no contêiner que consiga imprimir o retorno dos nossos comandos;
`-i` que estabelece uma interface de comunicação física com esse terminal, no caso, por meio do teclado.

## Principais comandos do CLI

- [Documentação de comandos](https://docs.docker.com/engine/reference/commandline/docker/)
- [Comandos para usar com docker run](https://docs.docker.com/engine/reference/commandline/run/#name)

Deve-se criar um novo contêiner e rodá-lo logo em seguida:
```
docker container run <parâmetros> <imagem>:<tag>
```

O parâmetro --name define um <nome-da-sua-escolha> para aquele contêiner (ao invés de um nome aleatório):
```
docker container run --name <nome-da-sua-escolha> <imagem>:<tag>
```

Modo 'Cleanup': O parâmetro --rm deve garantir que o contêiner seja removido ao final da execução (útil para testar imagens sem ficar acumulando contêiners novos):
```
docker container run --rm <imagem>:<tag>
```

O parâmetro -d (de --detach, desacoplado em português) rodará esse contêiner em segundo plano¹:
```
docker container run -d <imagem>:<tag>
```
Trabalhar em segundo plano significa que a aplicação está rodando, porém de forma assíncrona ao comando. Ou seja, embora não esteja visível, o processo está funcionando por de trás dos panos. É possível validar isso com o comando docker ps -a.

(Comando antigo)² Abreviação do comando docker container run:
`docker run <parâmetros> <imagem>:<tag>`

Nas versões mais novas, o Docker vem adotando comandos mais verbosos, nos quais identificamos a entidade (container, image etc) que estamos trabalhando, antes de realizar o comando, o que o torna o processo mais semântico.
Isso não significa, contudo, que os comandos das primeiras versões estejam depreciados (isto é, caíram em desuso), mas pode ser um alerta para futuras versões.

## Criar um contêiner sem executá-los

Cria um contêiner com a imagem de referência, mas não o executa imediatamente:
```
docker container create <parâmetros> <imagem>:<tag>
```

O parâmetro -it nesse contexto, deve garantir que, ao iniciar o contêiner, ele se mantenha ativo e disponha de um terminal de acesso:
```
docker container create -it <imagem>:<tag>
```

(Comando antigo) Abreviação do comando docker container create:
```
docker create <parâmetros> <imagem>:<tag>
```

### Listar contêiners

Lista (ls, list em inglês) todos os contêiners ativos:
```
docker container ls
```

Lista todos os contêiners ativos e inativos:
```
docker container ls -a
```

Lista o último contêiner criado independente do seu estado:
```
docker container ls -l
```

(Comando antigo) Abreviação do comando docker container ls (que também pode ser chamado como docker container ps):
```
docker ps <parâmetro>
```

### Iniciar, reiniciar, pausar, resumir e parar um contêiner

Inicia³ um contêiner usando referências de sua identificação única (campo CONTAINER ID, parcialmente ou inteiro), ou pelo nome (campo NAMES) que foi definido:
```
docker container start <CONTAINER ID || NAMES>
```

Note que o comando start difere do comando run. O start apenas inicia o contêiner que já havia sido criado (mas estava inativo), enquanto o run cria e executa um novo container!

Reinicia um contêiner usando as referências citadas anteriormente:
```
docker container restart <CONTAINER ID || NAMES>
```

Pausa um contêiner usando as referências citadas anteriormente:
```
docker container pause <CONTAINER ID || NAMES>
```

Tira um contêiner do modo de pausa usando as referências citadas anteriormente:
```
docker container unpause <CONTAINER ID || NAMES>
```

Encerra um contêiner usando as referências citadas anteriormente:
```
docker container stop <CONTAINER ID || NAMES>
```

(Comando antigo) Abreviações para os comandos anteriores:
```
docker <start || restart || pause || unpause || stop> <CONTAINER ID || NAMES>
```

É possível realizar essas operações passando mais de uma referência de contêiner por vez, como no exemplo abaixo:

![multi commands](/03-back-end/bloco-19-docker-utilizando-containers/images/docker-container-start-stop-tip.gif)

### Retomando o acesso a um contêiner interativo rodando em segundo plano

Caso você tenha iniciado um contêiner em segundo plano utilizando -dit, você pode acessar esse contêiner rodando o comando attach:
```
docker container attach <CONTAINER ID || NAMES>
```

Abreviação do comando docker container attach <CONTAINER ID || NAMES>:
```
docker attach <CONTAINER ID || NAMES>
```

### Excluindo contêiners específicos

Se o contêiner não estiver ativo, esse comando deve removê-lo:
```
docker container rm <CONTAINER ID || NAMES>
```

Se o contêiner estiver ativo, você deve passar o parâmetro -f (forçar) para parar sua execução e depois efetuar a remoção:
```
docker container rm -f <CONTAINER ID || NAMES>
```

(Comando antigo) Abreviação do comando docker container rm:
```
docker rm <CONTAINER ID || NAMES>
```

### Limpando contêiners que não estão sendo utilizados

⚠️ USE COM MODERAÇÃO ⚠️ Esse comando remove todos os contêiners inativos do seu computador. O comando pede confirmação e o resultado é conforme a imagem a seguir:
```
docker container prune
```

![prune-container](/03-back-end/bloco-19-docker-utilizando-containers/images/docker-container-prune.png)

### Monitorando os processos dentro de um contêiner

O comando top, assim como nos terminais Linux, traz as informações sobre os processos que estão sendo rodados, mas dentro daquele contêiner. Logo, não inclui serviços que são compartilhados com o sistema hospedeiro, por exemplo. Ele é útil para quando estamos os rodando em segundo plano:
```
docker container top <CONTAINER ID || NAMES>
```

![top-command](/03-back-end/bloco-19-docker-utilizando-containers/images/docker-container-top.gif)

Aqui o contêiner é rodado com um comando dd if=/dev/zero of=/dev/null que, no nosso caso, serve para estressar o contêiner, mostrando-o na lista de processos.

#

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

O comando deve ser executado durante a construção da imagem docker.
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

#

Recursos adicionais:
### 19.1
1. [Documentação Oficial do Docker](https://docs.docker.com/)
2. [Playground virtual: Play with Docker (PWD)](https://labs.play-with-docker.com/)
### 19.2
1. [Docker - Limpando contêineres, imagens e volumes](https://www.macoratti.net/19/02/dock_limp1.htm)
2. [Documentação oficial do Docker - About storage drivers](https://docs.docker.com/storage/storagedriver/)
3. [Docker Layers Explained](https://dzone.com/articles/docker-layers-explained)
4. [Documentação oficial do Docker - Docker images](https://docs.docker.com/engine/reference/commandline/images/)
5. [Documentação oficial do Docker - Dockerfile](https://docs.docker.com/engine/reference/builder/)
### 19.3
1. [Documentação oficial do Docker - User volumes](https://docs.docker.com/storage/volumes/)
2. [Configurando opções de rede dos containers](https://www.youtube.com/watch?v=pKJgQmXXryg)
3. [Manage senstive data with Docker secrets](https://docs.docker.com/engine/swarm/secrets/)
4. [Overview of Docker compose](https://docs.docker.com/compose/)
