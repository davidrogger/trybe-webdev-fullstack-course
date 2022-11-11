from random import shuffle
from Cronometro import Cronometro

from selection_sort import selection_sort

# Exercício 3 Execute os algoritmos de ordenação por seleção e
# inserção, para as entradas de dados ordenadas, inversamente
# ordenadas e aleatórias. Em seguida, compare-os. Faça testes
# para entradas de tamanho 10.000, 100.000, 1.000.000.

# ▶️ A entrada de dados pode ser gerada da seguinte maneira:

list_size = 10000

ordenados = list(range(list_size))
inversamente_ordenados = list(reversed(range(list_size)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


select_operations = [
    {
        "type": "Seleção Ordenada",
        "list": ordenados,
        "method": selection_sort,
    },
    {
        "type": "Seleção Inversamente Ordenada",
        "list": inversamente_ordenados,
        "method": selection_sort,
    },
    {
        "type": "Seleção Aleatória",
        "list": aleatorios,
        "method": selection_sort,
    },
]


for operation in select_operations:
    name = operation["type"]
    with Cronometro(f"{name}"):
        method_order = operation["method"]
        elements = operation["list"]
        method_order(elements)
