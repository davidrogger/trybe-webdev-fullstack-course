# Lista para lembretes:

## Docker

- [Documentação de comando de linha](https://docs.docker.com/engine/reference/commandline/docker/)

Listagem:
```
docker container ls // Containers em execução
docker container ls -a // Todos Containers, incluindo inativos
docker container ls -l // Último container criado
```

Execução:
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