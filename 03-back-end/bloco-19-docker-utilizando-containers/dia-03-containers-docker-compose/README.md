anotações pessoais...

# Docker Compose

É a solução para organizar o funcionamento e configuração de todas essas partes que compõem um sistema, definimos em um arquivo de configuração YAML todos os detalhes para executar nosso ambiente de desenvolvimento local, aproveitando as vantagens do Docker, sem nos preocupar em subir cada um dos contêineres que envolvem um app e seus respectivos parâmetros específicos.

# Networks - Redes no Docker

É uma rede virtualizada que permite conectar contêineres a uma determinada rede ou a quantas redes Docker desejar. De modo que esses contêineres possam compartilhar informações por meio dessa rede.
Por padrão, o Docker possui 3 redes que são criadas junto a ele, são elas: bridge, none e host. Cada uma delas tem características específicas quanto a conectividade para seus contêineres, elas podem ser consultadas pelo comando: `docker network ls`

## Bridge

Ao ser iniciado, todo contêiner é associado a uma rede. Caso essa rede não seja especificada explicitamente por nós, ele será associado à rede Bridge.
Todos os contêineres associados a essa rede poderão se comunicar via protocolo TCP/IP e caso soubermos o IP do contêiner que queremos conectar, podemos enviar tráfego a ele. Entretando, os IPs de um contêiner são gerados automaticamente, e não é efeitovo fazermos a conexao dessa forma, pois sempre que o contêiner for reiniciado, o IP poderá mudar.

Uma outra possíovel maneira de fazermos a descoberta do IP automaticamente pelo nome, é utilizando a opção `--link`. Porém a pr´orpia documentação do Docker desencoraja seu uso e alerta que essa flag (`--link`) pode ser removida eventualmente.
Vamos ver um exemplo de como isso funciona, utilizando uma imagem busybox:

## Host

Ao associarmos um contêiner a essa rede, ela passa a compartilhar toda stack de rede do host, da máquina que roda o ambiente Docker.

## None

Essa é uma rede que não possui nenhum driver associado. Dessa maneira, ao atribuir um contêiner a ela, o mesmo ficará isolado. Ela é útil quando temos contêineres que utilizam arquivos para execução de comandos ou para se comunicar, por exmeplo: um contêiner de backup ou que rode apenas um script localmente.

## Criando Nossa Rede

A forma mais recomendada de comunicarmos nossos contêineres é criando nossa própria rede. Por meio dela, conseguirmos referenciar um contêiner a partir de outro, utilizando seu nome.
```
docker network create -d bridge minha-rede
```

Para vincularmos nosso contêiner à rede criada durante sua execução:
```
docker container run \
    -itd \
    --network minha-rede \
     --name meu-container \
     busybox
```

Para listar as redes: `docker network ls`

Minha-rede seria a rede e o meu container o container
Para conectar a network ao container: `docker network connect minha-rede meu-container`
e para desconectar é usado o mesmo comando alterando para: `disconnect`

## Volumes - Mapeando pastas para utilização em contêineres

É usado para manter informações salvas de um container.
usar um volume significa mapear uma pasta do nosso sistema hospedeiro, para o sistema convidado. Assim ela é vinculada ao contêiner e essa pasta permanecerá mesmo que esse contêiner seja removido.

Exemplo: Queremos desenvolver nossa página HTML de forma que ela rode dentro do servidor http Apache, que não está instalado em nossa máquina. À medida que formos desenvolvendo nossa página HTML, precisamos que o nosso ambiente de desenvolvimento permaneça no contêiner. Para isso, a primeira coisa que vamos fazer é criar a seguinte página HTML:
```
<!DOCTYPE html>
   <html>
      <head>
      <title>Docker é muito bom!</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>Minha primeira página rodando em Docker.</h1>
      <p>Estou começando minha primeira página em HTML.</p>
   </body>
</html>
```

Salve o arquivo com o nome primeiro-teste.html em alguma pasta local de fácil acesso.
* Aqui usaremos o caminho /home/trybe/meu-site.
Agora, vamos criar um contêiner que manterá um volume vinculado a essa nossa pasta local, para que qualquer alteração que fizermos em nosso HTML seja refletida no servidor http em nosso contêiner.
Para isso, vamos usar no comando run, o parâmetro -v (de 'volume') da forma -v <PASTA-LOCAL>:<PASTA-CONTAINER>:
```
docker run -d --name site-trybe2 -p 8881:80 -v "/home/trybe/meu-site/:/usr/local/apache2/htdocs/" httpd:2.4
```

