def insertion_sort(numbers):  # [10, 5, 3, 6, 1]
    n = len(numbers)  # n = 5

    for index in range(1, n):  # (1~5)
        key = numbers[index]  # pegando o segundo elemento (5)

        new_position = index - 1  # index da posição anterior

        while new_position >= 0 and numbers[new_position] > key:
            # Quando o indice for menor que 0 e
            # O elemento anterior for maior que o elemento atual (segundo)
            # ele troca a posição pegando o anteior e jogando ele para
            # frente na lista
            numbers[new_position + 1] = numbers[new_position]

            new_position = new_position - 1

        numbers[new_position + 1] = key

    return numbers


if __name__ == "__main__":
    list_example = [10, 5, 3, 6, 1]
    order_list = insertion_sort(list_example)
    print(order_list)
