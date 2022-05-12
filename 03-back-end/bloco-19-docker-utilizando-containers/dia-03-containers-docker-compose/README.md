anotações pessoais...

# Docker Compose

É a solução para organizar o funcionamento e configuração de todas essas partes que compõem um sistema, definimos em um arquivo de configuração YAML todos os detalhes para executar nosso ambiente de desenvolvimento local, aproveitando as vantagens do Docker, sem nos preocupar em subir cada um dos contêineres que envolvem um app e seus respectivos parâmetros específicos.

# Networks - Redes no Docker

É uma rede virtualizada que permite conectar contêineres a uma determinada rede ou a quantas redes Docker desejar. De modo que esses contêineres possam compartilhar informações por meio dessa rede.
Por padrão, o Docker possui 3 redes que são criadas junto a ele, são elas: bridge, none e host. Cada uma delas tem características específicas quanto a conectividade para seus contêineres, elas podem ser consultadas pelo comando: `docker network ls`
