def bubble_sort(numbers):
    list_size = len(numbers)

    for ordered_elements in range(list_size - 1):  # O(n)
        for item in range(0, list_size - 1 - ordered_elements):  # O(n)
            if numbers[item] > numbers[item + 1]:
                current_element = numbers[item]
                numbers[item], numbers[item + 1] = (
                    numbers[item + 1],
                    current_element,
                )

    return numbers


def bubble_sort2(array):
    has_swapped = True
    num_of_iterations = 0
    list_size = len(array)

    while has_swapped:
        has_swapped = False

        for element in range(list_size - num_of_iterations - 1):
            if array[element] > array[element + 1]:
                array[element], array[element + 1] = (
                    array[element + 1],
                    array[element],
                )
                has_swapped = True
        num_of_iterations += 1

    return array


# Complexidade de tempo Quadratica O(n²)
# Complexidade de espaço O(n)

if __name__ == "__main__":
    numbers = [7, 5, 9, 2, 6, 8]
    print(bubble_sort(numbers))
