# Exercício 2:
# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:

# n = 5

# *
# **
# ***
# ****
# *****


def create_triangle_rectangle(size):
    for number in range(size):
        print((number + 1) * '*')


create_triangle_rectangle(5)
