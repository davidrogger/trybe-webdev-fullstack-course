# Selenium

É um conjunto de ferramentas para automação de navegadores da web, que permite controlar remotamente instâncias de navegadores e emular a interação de um usuário com o navegador.

Devido ao WebDriver que se encontra no núcleo do Selenium que ele suporta a automação dos principais navegadores do mercado definindo uma interface para controlar o comportamento dos navegadores web.

Cada navegador possui uma implementação específica do WebDriver, chamada de driver, que é o componente responsável por delegar e manipular a comunicação entre o Selenium e o navegador.

Para o uso do Selenium é preciso instalar as bibliotecas de acordo com a linguagem que será utilizada, além do navegador que será usado juntamente com o driver correspondente.

Em casos de single Page applications(react), só após uma requisição para a página é que o conteúdo será montado e as informações estarão disponíveis para serem consultadas. Simulando um acesso de uma pessoa real ao site, o Selenium pode evitar que o resultado da consulta volte vazio nesses casos.

O selenium cria uma instância de uma pessoa acessando o site pelo nevador normalmente, e somente após o site terminar de carregar é que o scrape é feito.

# Instalação do Selenium

Pode-se usa-lo diretamente na máquina ou por meio de um container Docker.

## Docker

Imagem usada é selenium/standalone-firefox:
```
docker pull selenium/standalone-firefox:4.3.0-20220706
```

Na seção de Using your browser (no VNC client is needed), que permite inspeção visual da atividade do container através do navegador é recomendando o seguinte comando:
```
docker run -d -p 4444:4444 -p 7900:7900 --shm-size 2g --name firefox selenium/standalone-firefox:4.3.0-20220706
```

Significado das flags:
- `-d`: serve para rodar o container em segundo plano
- `-p`: vincula uma porta do SO a outra prota dentro do container
- `--shm-size`: aumenta o limite de quantidade de memória compartilhada com o container
- `--name`: define um nome para o container
- `--platform`: diz ao docker qual a plataforma deve ser usada (processadors m1 devem ter essa flag)

Acessando o navegador FireFox na porta 7900, poderemos conferir se o container está rodando corretamente. Conforme a documentação, será necessário apenas utilizar a senha `secret` para ter acesso ao container.

## Instalação Local
```
python3 pip install selenium || pip3 install selenium==4.2.0
```

Para usar a ferramenta é necessário também instalar o [driver](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/) do browser.

É essencial que tanto o driver quando o navegador estejam no path. **

Nas distros linux e no macos, deve-se extrair o arquivo baixado e movê-lo para o diretório '/usr/bin'. Para isso, abra no terminal o diretório onde está o arquivo recém baixado e utilize o comando:
```
sudo mv geckodriver /usr/bin
```

Em ambiente virtual o diretório bin do ambiente é adicionado ao path automaticamente, então pode-se mover o binário para lá:
```
mv geckodriver .venv/bin
```

# Primeiros passos com o Selenium

# local:
```
# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox()

# requisições para essa instância criada utilizando o método `get`
response = firefox.get("https://www.python.org/")
```

# docker:

Com ele é necessário passar o método remote para vincular nosso arquivo de código ao container rodando na porta 7900:
```
# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver

options = webdriver.FirefoxOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--start-maximized')

firefox = webdriver.Remote(command_executor="http://localhost:4444/wd/hub", options=options)

# requisições para essa instância criada utilizando o método `get`
response = firefox.get("https://www.python.org/")

```

Usando o código acima, será aberto um navegador no site solicitado com um ícone na barra de endereço.

Caso esteja usando o selenium com Docker, todas as ações executadas serão vistas na janela do Firefox no endereço `http://localhost:7900`

#

O selenium tem vários métodos públicos, find_element_by_tag_name e dois privados que precisam ser importados através do módulo By: o find_element e o find_elements, para localizar o primeiro elemento correspondente e todos os elementos que se encaixarem na busca.

