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