from Cronometro import Cronometro
from bubble_sort import bubble_sort
from merge_sort import merge_sort
from random import shuffle

# Exercício 4 Compare o tempo de execução do algoritmo
# merge_sort e bubble_sort para uma entrada de 10.000
# valores aleatórios. Explique através de análise de
# complexidade o que ocorre.

# Bubble O(n²)
# Merge O(n log n)

size = 20000

numbers = list(range(size))

random_numbers1 = numbers[:]
shuffle(random_numbers1)
random_numbers2 = random_numbers1[:]


with Cronometro("Bubble Sort"):
    bubble_sort(random_numbers1)

with Cronometro("Merge Sort"):
    merge_sort(random_numbers2)
