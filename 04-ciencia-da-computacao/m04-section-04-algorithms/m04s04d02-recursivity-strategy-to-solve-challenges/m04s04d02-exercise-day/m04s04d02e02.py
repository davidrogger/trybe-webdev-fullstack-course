# 🚀 Exercício 2: Transforme o algoritmo criado acima em recursivo.


def recursive_even_number_counter(n):
    if n == 0:
        return 0
    else:
        count = 0
        if n % 2 == 0:
            count += 1
        return count + recursive_even_number_counter(n - 1)
