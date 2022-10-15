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

# Manipulação de arquivos

A função open é responsável por abrir um arquivo, tornando possível sua manipulação. Seu único parâmetro obrigatório é o nome do arquivo. Por padrão, arquivos são abertos somente para leitura, mas podemos modificar isto passando o modo (para escrita mode="w").

Exemplo:
```
file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.
```

Para escrever um conteúdo em um arquivo utilizamos a função write:

```
# file = open("arquivo.txt", mode="w")

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")
```

Só é possível escrever em um arquivo após abri-lo em um modo que permita escrita.

É possivel escrever arquivos usando o print.


Exemplo:
```
#
# file.write("Miguel 33\n")


# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)
```

Para escrever múltiplas linhas podemos utilizar a função writelines. Repare que a função espera que cada linha tenha seu próprio caractere de separação (\n):
```
#
# print("Túlio 22", file=file)


LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)
```

Por termos uma quantidade limite de abertura de arquivos, após finalizado é necessário fechar o arquivo que abrimos com a função close: `file.close()`
Outro motivo importante para se fechar os arquivos é que normalmente a manipulação de arquivos é feita através de buffers. Ou seja, a escrita em disco pode não ser imediata. Quando fechamos o arquivo, garantimos que tudo aquilo que ainda não está escrito seja persistido.

A leitura do conteúdo de um arquivo pode ser feita utilizando a função read.

Além de arquivos textuais, também existem arquivos binários. Eles são arquivos que contêm uma série de bytes e a sua leitura pode variar de acordo com o arquivo. Nesse caso, devemos acrescentar um b ao parâmetro mode, indicando que será utilizado o modo binário.

As operações são similares a de um arquivo textual. Porém tanto a escrita quanto a leitura devem ser feitas utilizando bytes.

# Lidando com exceções

Erros podem acontecer: um arquivo pode não existir, permissões podem faltar e codificações podem falhar. Por isso temos de garantir que, ainda que um erro ocorra feramos o fechamento do nosso arquivo.

Há pelo menos dois tipos de error que podem ser destacados: erros de sintaxe e exceções.

## Erros de Sintaxe

Error de sintaxe ocorrem quando o código utiliza recursos inexistentes da linguagem que não consegue interpretá-los.

## Exceções

Já as exceções ocorrem durante a execução e resultam em mensagem de error:

Exemplo:
```
print(10 * (1 / 0))
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
print(4 + spam * 3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'spam' is not defined
print('2' + 2)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str
```

