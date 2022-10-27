# O que é raspagem de dados?

É uma técnica computacional para extrair dados provenientes de um serviço ou aplicação, estruturando-os em bancos de dados, planilha ou outros formatos. Essa técnica consiste em extrair dados de sites e transportá-los para um formato mais simples e maleável para que possam ser analisados e cruzados com mais facilidade.

Passo aplicados nessa técnica:

- Realização de requisições
- Análise das respostas
- Estração dos dados
- Navegação do conteúdo
- Limpeza
- Armazenamento dos dados

# Requisições web


A comunicação com servidores HTTP e HTTPS se dá através de requisições, nas quais utilizamos o verbo para indicar que tipo de ação deve ser tomada para um dado recurso.
Devemos informar na requisição em qual recurso estamos atuando e no cabeçalho passamos algumas informações que podem ser importantes, como o tipo de resposta aceita ou o tipo de conteúdo sendo enviado.

O Python possui um pacote para lidar com o protocolo HTTP o `urllib`, porém seu uso é mais verboso, por isso será usado o `requests`, que possui uma interface mais amigável e é bem difundida na comunidade.

Ferramenta usada: `python3 -m pip install requests`

```
import requests


# Requisição do tipo GET
response = requests.get("https://www.betrybe.com/")
print(response.status_code)  # código de status
print(response.headers["Content-Type"])  # conteúdo no formato html

# Conteúdo recebido da requisição
print(response.text)

# Bytes recebidos como resposta
print(response.content)

# Requisição do tipo post
response = requests.post("http://httpbin.org/post", data="some content")
print(response.text)

# Requisição enviando cabeçalho (header)
response = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})
print(response.text)

# Requisição a recurso binário
response = requests.get("http://httpbin.org/image/png")
print(response.content)

# Recurso JSON
response = requests.get("http://httpbin.org/get")
# Equivalente ao json.loads(response.content)
print(response.json())

# Podemos também pedir que a resposta lance uma exceção caso o status não seja OK
response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()
```

# Rate Limit

Para evitarmos ataques de negação de serviço, quando estivermos raspando conteúdo, uma boa prática é sempre fazermos uma pausa entre as requisições, ou lote delas, mesmo que o website onde a informação está não faça o bloqueio. Assim evitamos tirar o site do ar.

```
import requests
import time


# Coloca uma pausa de 6 segundos a cada requisição
# Obs: este site de exemplo tem um rate limit de 10 requisições por minuto
for _ in range(15):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response)
    time.sleep(6)
```

# Timeout

Para garantir uma resposta quando solicitamos um recurso ao servidor, evitando problemas de lentidão ou problemas interno do servidor, podemos definir um tempo limite para que, apóe este tempo, possamos tomar alguma atitude, como realizar uma nova tentiva.
```
import requests

# Por 10 segundos não temos certeza se a requisição irá retornar
response = requests.get("https://httpbin.org/delay/10")
print(response)
```

Este tempo limite normalmente é definido atráves de experimentações e análise do tempo de resposta normal de uma requisição.

```
import requests


try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
finally:
    print(response.status_code)
```

# Analisando respostas

Para realizar a extração de dados de um conteúdo web utilizando a biblioteca parsel:

Instalando: `python3 -m pip install parsel`

Site para treinamento de raspagem: `http://books.toscrape.com/`

Criando um buscador de informações:
```
from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector)
```

O seletor principal que contém todo o conteúdo da página pode ser utilizado em uma busca para encontrar seletores mais específicos. Podemos fazer isto utilizando a função css. Ela recebe um seletor CSS como parâmetro, embora podemos passar um tipo especial de seletor quando queremos algum valor bem específico como o texto ou um atributo.
Usamos a função get para buscar o primeiro seletor ou getall para todos os valores.

