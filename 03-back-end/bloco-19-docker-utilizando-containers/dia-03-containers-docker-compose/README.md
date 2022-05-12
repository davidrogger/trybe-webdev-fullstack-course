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

