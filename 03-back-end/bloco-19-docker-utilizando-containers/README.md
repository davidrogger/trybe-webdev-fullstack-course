anotações pessoais...

# Docker

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