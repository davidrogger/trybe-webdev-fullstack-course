# Exercício 7: Utilize o dicionário criado no exercício 5.
# Para as chaves ímpares, não queremos mais mapear para o seu
# dobro, mas sim para o seu triplo. Consulte o método keys() e
# atualize o seu dicionário para a nova regra.


def create_dict_value():
    odd_triple = {}
    for value in range(3, 21):
        if value % 2 != 0:
            calc_number = 3
        else:
            calc_number = 2
        odd_triple[value] = value * calc_number

    return odd_triple


if __name__ == "__main__":
    print(create_dict_value())
