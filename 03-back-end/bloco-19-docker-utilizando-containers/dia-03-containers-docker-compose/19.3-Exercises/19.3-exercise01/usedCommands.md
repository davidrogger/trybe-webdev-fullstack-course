1. Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura:
Tag <title> com o seguinte texto "Trybe";
Tag <H1> com o seguinte texto "Missão da Trybe";
Tag <p> com o seguinte texto "Gerar oportunidade para pessoas";
Salve o arquivo em qualquer lugar da sua máquina com a extensão html

2. Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
**NOTA: esse exercise está com a descrição errada, deveria ser apontando que devemos apontar também o local onde criamos o arquivo HTML para ter sentido o passo 4.**

`docker container run -d --name exercise01 -p 4545:80 -v "caminho-da-pasta/:/usr/local/apache2/htdocs" httpd:2.4`

3. Após criar o container acesse a página HTML que está rodando no servidor em seu browser.

`http://localhost:4545/missao_trybe.html`

4. Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto "Nosso negócio é GENTE! #VQV";

5. Obtenha o id do container httpd:2.4;

`docker container ls`

6. Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host;

`docker inspect <ID || NAME>`

7. Agora pare o container httpd:2.4;

`docker container stop`

8. Exclua o seu container;

`docker container rm <ID || NAME>`

9. Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;

10. Obtenha o IMAGE ID do servidor;

`docker images`

11. Depois de obter o IMAGE ID, exclua a imagem.

`docker image rm <ID>`