O By é usado para especificar o elemento CSS que será buscado e requer dois parâmetros: o primeiro define pelo que você irá buscar e o segundo o filtro da pesquisa.

```
from selenium import webdriver

# Importa o By
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

firefox.get("https://books.toscrape.com/")


# Define a função que fará o scrape da URL recebida
def scrape(url):
    firefox.get(url)

    # Itera entre os elementos com essa classe
    for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
        # Cria dict vazio para guardar os elementos capturados
        new_item = {}

        # Cria uma chave 'title' no dict que vai receber o resultado da busca
        # O título está em uma tag anchor que está dentro de uma tag 'H3'
        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        # O trecho do book está em um elemento da classe 'entry-excerpt'
        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        # O link está dentro de um atributo 'href'
        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        print(new_item)


scrape("https://books.toscrape.com/")
```

Acima foi usado o método get_attribute pois o Selenium retorna depois da busca o atributo CSS e não texto. Para realizar essa conversão é utilizado juntamente com o atributo "innerHTML" ou "href".

Também foi utilizado o método find_element encadeado para procurar um elemento dentro de outro elemento.

Agora coletando informação de todas as páginas do site.

1. Primeiro é organizado o código e determinado que o retorno da função scrape salve o resultado da raspagem em uma lista.
2. Cria uma nova lista para abrigar os dados de uma página;
3. Acessa o botão para ir para a próxima página e lá refazer o processo de salvar todas as informações solicitadas, repetindo até não existir mais o botão de proximo.

```
# from selenium import webdriver

# from selenium.webdriver.common.by import By


# firefox = webdriver.Firefox()


# def scrape(url):
#     firefox.get(url)

    books = []

#     for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
#         new_item = {}

#         new_item["title"] = (
#             book.find_element(By.TAG_NAME, "h3")
#             .find_element(By.TAG_NAME, "a")
#             .get_attribute("innerHTML")
#         )

#         new_item["price"] = book.find_element(
#             By.CLASS_NAME, "price_color"
#         ).get_attribute("innerHTML")

#         new_item["link"] = (
#             book.find_element(By.CLASS_NAME, "image_container")
#             .find_element(By.TAG_NAME, "a")
#             .get_attribute("href")
#         )

        books.append(new_item)
    return books

firefox.get("https://books.toscrape.com/")

all_books = []
url2request = "https://books.toscrape.com/"

# Cria uma variável com o seletor que captura o link do botão de passar para
# a próxima página
next_page_link = (
    firefox.find_element(By.CLASS_NAME, "next")
    .get_attribute("innerHTML")
)

# Enquanto este botão de 'next' existir na página ele irá iterar
while next_page_link:

    # Usa o método extend para colocar todos os elementos de uma lista dentro
    # de outra
    all_books.extend(scrape(url2request))
    url2request = (
        firefox.find_element(By.CLASS_NAME, "next")
        .find_element(By.TAG_NAME, "a")
        .get_attribute("href")
    )

print(all_books)
```

Para não visualizarmos a navegação basta adicionar alguns parametros no options, importando do webdriver:

```
from selenium import webdriver
# Importa a classe 'Options' do browser
from selenium.webdriver.firefox.options import Options


firefox = webdriver.Firefox()

# Instancia um objeto da classe 'Options'
options = Options()
# Adiciona um argumento passando o parâmetro '--headless'
options.add_argument('--headless')

# Define que a instância do navegador deve usar as options definidas
firefox = webdriver.Firefox(options=options)

# firefox.get('https://books.toscrape.com/')

# ...

```

