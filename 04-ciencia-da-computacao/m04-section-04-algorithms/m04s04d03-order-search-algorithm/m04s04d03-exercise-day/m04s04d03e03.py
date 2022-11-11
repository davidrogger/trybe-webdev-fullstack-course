# Exercício 3 Execute os algoritmos de ordenação por seleção e
# inserção, para as entradas de dados ordenadas, inversamente
# ordenadas e aleatórias. Em seguida, compare-os. Faça testes
# para entradas de tamanho 10.000, 100.000, 1.000.000.

# ▶️ A entrada de dados pode ser gerada da seguinte maneira:
from random import shuffle

ordenados = list(range(100))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles
