# Exercício 1: Faça um programa que receba um nome e imprima o
# mesmo na vertical em escada invertida. Exemplo:


def name_piramide(name: str):
    name_length = len(name)
    for index in range(0, name_length):
        print(name[:name_length - index])


name_piramide("David")


# https://www.digitalocean.com/community/tutorials/how-to-index-and-slice-strings-in-python-3
