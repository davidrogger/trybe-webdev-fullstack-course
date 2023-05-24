# Lista para lembretes:

## Docker

- [Documentação de comando de linha](https://docs.docker.com/engine/reference/commandline/docker/)

### Listagem
```
docker container ls // Containers em execução
docker container ls -a // Todos Containers, incluindo inativos
docker container ls -l // Último container criado
```

### Execução
```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```
- [Lista de opções](https://docs.docker.com/engine/reference/commandline/run/)

Criação:
```
docker create [OPTIONS] IMAGE [COMMAND] [ARG...]
```
- [Lista de opções](https://docs.docker.com/engine/reference/commandline/create/)

Remove todos container e imagens Docker:
```
docker system prune -af
```

### Dockerfile

```
docker build -t [image-name] [dockerfile path]
docker build -t my-image . // Imagem com nome my-image localizada na pasta atual de onde o comando está sendo executado.
```

### Bind de portas

- -p com ele minusculo é possivel definir a atribuição da porta `-p 1234:80` (host:container), atribuido a porta 1234 para porta 80 do container.
- -P atribui de forma aleatória a porta para o container.