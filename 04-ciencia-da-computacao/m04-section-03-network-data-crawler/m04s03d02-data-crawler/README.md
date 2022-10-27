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