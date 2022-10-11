# Exercício 3:
# Crie uma função que receba um número inteiro N
# e retorne o somatório de todos os números de 1 até N.
# Por exemplo, para N = 5, o valor esperado será 15.


def sum_until(number):
    total = 0
    for sum in range(number):
        total += sum + 1
    return total


print(sum_until(5))
