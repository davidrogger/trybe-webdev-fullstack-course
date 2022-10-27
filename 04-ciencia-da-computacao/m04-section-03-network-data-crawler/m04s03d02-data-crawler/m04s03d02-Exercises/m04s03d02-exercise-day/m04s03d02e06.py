# Exercício 6: Escreva um programa que se conecte ao banco de dados
# library e liste os livros da coleção books para uma determinada
# categoria recebida por uma pessoa usuária. Somente o título dos
# livros deve ser exibido.

# docker run --name mongodb -d -p 27017:27017 mongo
# docker cp books.json mongodb:/tmp/books.json
# docker exec mongodb mongoimport -d library -c books --file /tmp/books.json

from pymongo import MongoClient


def get_title_by(category):
    with MongoClient() as client:
        db = client.library
        book_titles = [
            book["title"]
            for book in db.books.find()
            if category in book["categories"]
        ]

    return book_titles
