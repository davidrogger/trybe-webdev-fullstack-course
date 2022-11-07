# Exercício 6: Escreva um algoritmo que recebe uma
# lista e retorne-a na ordem reversa.
def reverse_list_aux(items, new_list):
    last_item = -1
    new_list_size = len(new_list)
    if len(items) == len(new_list):
        return new_list
    else:
        new_list = [*new_list, items[last_item - new_list_size]]
        return reverse_list_aux(items, new_list)


def reverse_list(list):
    return reverse_list_aux(list, [])


def gabarito_recursive_reverse(list):
    if len(list) < 2:
        return list
    else:
        return gabarito_recursive_reverse(list[1:]) + [list[0]]


# iterative way
def gabarito_reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)

    return reversed_list


if __name__ == "__main__":
    names = ["jonas", "mary", "carol", "onizuk"]
    # reverse_names = reverse_list(names)
    reverse_names = gabarito_recursive_reverse(names)
    print(reverse_names)
