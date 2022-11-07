# Exercício de fixação:
# Exercício: Faça um algoritmo recursivo de soma. Esse
# algoritmo deve receber um número de parâmetro e deve
# somar todos os números antecessores a ele.

# Exemplo:
# ```
# Número passado por parâmetro à função: 4

# Execução: 4 + 3 + 2 + 1

# Resultado: 10
# ```


def recursive_sum(n, total=0):
    if n == 0:
        return total
    else:
        total += n
        recursive_sum(n - 1, total)


# recursive_sum(4)

# Gabarito


def sum_recursive(n):
    if n == 0:
        return 0
    else:
        return n + sum_recursive(n - 1)


print(sum_recursive(4))
