# Exercício 4: Com o Beautiful Soup, faça a extração
# de todos os links da página
# “https://pt.wikipedia.org/wiki/Rock_in_Rio”

from bs4 import BeautifulSoup
import requests

response = requests.get("https://pt.wikipedia.org/wiki/Rock_in_Rio")
html_content = response.text

soup_format = BeautifulSoup(html_content, "html.parser")

links = soup_format.find_all("a", href=True)

for link in links:
    link_path = link["href"]
    print(f"link: {link_path}")
