# 🚀Exercício 1 Em um software monitor, o qual verifica a
# resiliência de outro software, precisamos saber o tempo
# máximo que um software permaneceu sem instabilidades.
# Para isto, a cada hora é feito uma requisição ao sistema
# para verificamos se está tudo bem. Supondo um array que
# contenha os estados coletados por nosso software, calcule
# quanto tempo máximo que o servidor permaneceu sem instabilidades.

# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def count_instability(reports):
    initial_time = 0
    accumulated_time = initial_time
    max_time = initial_time
    for report in reports:
        if report == 1:
            accumulated_time += 1
            max_time = max(max_time, accumulated_time)
        else:
            accumulated_time = initial_time

    return max_time


if __name__ == "__main__":
    first = [0, 1, 1, 1, 0, 0, 1, 1]
    second = [1, 1, 1, 1, 0, 0, 1, 1]

    assert count_instability(first) == 3
    assert count_instability(second) == 4

    # Faça a análise de complexidade da sua solução.
    # Precisa percorrer toda a lista para analisar a quantidade pelo menos
    # uma vez, tendo complexidade linear O(n)
