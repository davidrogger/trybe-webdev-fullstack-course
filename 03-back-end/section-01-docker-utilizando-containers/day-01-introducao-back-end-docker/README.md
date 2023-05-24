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

