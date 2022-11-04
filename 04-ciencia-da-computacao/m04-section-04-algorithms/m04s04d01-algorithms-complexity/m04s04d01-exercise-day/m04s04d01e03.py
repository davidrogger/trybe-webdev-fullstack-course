# 🚀 Exercício 3 Utilize o módulo random da linguagem Python
# para gerar um array com 100 números. Cada um desses números
# deve ser a média de n números gerados aleatoriamente.
# Qual é a ordem de complexidade de tempo e de espaço deste programa?

from random import randrange


def list_of_random_numbers(n):
    numbers = list()
    for _ in range(0, 100):
        average = 0
        for _ in range(n):
            average = randrange(1, n)
        average = average / n
        numbers.append(average)
    return numbers


# Complexidade de Tempo 0(n)
# Complexidade de Espaço 0(1)
