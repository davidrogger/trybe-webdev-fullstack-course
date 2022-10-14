import json

# load carrega o JSON a partir de um arquivo.
with open("10-pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])  # imprime o primeiro pokemon da lista
