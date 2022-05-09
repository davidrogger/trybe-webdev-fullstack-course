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