Mais configuração para o [options](https://www.selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/Firefox/Options.html) usando firefox.

# Beatiful Soup

É uma biblioteca para extrair dados de arquivos HTML e XML, fornece de maneira mais simples de navegar, pesquisar e modificar a árvore de análise.

## Primeiros passos

Primeiramente realizando requests para usar o soup:

```
import requests

url = "https://quotes.toscrape.com"
page = requests.get(url)
print(page.content)

```

# Instalando a biblioteca

`pip3 install beautifulsoup==4.11.1 resquests==2.27.1`


Começando a explorar as funcionalidades:
```
# import requests
from bs4 import BeautifulSoup

# url = "https://quotes.toscrape.com"
# page = requests.get(url)
html_content = page.text

# Cria uma instância do objeto Beautiful Soup e usa o parser de HTML nativo
# do Python
soup = BeautifulSoup(html_content, "html.parser")

# Utiliza o método prettify para melhorar a visualização do conteúdo
print(soup.prettify())

```

# Tipos de objetos do Beautiful Soup

O Beautiful Soup transforma um documento HTML complexo em uma árvore de objetos Python. Os quatro tipos de objetos que podemos lidar são `Tag`, `NavigableString`, `BeautifulSoup` e `Comment`.
[Documentação oficial desse objetos](https://www.crummy.com/software/BeautifulSoup/bs4/doc.ptbr/#tipos-de-objetos)

# Tag

Corresponde a uma tag XML ou HTML. Toda tag possui um nome acessível através de .name. Quando vemos <header>, ele é um elemento do tipo tag e o nome dessa tag é header.

As tags também podem ter atributos, como classes, ids, etc. Esses atributos são acessíveis considerando tag como um dicionário e como podem receber múltiplos valores, são apresentados em forma de lista.

```
# import requests
# from bs4 import BeautifulSoup

# url = "https://quotes.toscrape.com"
# page = requests.get(url)
# html_content = page.text

# soup = BeautifulSoup(html_content, "html.parser")


# acessando a tag 'title'
title = soup.title

# retorna o elemento HTML da tag
print(title)

# o tipo de 'title' é tag
print(type(title))

# o nome de 'title' é title
print(title.name)

# acessando a tag 'footer'
footer = soup.footer

# acessando o atributo classe da tag footer
print(footer['class'])

```

# NavigableString

Uma string corresponde a um texto dentro de uma tag e esse texto fica armazenado na classe NavigableString.

```
# import requests
# from bs4 import BeautifulSoup

# url = "https://quotes.toscrape.com"
# page = requests.get(url)
# html_content = page.text

# soup = BeautifulSoup(html_content, "html.parser")

# title = soup.title
# footer = soup.footer

# retorna o elemento HTML da tag
print(title)

# Acessando a string de uma tag
print(title.string)

# Verificando o tipo dessa string
print(type(title.string))

```

# Buscando na árvore

O Beautiful também possui dois métodos principais para encontrar elementos. Eles são o find() e find_all().
Há várias possibilidades de filtros a serem utilizados dentro dos métodos, de strings e regex, até funções. [documentção](https://www.crummy.com/software/BeautifulSoup/bs4/doc.ptbr/#buscando-na-arvore)

Existem algumas informações que são bem comuns de querermos extrair, como os valores das ocorrências de determinada tag, de um atributo ou mesmo todo o texto da página.
```
# import requests
# from bs4 import BeautifulSoup

# url = "https://quotes.toscrape.com"
# page = requests.get(url)
# html_content = page.text

# soup = BeautifulSoup(html_content, "html.parser")

# Imprime todas as ocorrências da tag "p" da página ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("p"))

# Imprime o elemento com o id especificado ou "None",
# caso nenhum elemento corresponda a pesquisa
print(soup.find(id="quote"))

# Imprime todo o texto da página
print(soup.get_text())

# Imprime todas as "divs" que possuam a classe "quote" ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("div", {"class": "quote"}))
```

Por de baixo dos panos, soup.find_all("p") e soup.find_all(name="p") são a mesma coisa, da mesma forma que soup.find(id="quote") é o mesmo que soup.find(attrs={"id": "quote"}). Isso se deve ao fato de argumentos nomeados diferentes de name, attrs, recursive, string e limit serem todos colocados no dicionário dentro do parâmetro attrs.

Fazendo scraping no site da tecmundo:
```
import requests
from bs4 import BeautifulSoup


# Acessa uma URL e retorna um objeto do Beautiful Soup
def get_html_soup(url):
    page = requests.get(url)
    html_page = page.text

    soup = BeautifulSoup(html_page, "html.parser")
    soup.prettify()
    return soup


# Recebe um objeto soup e retorna informações das notícias de uma página
def get_page_news(soup):

    # Define uma lista vazia a ser populada com os dados do scraping
    news = []

    # Percorre todos os elementos da tag 'article' com a classe especificada
    for post in soup.find_all(
        "article", {"class": "tec--card tec--card--medium"}
    ):

        # Cria um dicionário para guardar os elementos a cada iteração
        item = {}

        # Cria um item chamado tag no dicionário para guardar a tag do post
        # Primeiro pesquisa pela div com a classe específica
        # Depois pela tag 'a' dentro dos resultados do primeiro filtro
        # Por fim, traz o resultado da string dentro da tag a
        item["tag"] = post.find("div", {"class": "tec--card__info"}).a.string

        # Mesma lógica da busca anterior
        item["title"] = post.find("h3", {"class": "tec--card__title"}).a.string

        # Parecido com o que foi feito anteriormente, mas dessa vez pega
        # o atributo 'href' dentro da tag 'a'
        item["link"] = post.find("h3", {"class": "tec--card__title"}).a["href"]

        # Mesma lógica da primeira busca, mas trazendo a string dentro da 'div'
        # direto
        item["date"] = post.find(
            "div", {"class": "tec--timestamp__item z--font-semibold"}
        ).string

        # Mesma lógica da busca anterior
        item["time"] = post.find(
            "div", {"class": "z--truncate z-flex-1"}
        ).string

        # Adiciona os itens criado no dicionário à lista 'news'
        news.append(item)

    return news


print(get_page_news(get_html_soup("https://www.tecmundo.com.br/novidades")))

```

Extraindo as notíficas do site:
```
# import requests
# from bs4 import BeautifulSoup


# # Acessa uma URL e retorna um objeto do Beautiful Soup
# def get_html_soup(url):
#     page = requests.get(url)
#     html_page = page.text

#     soup = BeautifulSoup(html_page, "html.parser")
#     soup.prettify()
#     return soup


# # Recebe um objeto soup e retorna informações das notícias de uma página
# def get_page_news(soup):

#     news = []

#     for post in soup.find_all(
#         "article", {"class": "tec--card tec--card--medium"}
#     ):

#         item = {}

#         item["tag"] = post.find("div", {"class": "tec--card__info"}).a.string

#         item["title"] = post.find("h3", {"class": "tec--card__title"}).a.string

#         item["link"] = post.find("h3", {"class": "tec--card__title"}).a["href"]

#         item["date"] = post.find(
#             "div", {"class": "tec--timestamp__item z--font-semibold"}
#         ).string

#         item["time"] = post.find(
#             "div", {"class": "z--truncate z-flex-1"}
#         ).string

#         news.append(item)

#     return news


# Recebe um objeto soup e retorna o link que redireciona
# para a página seguinte, caso ele exista
def get_next_page(soup_page):
    try:

        # Busca pela tag 'a' com as classes específicas do link desejado
        return soup_page.find(
            "a",
            {"class": "tec--btn"},
        )["href"]
    except TypeError:
        return None


# Recebe uma URL e retorna uma lista com todas as notícias do site
def scrape_all(url):
    all_news = []

    # Enquanto a pesquisa pelo link que vai para a página seguinte existir
    while get_next_page(get_html_soup(url)) is not None:

        # Imprime a URL da página seguinte
        print(get_next_page(get_html_soup(url)))

        # Adiciona os elementos da lista com as notícias de cada
        # página na lista 'all_news'
        all_news.extend(get_page_news(get_html_soup(url)))

        # define a página seguinte como URL para a próxima iteração
        url = get_next_page(get_html_soup(url))

    return all_news


# Vamos começar perto das últimas páginas pra não ter que fazer a requisição
# do site inteiro
print(scrape_all("https://www.tecmundo.com.br/novidades?page=11030"))

```
