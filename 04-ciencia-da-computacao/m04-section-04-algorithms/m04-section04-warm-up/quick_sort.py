def ordered(letters, start, end):
    if start < end:
        p = partition(letters, start, end)
        ordered(letters, start, p - 1)
        ordered(letters, p + 1, end)


def partition(letters, start, end):
    pivot = letters[end]
    delimiter = start - 1

    for index in range(start, end):
        if letters[index] <= pivot:
            delimiter = delimiter + 1
            letters[index], letters[delimiter] = (
                letters[delimiter],
                letters[index],
            )
    letters[delimiter + 1], letters[end] = letters[end], letters[delimiter + 1]
    return delimiter + 1


def quick_sort(letters):
    start = 0
    end = len(letters) - 1
    return ordered(letters, start, end)