No exemplo temos três exceções, ZeroDivisionError, NameError e TypeError. A lista completa de exceções já embutidas na linguagem pode ser vista [aqui](https://docs.python.org/pt-br/3/library/exceptions.html#bltin-exceptions)

## Tratamento de exceções

Para tratar exceções utilizamos o conjunto de instruções try, como as palavras reservadas trye e except. O funcionamento dessa cláusula ocorre da seguinte forma:

- Se nenhuma exceção ocorrer, a cláusula except é ignorada e a execução da instrução try é finalizada.
- Se ocorrer uma exceção durante a execução da cláusula try, as instruções remanascentes na cláusula são ignoradas. Se o tipo da exceção ocorrida tiver sido previsto em algum except, então essa cláusula será executada.
- Se não existir nenhum tratador previsto para tal exceção, trata-se de uma exceção não tratada e a execução do programa termina com uma mensagem de erro.

Vamos agora ver um exemplo de tratamento de exceções:

```
while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")
```

No exemplo acima, quando for adicionado uma letra, não quebrará a interação, mas sim aparecerá a mensagem de except, até ser inserido um número.

## Lidando com exceções enquanto manipulamos arquivos

Sempre devemos fechar um arquivo e podemos, em um bloco trye, fazer isso utilizando a instrução finally ou else. O finally é uma outra cláusula do conjunto try, cuja finalidad eé permitir a implementação de ações de limepza, que sempre devem ser executadas independentemente da ocorrência de ações. Já o else ocorre sempre que todo o try for bem sucedido.

```
try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")
```

Como estamos abrindo o arquivo em modo de leitura, uma exceção será levantada caso ele não exista, executando as cláusulas except e finally. Entretanto, se alterarmos o modo para escrita, o arquivo será criado mesmo se inexistante, executando as cláusulas else e finally.

Este padrão é muito comum, não só em arquivos, mas também em outros recursos que devemos utilizar e liberar ao final (conexões de bancos de dados, por exemplo). Tão comum que o Python tem um mecanismo próprio para lidar com isto.

O with é a palavra reservada para gerenciamento de contexto. Este gerenciamento (with) é utilizado para encapsular a utilização de um recurso, garantindo que certas ações sejam tomadas independentemente se ocorreu ou não um erro naquele contexto.

A função open retorna um objeto que se comporta como um gerenciador de contexto de arquivo que será responsável por abrir e fechar o mesmo. Isto significa que o arquivo possui mecanismo especiais que, quando invocados utilizando with, alocam um determinado recurso -- um arquivo -- e o liberam quando o bloco for finalizado.

```
# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
with open("arquivo.txt", "w") as file:
    file.write("Michelle 27\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)
```

# Manipulando arquivos JSON

JSON é um formato textual muito utilizado para integração de sistemas. Ele é baseado em um subconjunto de regras JavaScript, embora seja independente de linguagem.

Por sua legibilidade e tamanho (é bem leve), além da facilidade de leitura e escrita por seres humanos e máquinas, vem sendo bastante utilizado na web e para troca de informações entre sistemas.

Alguns exemplos de utilização incluem comunicação back-end e front-end, e comunicação com sistemas externos (gateways de pagamento) ou internos (como um sistema de autenticação).

A linguagem Python já inclui um módulo para manipulação desse tipo de arquivo e seu nome é json.

# Manipulando arquivos CSV

O formato CSV (Comma Separated Values) é muito comum em exportações de planilhas de dados e base de dados. Foi utilizado por muito tempo antes de sua definição formal, o que gerou uma despadronização desde formato e o surgimento de vários dialetos.

Cada dialeto tem seus próprios delimitadores e caracteres de citação, porém o formato geral é semelhante o suficiente para utilizarmos o mesmo módulo para este processamento.

Ainda que seu nome indique que o delimitador seja a ","(vírgula), existem variações que utilizam ";"(ponto e vírgula) ou até mesmo tabulações ("\t").

Sem dúvidas, análise de dados é o que se destaca quando estamos falando sobre manipular arquivos CSV.
```
import csv

with open("graduacao_unb.csv", encoding = "utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    # Usando o conceito de desempacotamento
    header, *data = graduacao_reader

print(data)
```
O leitor define como dialeto padrão excel, o que significa dizer que o delimitador de campos será ",", e o caractere de citação será as aspas duplas ("). Uma forma de modificar estes padrões é definindo-os de forma diferente na criação do leitor. Além disso, o leitor irá usar o decodificador padrão do sistema para decodificar em unicode o arquivo .csv. Para utilizar um decodificador diferente, deve ser passado o argumento encoding com o valor do decodificador esperado. Um leitor de .csv pode ser percorrido utilizando o laço de repetição for e, a cada iteração, retornar uma nova linha já transformada em uma lista Python com seus respectivos valores.

Podemos fazer uma análise e verificar quantos cursos são ofertados por departamento. Em seguida salvamos o resultado também no formato .csv:

```
import csv

with open("graduacao_unb.csv", encoding="utf8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    # Usando o conceito de desempacotamento
    header, *data = graduacao_reader

group_by_department = {}
for row in data:
    department = row[15]
    if department not in group_by_department:
        group_by_department[department] = 0
    group_by_department[department] += 1

# Escreve o relatório em .csv
# Abre um arquivo para escrita
with open("department_report.csv", "w", encoding = "utf-8") as file:
    writer = csv.writer(file)

    # Escreve o cabeçalho
    headers = [
        "Departamento",
        "Total de Cursos",
    ]
    writer.writerow(headers)

    # Escreve as linhas de dados
    # Desempacotamento de valores
    for department, grades in group_by_department.items():
        # Agrupa o dado com o turno
        row = [
            department,
            grades,
        ]
        writer.writerow(row)

```
