# Exercício 5: Consulte a forma de se criar um dicionário chamado
# de dict comprehension e crie um dicionário que mapeia inteiros
# de 3 a 20 para o seu dobro.
# Exemplo
# - 3 deve ser mapeado para 6;

# - 10 deve ser mapeado para 20.


def create_dict_value():
    return {value: value * 2 for value in range(3, 21)}


if __name__ == "__main__":
    print(create_dict_value())
