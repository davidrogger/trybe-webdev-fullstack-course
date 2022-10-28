# Exercício 9: Alguns sites possuem paginação feita através de
# rolagem infinita. Descubra como funciona a rolagem infinita e
# extraia todas as citações do seguinte site:
# http://quotes.toscrape.com/scroll.
# scrapy runspider filename.py

import requests

url = "http://quotes.toscrape.com/api/quotes?page={}"

has_next = True
page = 1
quote_counter = 0

while has_next:
    response = requests.get(url.format(page))
    parsed_data = response.json()

    for quote in parsed_data["quotes"]:
        print(quote["text"])
        quote_counter += 1

    has_next = parsed_data["has_next"]
    page = parsed_data["page"] + 1

print(quote_counter)
