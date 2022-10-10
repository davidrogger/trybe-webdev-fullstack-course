# Exercício 5: Considere que a cobertura da tinta é de 1 litro para
# cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores em
# uma tupla contendo a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede (em m²).

# 1L para 3M² de tinta
# R$ 80 para 18L
# def wall_size(3) return (1, 80)

import math


def wall_size(size):
    can_price = 80
    can_yield = 3 * 18
    cans_needed = math.ceil(size / can_yield)
    total_price = cans_needed * can_price

    return (cans_needed, total_price)


print(wall_size(55))
