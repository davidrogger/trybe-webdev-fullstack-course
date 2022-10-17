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
    assert numbers_list[2] == 'Fizz'
    assert numbers_list[4] == 'Buzz'
    assert numbers_list[14] == 'FizzBuzz'
    assert numbers_list == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]
