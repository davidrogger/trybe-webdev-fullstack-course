Exercício 1 🚀 :
Vamos aprimorar nossos conhecimentos sobre images e volumes, para isso:

✅1 - Crie um arquivo HTML chamado index.html que tenha a seguinte estrutura:

Tag <title>;
Tag <H1>;
Tag <p>;
Salve o arquivo em qualquer lugar da sua máquina com a extensão html

✅2 - Crie um container para manter um servidor httpd:2.4.54 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.

```
docker run --rm -d \
-p 4545:80 \
-v $(pwd)/apache_volume:/usr/local/apache2/htdocs/ \
httpd:2.4.54
```

✅3 - Após criar o container, acesse a página HTML que está rodando no servidor em seu browser.
```
http://localhost:4545/
```

✅4 - Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto: “EXTRA.”;


✅5 - Obtenha o id do container httpd:2.4.54;

```
docker ps -l -q
```

✅6 - Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse container no Docker Host;
```
docker inspect $(docker ps -l -q) | grep -A 10 Mounts // grep para filtrar as linhas e monstrar somente a primeira linha que tiver Mounts, seguindo das 10 próximas linhas
```

✅7 - Agora pare o container httpd:2.4.54;
```
docker stop $(docker ps -l -q)
```

✅8 - Exclua o seu container;

`--rm Deletado após parado.`

✅9 - Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;

✅10 - Obtenha o IMAGE ID do servidor;
```
docker images
```

✅11 - Depois de obter o IMAGE ID, exclua a imagem.

`docker image rm -f [ID-IMAGE]`