Vamos entender esse comando que acabamos de executar nos concentrando na flag -v:

. Essa flag cria um volume e é seguida pelo endereço do diretório em nossa máquina /home/trybe/meu-site/ acompanhada do endereço no diretório do servidor /usr/local/apache2/htdocs/, o qual será vinculado.
. Esse diretório é específico para armazenar os arquivos que vão ser acessados no servidor http Apache, e pode ser diferente caso você opte por usar outro aplicativo.
. Qualquer modificação que realizarmos no arquivo HTML em nossa máquina local será refletido pelo contêiner no endereço da pasta do nosso servidor Apache.

Agora, acesse o site mantido pelo servidor Apache acessando o endereço http://localhost:8881/primeiro-teste.html no navegador e lá estará o aquivo HTML que você acabou de criar.
Bora fazer um teste!? 💪
Acesse novamente o arquivo primeiro-teste.html que acabamos de criar e edite-o da seguinte forma:
```
<!DOCTYPE html>
   <html>
      <head>
      <title>Docker é muito bom!</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>Minha primeira página rodando em Docker, que maravilha!</h1>
      <p>Estou começando minha primeira página em HTML e estou muito feliz! #VQV</p>
   </body>
</html>
```

O que podemos concluir com isso?
1- Podemos criar um ambiente de desenvolvimento baseado apenas no uso de contêineres, o que facilita o trabalho dos times de desenvolvimento, já que o volume pode ser compartilhado entre o time e acessado via diferentes contêineres.
2- Tendo um volume na sua máquina, você pode utilizar outros contêineres sem perder seus arquivos!
3- Quando usamos o volume, mesmo que o contêiner seja excluído, o volume será mantido. Isso quer dizer que tudo que colocarmos na pasta /usr/local/apache2/htdocs/, do contêiner, ficará preservado na pasta /home/trybe/meu-site em nossa máquina.
Bora exemplificar essa afirmação fazendo os seguinte comandos:
```
docker inspect site-trybe2 #que é o nome que demos ao nosso container
```

Teremos uma saída com muitas informações, mas o mais importante nesse momento é o "Mounts" que nos mostra através da propriedade Source onde está o volume desse container em nosso Docker Host.
```
"Mounts": [
   {
      "Type": "bind",
      "Source": "/home/trybe/meu-site",
      "Destination": "/usr/local/apache2/htdocs",
      "Mode": "",
      "RW": true,
      "Propagation": "rprivate"
   }
]
```

Agora que confirmamos que temos um volume criado em nosso Docker Host, faremos a exclusão de nosso contêiner e verificaremos se junto com ele nossa pasta /home/trybe/meu-site também será excluída. Para isso, em posse do id do nosso contêiner primeiro precisamos pará-lo com o comando:
```
docker stop site-trybe2
```

Agora que paramos o nosso contêiner, vamos excluí-lo com o comando:
```
docker rm site-trybe2
```

Também é possivel especificar os volumes da nossa imagem no nosso Dockerfile, usando o comando VOLUME.
```
VOLUME ["/data"]
```

Toda vez que criarmos um contêiner que mapeia um volume, ele alocará espaço para esse volume no seu sistema. Por tanto, é sempre importante verificar seus volumes utilizando docker volume ls e remover aqueles que você não utiliza, seja com o comando `docker volume rm <VOLUME NAME>`, seja com `docker volume prune`(esse comando remove todos os volumes que não estão sendo utilizados por contêineres).

Também é possivel remover volumes automaticamente ao remover contêineres, utilizando o comando `docker container rm -v <CONTAINER ID || NAMES>`, onde o -v indica para o docker que o volume associado ao contêiner também deve ser removido.

## Docker Compose

É uma ferramenta para definir e rodar aplicações multi-containers Docker. Com ele, podemos automatizar a implantação e gerenciamento dos contêineres.
Usamos para definir quais contêineres irão rodar e a partir de qual imagem deles serão criados.
Para isso é usado um único arquivo YAML com todos os detalhes e especificações para subirmos os serviços de um ambiente em uma certa ordem pré-determinada, sem a necessidade de subir cada um dos contêineres que compõe a aplicação com seus parâmetros específicos no run.

