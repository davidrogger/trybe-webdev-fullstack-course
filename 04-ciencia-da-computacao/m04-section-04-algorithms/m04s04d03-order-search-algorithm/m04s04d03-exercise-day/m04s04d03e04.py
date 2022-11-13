from Cronometro import Cronometro
from bubble_sort import bubble_sort
from merge_sort import merge_sort
from random import shuffle

# Exercício 4 Compare o tempo de execução do algoritmo
# merge_sort e bubble_sort para uma entrada de 10.000
# valores aleatórios. Explique através de análise de
# complexidade o que ocorre.

# Bubble O(n²) Quanto maior a lista maior a quantidade de
# iterações realizadas no bubble, por sempre ter que
# percorrer todo o array 2 vezes, para realizar a comparação dos numeros

# Merge O(n log n) Ao quebrar a lista em pequenas iterações sem repetir
# a lista completa mais de 1 vez, somente fragmentos

size = 10000

numbers = list(range(size))

random_numbers1 = numbers[:]
shuffle(random_numbers1)
random_numbers2 = random_numbers1[:]


with Cronometro("Bubble Sort"):
    bubble_sort(random_numbers1)

with Cronometro("Merge Sort"):
    merge_sort(random_numbers2)
