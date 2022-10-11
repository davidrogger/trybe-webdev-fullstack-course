# Estruturando uma aplicação

## Módulos

Um módulo é um arquivo que contém definições e instruções em Python. O nome do arquivo é um nome acrescido de .py. Você pode importar um módulo dentro de um outro arquivo Python e ter acesso às suas funções, classes, etc.
Todo arquivo escrito com a linguagem Python com a exntesão py é considerada um módulo.

# Pacotes

São módulos Python que contêm outros módulos ou pacotes, comumente separados por responsabilidades similares. Na prática, um pacote é um diretório que pode conter vários módulos (arquivos de extensão .py)

Exemplo de tipos diferentes de imports de pacotes:

```
import http  # importa o pacote http como um módulo

from http import client  # importa o módulo client do pacote http

from http.client import HTTP_PORT  # importa a constante HTTP_POST do módulo client do pacote http
```

