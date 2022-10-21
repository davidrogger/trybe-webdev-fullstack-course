# 🚀 Exercício 2:
# Calcule a média aritmética dos valores contidos em uma lista.


def arithmetic_average(numbers_list):
    total = 0
    for number in numbers_list:
        total += number
    return total / len(numbers_list)


print(arithmetic_average([10, 5]))
