def fizz_buzz_list(number):
    numbers_filtered = []
    for number_check in range(1, number + 1):
        if number_check % 5 == 0 and number_check % 3 == 0:
            numbers_filtered.append("FizzBuzz")
        elif number_check % 5 == 0:
            numbers_filtered.append("Buzz")
        elif number_check % 3 == 0:
            numbers_filtered.append("Fizz")
        else:
            numbers_filtered.append(number_check)

    return numbers_filtered
