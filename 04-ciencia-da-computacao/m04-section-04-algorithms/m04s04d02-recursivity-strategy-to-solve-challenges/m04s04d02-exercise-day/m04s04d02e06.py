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


if __name__ == "__main__":
    names = ["jonas", "mary", "carol", "onizuk"]
    reverse_names = reverse_list(names)
    print(reverse_names)
