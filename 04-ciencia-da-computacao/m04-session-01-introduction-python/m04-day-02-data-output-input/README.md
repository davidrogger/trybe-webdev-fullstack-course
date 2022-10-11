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

# Ambiente Virtual

Para resolver os problemas de versionamento de pacotes, em datas situações em que temos projetos com versões diferentes de bibiotecas e evitar incompatibilidade de versões é usado o ambiente virtual.
O `venv` é um módulo já embutido na linguagem, e serve para isolar ambientes de projetos. É possivel ter dois projetos rodando em dois ambientes diferentes, que podem ter versões diferentes de uma mesma biblioteca.

Na prática, é instalado as bibliotecas em um diretório que está relacionado ao projeto.

O comando para criação deste ambiente é `python3 -m venv .venv`, sendo que `.venv` é o nome do ambiente isolado. Este comando deve ser executado na raiz do projeto.

Instalando o venv no ubuntu: `sudo apt install python3-venv`

Este ambiente isolado será visto como um diretório criado na raiz do projeto. O ponto na frente do nome faz com que o diretório fique oculto.

Depois de criado, é preciso ativar o ambiente para usá-lo: source `.venv/bin/activate`

Para verificar se ativação ocorreu corretamente: `which python3`

O resultado será o caminho para a pasta onde você criou o ambiente virtual (pwd), acresdido de `.venv/bin/python3`

# Desempacotamento de valores

É um recurso útil de Python quando é preciso separar os valroes recebidos em variáveis diferentes. Quando há uma atribuição múltipla e o valor da direita pode ser percorrido, o Python entende que deve atribuir cada um dos valores a uma variável da esquerda, seguindo a ordem.

Exemplo:
```
a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3) # Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]
```


