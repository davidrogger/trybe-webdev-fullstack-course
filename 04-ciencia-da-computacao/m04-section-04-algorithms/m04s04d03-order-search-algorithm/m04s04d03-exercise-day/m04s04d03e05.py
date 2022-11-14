# Exercício 5 Converta o algoritmo recursivo de busca
# binária em iterativo.


def binary_search(array, target):
    first_element = 0
    last_element = len(array) - 1

    while first_element <= last_element:
        mid_list = (first_element + last_element) // 2
        if array[mid_list] == target:
            return mid_list

        if array[mid_list] > target:
            last_element = mid_list - 1
        else:
            first_element = mid_list + 1
    return -1


if __name__ == "__main__":
    example = [2, 6, 19, 24, 30, 46, 50, 61]  # len 8, mid 30
    example2 = [
        2,
        6,
        19,
        21,
        24,
        30,
        46,
        49,
        50,
        61,
        75,
    ]  # len 11, mid 46

    example3 = [
        2,  # 0
        6,  # 1
        18,  # 2
        19,  # 3
        21,  # 4
        24,  # 5
        30,  # 6
        31,  # 7
        46,  # 8
        49,  # 9
        50,  # 10
        51,  # 11
        61,  # 12
        75,  # 13
        80,  # 14
    ]  # len 15, mid[7]

    target = 46

    # result_example1 = binary_search(example, target)
    # result_example2 = binary_search(example2, target)
    result_example3 = binary_search(example3, target)
    # print(result_example1)
    # print(result_example2)
    print(result_example3)
