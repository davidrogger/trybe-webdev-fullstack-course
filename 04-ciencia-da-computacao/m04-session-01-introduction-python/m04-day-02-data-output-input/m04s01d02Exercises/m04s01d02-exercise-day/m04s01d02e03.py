# Exercício 3: Modifique o exercício anterior para que as
# palavras sejam lidas de um arquivo. Considere que o arquivo
# terá cada palavra em uma linha.
from m04s01d02e02 import guess_name


with open("m04s01d02e03.txt") as file:
    names = file.read().split("\n")


guess_name(names)
