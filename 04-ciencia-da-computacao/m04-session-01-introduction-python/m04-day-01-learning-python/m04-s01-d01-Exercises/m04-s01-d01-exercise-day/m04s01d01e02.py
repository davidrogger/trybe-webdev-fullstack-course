# 🚀 Exercício 2:
# Calcule a média aritmética dos valores contidos em uma lista.


def arithmeticAverage(numbersList):
    total = 0
    for number in numbersList:
        total += number
    return total / len(numbersList)


print(arithmeticAverage([10, 5]))