Compose irá trabalhar em conjunto com o Dockerfile.

# Instalando Docker Compose

Se você estiver utilizando Windows ou Mac, o Docker Compose já é instalado junto com o Docker Desktop. Caso esteja utilizando alguma distro Linux, basta utilizar o seguinte comando para realizar a instalação:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

Aplicando permissões:
```
sudo chmod +x /usr/local/bin/docker-compose
```

Validando a instalação:
```
docker-compose --version
```

[Guia oficial de instação](https://docs.docker.com/compose/install/#install-compose)

## Compose File - Parte I

O arquivo Docker Compose é onde conseguimos especificar todos os parâmetros que antes rodávamos unitariamente utilizando `docker container run`. Também podemos criar os demais objetos utilizados pro eles, como redes e volumes.

Mepar todos os comandos e estruturá-los em um único arquivo tem diversas vantagens. Uma delas, especialmente vantajosa quando estamos trabalhando com muitos contêiners, é evitar a necessidade de digitar inúmeros parâmetros em linha de comando com o run.
Toda configuração do **Docker Compose** é feita por meio de um arquivo YAML, o nome padrão usado é `docker-compose.yaml`, porém pode ser usado qualquer outro.
```
version: "<VERSÃO-DO-COMPOSE>"
services: # Definição dos containers
  <MEU-CONTAINER-1>:
    image: <MINHA-IMAGEM:VERSÃO> # Exemplo carregando uma imagem já _buildada_
    # ... outras configurações
  <MEU-CONTAINER-2>:
    build: <CAMINHO-DO-DOCKERFILE> # Exemplo gerando uma build a partir de um `Dockerfile`
    # ... outras configurações
  <MEU-CONTAINER-N>:
    image: <MINHA-IMAGEM:VERSÃO>
    # ... outras configurações
```

## Version

Todo arquivo docker-compose.yaml deve iniciar com a tag version. Para evitar que o docker-compse.yaml fique incompatível com versões mais recentes do compose.

[Versões do Compose](https://docs.docker.com/compose/compose-file/compose-versioning/#versioning)

## Services

São os "tipos" dos contêineres que iremos rodar. Podemos por exmeplo, escalar nossa API em 4 contêineres diferentes, de forma que teremos um service que é a nossa API, porém com 4 contêineres em execução. Dessa forma, ao escrevermos nosso arquivo, temos que pensar em services, pois é assim que iremos defini-los.

Exemplo de como ficaria o arquivo Compose:
```
version: '3'
services:
  frontend::

  backend:

  database:
```

No exemplo é dado um nome aos serviços, porém não é especificado o que deverá ser executado, todo contêiner é criado de uma image, precisamos especificar nos serviços:

1. image: para especificar uma imagem, seja local ou a ser baixada no Docker Hub;
2. build para apontar um diretŕoio com o Dockerfile a partir do qual o Compose irá buildar a imagem.

Exemplo do arquivo docker-compse:
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
  database:
    image: mjgargani/compose-example:database-trybe1.0
```

O arquivo irá funcionar como se estivessem sendo executados três docker container run, um para cada serviço. Agora é necessário definir os demais parâmetros para os nossos contêineres.

## Restart

No Docker existem as políticas de reinicialização, que servem para gerenciar se nossos contêineres reiniciarão automaticamente quando o Docker for reiniciado ou quando ocorrer algum erro.

Comandos:
1. `no` - Este é o valor padrão assumido pelo Docker e define que o container não irá restartar automaticamente;
2. `on-failure` - Define que o container será reiniciado caso ocorra alguma falha, apontando pelo `exit code` diferente de zero;
3. `always` - Espefica que sempre que o serviço parar, seja por uma falha ou porque ele finalizou sua execução, ele irá ser reiniciado;

Caso o contêiner seja interrompido manualmente, ele só será reiniciado depois que o daemon do Docker for reiniciado ou que o próprio contêiner seja reiniciado manualmente. Esse é um mecanismo pra evitar loops.

4. `unless-stopped` - Define que o contêiner sempre seja reiniciado, a menos que o Docker em si seja parado (manualmente ou não). No caso de ser interrompido, ele não reinicia nem se o daemon do Docker for reiniciado.

O daemon do Docker é um processo contínuo e que roda em segundo plano, gerenciando os contêineres Docker em um host.

É importante utilizarmos o parâmetro em ambiente de produção, principalmente quando utilizamos o Docker Compose, conforme é recomendado pelas especificações da própria documentação.

Adicionando as configurações o exemplo ficará assim:
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```

## Ports

Uma configuração importante é a porta. No docker-compose temos o parãmetro ports que se comparta da mesma maneira que o -p do docker, no exmeplo vamos usar a porta 3000 para o frond-end e a porta 3001 para o back-end.
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```

O primeiro parâmetro (**3000**:3000) é para a porta do host e o segundo (3000:**3000**) é a porta exposta do contêiner.

## Environment

Com ele conseguimos configurar as variáveis de ambiente de nosso contêiner. Em uma situação que precisamos passar para nosso back-end uma parte da URL onde o banco de dados irá rodar, em uma variável chamada DB_HOST. Nosso exmeplo ficaria:
```
version: '3'
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```

Está sendo passado a variável DB_HOST, que está em nosso host, para a variável "DB_HOST" do container, onde o back-end está esperando por ela.
Mesmo tendo a env configurada em seu ambiente, ela só será passada ao contêiner se especificada aqui, da mesma maneira como fazemos com o parâmetro -e ou --env no comando run.
É possivel utilizarmos variaveis de ambiente. No caso de uma variável API_SECRET por se tratar de um dado sensível, não podemos colocá-lo em um arquivo a ser versionado como parte de nossa aplicação, porém ainda temos que especificar ao compose qual variável irá ser passada para qual contêiner.

No Contexto do Docker, secret é um dado que não deve ser transmitido por uma rede ou armazenada sem criptografia em um DOckerfile ou até mesmo no código fonte de sua aplicação, como uma senha ou uma chave privada SSH. [Documentação sobre ambiente](https://docs.docker.com/compose/environment-variables/).

## Depends On

Garante a ordem de inicialização e encerramento de services, com ele conseguimos estabelecer dependências entre os serviços.

Exemplo:
```
version: "3.8"
services:
  frontend:
    image: mjgargani/compose-example:frontend-trybe1.0
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - "backend"
  backend:
    image: mjgargani/compose-example:backend-trybe1.0
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - "database"
  database:
    image: mjgargani/compose-example:database-trybe1.0
    restart: always
```

Os services serão iniciados respeitando a ordem das dependências, database será iniciado antes do backend, que será iniciado antes do frontend.

# Gerenciando Services

## Up

Comando `docker-compose up`, o Compose irá executar todos os contêineres especificados, baixando as imagens do repositório ou montando localmente a partir do Dockerfile, de acordo com o que foi especificado no arquivo, nesse momento além de executar os contêineres o compose irá criar os demais objetos espeicificados, como redes e volumes.
Da mesma forma como rodamos os contêineres no modo daemon, podemos fazer no docker-compose up, utilizando o parãmetro -d

Caso tenha sido dado um nome diferente do padrão para o seu arquivo Compose, o parâmetro -f pode ser utilizado. Lembra-se que ele pertence ao comando docker-compose, ele precisa ser passado logo após o comando.

Exemplo:
```
docker-compose -f meu-arquivo-compose.yaml up
ou
docker-compose -f meu-arquivo-compose.yml stop
```
A sintaxe `docker-compose <COMMAND> -f` não funcionará.

Se o arquivo possuir o nome padrão(docker-compose.yaml), não é necessário passar a flag, apenas lembra-se de estar no mesmo diretório do arquivo.

Pode-se usar o comando espeicificando o service.
Exemplo:
```
docker-compose up backend
```

O compose irá iniciar o database, que foi definido no docker-compose como dependência do service backend, por meio do parâmetrp depends_on.

Caso seja usado o parâmetro build (que recebe o caminho do _Dockerfile) da aplicação ao invés da imagem, o _Compose irá construir a imagem se isso não tiver sido feito anteriormente. Uma vez que a imagem seja 'construida' pelo compose, ele utilizará essa imagem já criada na próxima vez que executarmos o up, sem atualizá-la.
para forçar um novo build pode-se usar o tag --build especificando um service, caso não seja especificado ele irá tentar buildar todas as imagens possiveis novamente.
```
docker-compose up --build <SERVICE NAME>
```

É comum usar o --build durante o desenvolvimento, para refletir as atualizações no ambiente do Compose.

## Down

Com ele todos os containers irão ser parados e os objetos criados pelo up, como as redes.
```
docker-compose down
```

## Ps

Usado para listar os container ativos. Será listando somente os containers pertencentes ao arquivo do Compose.
```
docker-compose ps
```

## Stop

Com ele todos os containers irão ser parados, mas diferente do Down, ele não irão remover as redes e outros objetos criados pelo Up.
Assim como o Up é possivel determinar qual service será parado, respeitando as dependências.
Exemplo:
```
docker-compose stop backend
```
O backend será parado antes do database, ao executarmos esse comando.

## Start

Semelhante ao stop, com ele podemos iniciar os services parados referentes à aquele arquivo compose. (pode-se usar o nome do server para iniciar também)
```
docker-compose start
```

## Logs

Com ele pode-se ver os logs dos services de maneira semelhante com os contêineres. É possivel especificar um service para visualizar os logs de todos os seus contêineres ou ver todos os logs daquele ambiente, conforme arquivo do compose.
Pode-se também utilizar a flag -f ou --follow para acompanhar em tempo real as saídas dos contêineres e o --tail para definir o número de linhas para ser exebido a partir do final do log.
```
docker-compose logs -f --tail=100 <SERVICE NAME>
```

# Compose File - Parte II

## Volumes

É possivel também usar volumes por meio do nosso arquivo compose.
Pode-se definir os volumes da mesma maneira que é feito no comando docker container run, tanto como bind como da forma nomeada.

Usando uma forma mais extensa dele:

```
version: "3.8"
services:
  web:
    image: nginx:alpine
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
      - type: bind
        source: ./static
        target: /opt/app/static

  db:
    image: postgres:latest
    volumes:
      - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock"
      - "dbdata:/var/lib/postgresql/data"

volumes:
  mydata:
  dbdata:
```

## Networks

Containers precisam estar na mesma rede para conseguir se comunicar utilizando o `name`.
Utilizando o Docker compose, isso já é realizado de maneira padrão. Ao iniciar um novo arquivo, será criada uma rede padrão bridge para comunicação de todos os serviçoes espeicifcados, dessa forma conseguimos facilmente comunicar todos os services.

Se for apontado para o localhost:3000, o contêiner irá acessar a própria porta e não irá encontrar nada, pois o banco está em outro serviço. Por isso deve-se usar o nome do service.

Para isso, basta utilizar a opção networks em nossos serviços, definindo uma rede para um serviço específico de forma semelhante ao volume, definimos as redes a serem criadas.

A sintaxe básica é a seguinte:
```
version: "<VERSÃO-DO-COMPOSE>"
services:
  <MEU-CONTAINER-1>:
    image: <MINHA-IMAGEM:VERSÃO>
    networks:
      - <NETWORK-1>
    # ... outras configurações
  <MEU-CONTAINER-2>:
    build: <CAMINHO-DO-DOCKERFILE>
    networks:
      - <NETWORK-1>
      - <NETWORK-1>
    # ... outras configurações
  <MEU-CONTAINER-N>:
    image: <MINHA-IMAGEM:VERSÃO>
    # ... outras configurações

networks:
  <NETWORK-1>:
```

Um exemplo, possuimos um ambiente com 3 services,um front-end e dois back-ends e mais um banco de dados. nessa arquteture, apenas os back-ends acessam o banco de dados e o front-end acessa os back-ends. Paracriarmosesse isolamento, nosso YAML ficaria semelhante ao exemplo abaixo:
```
version: '3'

services:
  frontend-a:
    build: ./frontend_a
    networks:
      - frontend

  backend-a:
    build: ./backend_a
    networks:
      - backend
      - frontend

  backend-b:
    build: ./backend_b
    networks:
      - backend
      - frontend

  db:
    image: mysql
    networks:
      - backend

networks:
  frontend:
  backend:
```

