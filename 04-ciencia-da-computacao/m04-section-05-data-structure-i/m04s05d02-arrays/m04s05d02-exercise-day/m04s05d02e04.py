# Exercício 4 Você têm dois arrays de números inteiros que representam:
# (I) instantes de entrada e saídas em uma biblioteca
# (II) um número que represente um instante a ser buscado.
# Retorne quantas pessoas estudantes estão na biblioteca
# naquele instante. Considere que todo estudante que entrou
# e saiu da biblioteca.

# entradas = [1, 2, 3]
# saídas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def how_many_studants(entries, departures, target):
    studants_found = 0
    studant_quantity = len(entries)

    for index in range(studant_quantity):
        entry, leave = entries[index], departures[index]

        if entry < target < leave:
            studants_found += 1

    return studants_found


if __name__ == "__main__":
    entries = [1, 2, 3]
    departures = [3, 2, 7]
    target = 4
    assert how_many_studants(entries, departures, target) == 1
    # Faça a análise de complexidade da sua solução.
    # Percorrer a lista apenas uma vez a lista de entrada como base
    # tornando a complexidade Linear O(n)
