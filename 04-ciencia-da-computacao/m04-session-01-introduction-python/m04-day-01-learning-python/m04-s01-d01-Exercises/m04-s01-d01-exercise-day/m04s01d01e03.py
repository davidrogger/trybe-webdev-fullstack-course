# Exercício 3:
# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def print_asteristic_square(size):
    for row in range(size):
        print(size * '*')


print_asteristic_square(5)
