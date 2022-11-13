# Exercício 6 Para descobrirmos qual commit introduziu um
# erro no sistema, precisamos voltar no tempo verificando
# os commits antigos, de modo a descobrir um commit em
# que os testes falham. Supondo que isto será representado
# como um array de booleanos, descubra o índice onde o
# erro ocorreu pela primeira vez.

# Como os testes demoram a rodar, resolva o problema
# rodando o mínimo de testes possíveis.

# entrada: [True, True, True, True, False, False, False]  # saída: 4


# entrada: [True, True, False, False, False, False, False]  # saída: 2

# 💡 Curiosidade: O comando git bisect executa de maneira
# similar a este exercício se implementado de forma eficiente.


def find_index_fail(array):
    list_size = len(array)
    start = 0
    end = list_size - 1

    while start <= end:
        mid = (start + end) // 2
        until_mid = mid + 1

        first = array[start:until_mid]

        if False in first:
            end = mid
        else:
            start = mid

        if array[start] is False:
            return start

        start = start + 1

    return -1


if __name__ == "__main__":
    example1 = [True, True, False, True, False, False, False]  # 2
    example2 = [True, False, True, True, False, False, False]  # 1
    example3 = [True, True, True, True, True, False, False]  # 5
    example4 = [True, True, True, True, True, True, True]  # -1
    example5 = [True, True, True, True, True, True, True, True, False]  # 8
    result1 = find_index_fail(example1)
    result2 = find_index_fail(example2)
    result3 = find_index_fail(example3)
    result4 = find_index_fail(example4)
    result5 = find_index_fail(example5)
    print(f"False Position in the first example: {result1}")
    print(f"False Position in the first example: {result2}")
    print(f"False Position in the first example: {result3}")
    print(f"False Position in the first example: {result4}")
    print(f"False Position in the first example: {result5}")
