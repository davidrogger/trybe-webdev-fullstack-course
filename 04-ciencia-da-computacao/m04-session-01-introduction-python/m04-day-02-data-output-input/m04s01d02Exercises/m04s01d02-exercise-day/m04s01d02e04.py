# 🚀 Exercício 4: Dado o seguinte arquivo no formato JSON,
# leia seu conteúdo e calcule a porcentagem de livros em cada
# categoria em relação ao número total de livros. O resultado
# deve ser escrito em um arquivo no formato CSV como o exemplo abaixo.

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

import json
import csv


def get_books():
    with open("books.json") as file:
        books_list = file.readlines()
        # loads não consegue converter mais de uma linha, então é necessário
        # converter linha por linha.
        books = [json.loads(book) for book in books_list]
    return books


def categories_counter(books):
    categories_counted = {}
    for book in books:
        for category in book["categories"]:
            if len(category) > 0:
                if category not in categories_counted:
                    categories_counted[category] = 0
                categories_counted[category] += 1
    return categories_counted


def create_csv_books(books_percent):
    with open("books_percent.csv", "w") as new_file:
        writer = csv.writer(new_file)

        headers = ["categories", "percent"]

        writer.writerow(headers)

        for category, percent in books_percent.items():
            row = [category, percent]
            writer.writerow(row)


def get_books_categories_percent(books):
    categories_counted = categories_counter(books)
    categories_percent = {}

    total_books = len(books)

    for category, quantity in categories_counted.items():
        percent = (quantity * 100) / total_books
        categories_percent[category] = percent

    return categories_percent


books = get_books()
books_percent = get_books_categories_percent(books)
create_csv_books(books_percent)
