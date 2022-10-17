from m04s01d03e01 import fizz_buzz_list


def test_fizz_buzz_list_type():
    "Should return an list"
    assert type(fizz_buzz_list(15)) == list


def test_fizz_buzz_list_fifteen_length():
    "Should return an list with fifteen elements"
    assert len(fizz_buzz_list(15)) == 15


def test_fizz_buzz_list_fifteen_first_element():
    "Should the first element be a number 1"
    assert fizz_buzz_list(15)[0] == 1


def test_fizz_buzz_list_fifteen_last_element():
    "Should elements multiple of 5 be Buzz, 3 Fizz and both FizzBuzz"
    numbers_list = fizz_buzz_list(15)
    for index, number in numbers_list.items():
        if number % 5 and number % 3 == 0:
            assert number == "FizzBuzz"
        elif number % 5 == 0:
            assert number == "Buzz"
        elif number % 3 == 0:
            assert number == "Fizz"
        else:
            assert number == (index + 1)
