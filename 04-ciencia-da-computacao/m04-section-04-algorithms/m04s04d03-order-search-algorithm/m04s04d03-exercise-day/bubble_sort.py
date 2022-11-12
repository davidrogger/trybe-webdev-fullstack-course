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


# Complexidade de tempo Quadratica O(n²)
# Complexidade de espaço O(n)

if __name__ == "__main__":
    numbers = [7, 5, 9, 2, 6, 8]
    print(bubble_sort(numbers))
