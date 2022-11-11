from random import shuffle
from Cronometro import Cronometro

from selection_sort import selection_sort
from insertion_sort import insertion_sort

# Exercício 3 Execute os algoritmos de ordenação por seleção e
# inserção, para as entradas de dados ordenadas, inversamente
# ordenadas e aleatórias. Em seguida, compare-os. Faça testes
# para entradas de tamanho 10.000, 100.000, 1.000.000.

# ▶️ A entrada de dados pode ser gerada da seguinte maneira:

list_size = 20000

ordenados = list(range(list_size))
inversamente_ordenados = list(reversed(range(list_size)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles


select_operations = [
    {
        "type": "Seleção Ordenada",
        "list": ordenados,
    },
    {
        "type": "Seleção Inversamente Ordenada",
        "list": inversamente_ordenados,
    },
    {
        "type": "Seleção Aleatória",
        "list": aleatorios,
    },
]


insertion_operations = [
    {
        "type": "Inserção Ordenada",
        "list": ordenados,
    },
    {
        "type": "Inserção Inversamente Ordenada",
        "list": inversamente_ordenados,
    },
    {
        "type": "Inserção Aleatória",
        "list": aleatorios,
    },
]


for operation in select_operations:
    name = operation["type"]
    with Cronometro(f"{name}"):
        elements = operation["list"]
        selection_sort(elements)
    print("\n")

for operation in insertion_operations:
    name = operation["type"]
    with Cronometro(f"{name}"):
        elements = operation["list"]
        insertion_sort(elements)
    print("\n")
