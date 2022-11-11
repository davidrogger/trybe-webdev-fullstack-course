def selection_sort(numbers):  # [10, 5, 3, 6, 1]
    n = len(numbers)  # n = 5

    for index in range(n - 1):  # (4)
        min_element_index = index  # index = primeiro=0, segundo=1++ até 3

        for search_index in range(
            index + 1, n
        ):  # index primeiro^ 0 + 1 = (1, 5)
            if (
                numbers[search_index] < numbers[min_element_index]
            ):  # numbers posição 1 = 5, numbers posição 0 = 10
                min_element_index = search_index

        current_element = numbers[index]  # primeira iteração = numbers[0] = 10
        numbers[index] = numbers[
            min_element_index
        ]  # primeira iteração numbers[1] = 5
        numbers[
            min_element_index
        ] = current_element  # primeira iteração = numbers[1] = 10

    return numbers
