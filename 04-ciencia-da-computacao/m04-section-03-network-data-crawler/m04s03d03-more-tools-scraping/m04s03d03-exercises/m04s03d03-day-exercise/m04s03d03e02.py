# Exercício 2: Imprima todos os parágrafos da página
# “https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-
# veja-melhores-albuns-1982/“.

from docker_selenium import firefox
from selenium.webdriver.common.by import By

url = "https://www.wikimetal.com.br/"
endpoint = "iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"

firefox.get(url + endpoint)

paragraphs = firefox.find_elements(By.TAG_NAME, "p")

for paragraph in paragraphs:
    text = paragraph.get_attribute("innerHTML")
    print(f"{text}\n")