Assim como a função css que faz a busca por seletores [CSS](https://devhints.io/css), também temos a função [xpath](https://devhints.io/xpath), que faz a busca com base em Xpath.

# Recursos paginados

Temos 20 livros por página, sabemos que o site possue 1000 livros, para varrermos todas páginas evitando requisições desnecessárias buscando a próxima página:

```
# ...
# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print(title, price)

# Existe uma classe next, que podemos recuperar a url através do seu elemento âncora
next_page_url = selector.css(".next a::attr(href)").get()
print(next_page_url)
```

Para seguirmos para proxima página, o hyperlink usa a classe next, vamos usa-la para avançar as páginas e capturar todo conteudo até não haver mais um hyperlink de next.

```
from parsel import Selector
import requests


# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        print(title, price)
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()
```

# Recursos obtidos à partir de outro recurso

Se fossemos coletar a descrição de cada livro, que só pode ser acessada navegando até a página específica do livro:

1. Primeiro passo é investigar como descobrir a URl que nos leva até a página de detalhes de um produto.
Recuperamos o atributo href que contém o link para página de detalhes.
```
from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

# Vamos testar com a primeira página
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

# Recupera o atributo href do primeiro elemento que combine com o seletor
href = selector.css(".product_pod h3 a::attr(href)").get()
print(href)

# Para obter a url completa, basta adicionar a nossa URL_BASE
print(URL_BASE + href)
```

2. Seguindo acessando a página de detalhes do produto, e inspecionando a descrição do produto.

3. A descrição do produto está com uma tag `p`, "irmã" de uma tag com id `product_description`. Isto pode ser expresso através do seletor `a`.

É necessário fazer uma nova requisição à página de detalhes e depois analisar seu conteúdo em busca da descrição.
```
from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

href = selector.css(".product_pod h3 a::attr(href)").get()
detail_page_url = URL_BASE + href

# baixa o conteúdo da página de detalhes
detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

# recupera a descrição do produto
# ~ significa a tag irmã
description = detail_selector.css("#product_description ~ p::text").get()
print(description)
```

4. Adicionando a lógica para buscar a descrição no codigo original:
```
# from parsel import Selector
# import requests


# URL_BASE = "http://books.toscrape.com/catalogue/"
# Define a primeira página como próxima a ter seu conteúdo recuperado
# next_page_url = 'page-1.html'
while next_page_url:
    # Busca o conteúdo da próxima página
    # response = requests.get(URL_BASE + next_page_url)
    # selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        # Busca e extrai o título e  o preço
        # title = product.css("h3 a::attr(title)").get()
        # price = product.css(".price_color::text").get()
        # print(title, price)

        # Busca o detalhe de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        description = detail_selector.css("#product_description ~ p::text").get()
        print(description)

    # Descobre qual é a próxima página
    # next_page_url = selector.css(".next a::attr(href)").get()
```

# Limpeza de dados

Quando extraindo dados podem haver sujeitas ao meio da informação coletada, exmeplo, no preço aparece como `Â£26.08` ou na parte de descrição que possui um sufixo `...more`.

É possivel utilizar uma expressão regular para remover os caracteres desnecessários. O padrão é conter um símbolo de libra, seguido por números, ponto para casas decimais e dois números como casas decimais. Usando o seguinte regex `£\d+\.\d{2}`.

Para usar a expressão, pode-se substituir o método `getall` pelo método `re`, ou `get` por `re_first`. Esses metodos além de recuperar os valores aplicarão a expressão.

Exemplo:
```
from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# Extrai todos os preços da primeira página
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)
```

Para o sufixo, poderia-se usar fatiamento. Verificando se existe o sufixo para evitar perda de contéudo.

Exemplo:
```
from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html")
selector = Selector(text=response.text)

# Extrai a descrição
description = selector.css("#product_description ~ p::text").get()
print(description)

# "Fatiamos" a descrição removendo o sufixo
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
print(description)
```

Outros exemplos de "sujeiras" são valores que contém tabulação, quebras de linha ou conteúdo além do esperado.

# Fatiamento

Estruturas de dados do tipo sequência, como listas, tuplas e strings, podem ter seus elementos acessados atráves de um índice.

Podemos também definior dois índices que serão o valor inicial e final([inicio:fim]) de uma subsequência da estrutura. Ou três valores, sendo o último o tamanho do passo que daremos ao percorrer a subsequência([inicio:fim:passo]).

# Banco de Dados

Com os dados coletados, precisamos armazenar em um banco. Usando o MongoDB com a biblioteca pular pymongo.

Instalando: `python3 -m pip install pymongo`

Criando conexão:
```
from pymongo import MongoClient

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")
client = MongoClient()
```

Após estabelecida a conexão pode-se acessar o banco e posteriormente um coleção:

```
from pymongo import MongoClient

client = MongoClient()
# o banco de dados catalogue será criado se não existir
db = client.catalogue
# a coleção books será criada se não existir
students = db.books
client.close()  # fecha a conexão com o banco de dados
```

Adicionando documentos à coleção(`inserted_id`):
```
from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
# book representa um dado obtido na raspagem
book = {
    "title": "A Light in the Attic",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)
client.close()  # fecha a conexão com o banco de dados
```

Um _id é gerado e retornado ao inserir um documento na coleção. Também é possivel inserir multiplos documentos:
```
from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
documents = [
    {
        "title": "A Light in the Attic",
    },
    {
        "title": "Tipping the Velvet",
    },
    {
        "title": "Soumission",
    },
]
db.books.insert_many(documents)
client.close()  # fecha a conexão com o banco de dados
```

Podem ser realizadas buscas usando os métodos `find` ou `find_one`:
```
from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
# busca um documento da coleção, sem filtros
print(db.books.find_one())
# busca utilizando filtros
for book in db.books.find({"title": {"$regex": "t"}}):
    print(book["title"])
client.close()  # fecha a conexão com o banco de dados
```

O cliente é um gerenciador de contexto (with), para evitar problemas com fechamento de conexão com o banco dados:
```
from pymongo import MongoClient


with MongoClient() as client:
    db = client.catalogue
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
```

