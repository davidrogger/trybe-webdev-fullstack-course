import json
import random


def get_pokemons():
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]
    pokemons_name = []
    for pokemon in pokemons:
        if pokemon["name"] not in pokemons_name:
            pokemons_name.append(pokemon["name"])
    return pokemons_name


def pokemon_guess():
    pokemons = get_pokemons()
    pokemon_choicen_name = random.choice(pokemons)

    counter = 0
    hit = False
    while counter < len(pokemon_choicen_name) and not hit:
        if counter > 0:
            print(f"Tip: {pokemon_choicen_name[:counter]}")
        answer = input("What is the pokemon name?: ")
        if answer == pokemon_choicen_name:
            hit = True
        else:
            print("It wans't this time, try again!")
            counter += 1
    if hit:
        print("Congratulation your right!!")
    else:
        print(f"The name was: {pokemon_choicen_name}")
        print("Next time is better to buy a pokedex!")


pokemon_guess()
