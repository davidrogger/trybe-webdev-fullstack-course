# 🚀 Exercício 4:
# Baseando-se em uma página contendo detalhes sobre um livro
# (http://books.toscrape.com/catalogue/the-grand-design_405/index.html),
# faça a extração dos campos título, preço, descrição e url contendo a imagem
# de capa do livro.

# ⚠️ O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76.
# ⚠️ A descrição de ter o sufixo “...more" removido quando existir.
# ⚠️ Os campos extraídos devem ser apresentados separados por vírgula.
# Ex: título,preço,descrição,capa.

# Exemplo:
# The Grand Design,13.76,THE FIRST MAJOR WORK IN NEARLY A
# DECADE BY ONE OF THE WORLDâS GREAT THINKERSâA MARVELOUSLY
# CONCISE BOOK WITH NEW ANSWERS TO THE ULTIMATE QUESTIONS OF
# LIFEWhen and howdid the universe begin? Why are we here?
# Why is there something rather than nothing? What is the nature
# of reality? Why are the ...., http://books.toscrape.com/catalogue/../../
# media/cache/9b/69/9b696c2064d6ee387774b6121bb4be91.jpg
import requests
from parsel import Selector

url = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"

response = requests.get(url)
selected = Selector(response.text)

title: str = selected.css("h1::text").get()
price: str = selected.css(".price_color::text").re_first(r"£\d+\.\d{2}")
product_detail: str = selected.css("#product_description ~ p::text").get()
book_cover_img = selected.css(".item img::attr(src)").get()
available_stock = selected.css(".availability").re_first(r"\d")

if product_detail.endswith("...more"):
    product_detail = product_detail[: -len("...more")]

print(
    ", ".join([title, price, product_detail, book_cover_img, available_stock])
)
