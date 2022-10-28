# Exercício 8: Agora um desafio! Vá ao site
# https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags
# e recupere as imagens de todas as bandeiras.
import requests
from parsel import Selector

response = requests.get(
    "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
)
selected = Selector(response.text)

flags = selected.css(".thumb img::attr(src)").getall()

print(flags)
