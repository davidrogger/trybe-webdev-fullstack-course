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

