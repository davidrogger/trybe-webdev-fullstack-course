# 🚀 Exercício 3: Crie um algoritmo recursivo que
# encontre, em uma lista, o maior número inteiro.


def bigger_found(numbers, numbers_length):
    if numbers_length == 1:
        return numbers[0]
    else:
        bigger_number = bigger_found(numbers, numbers_length - 1)
        if bigger_number > numbers[-1]:
            return bigger_number
        else:
            return numbers[numbers_length - 1]


def find_bigger_integer_number(numbers: list):
    numbers_length = len(numbers)
    return bigger_found(numbers, numbers_length)


if __name__ == "__main__":
    numbers = [5, 10, 6, 50, 8, 33, 19]
    found_number = find_bigger_integer_number(numbers)
