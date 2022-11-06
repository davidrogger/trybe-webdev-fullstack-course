from m04s04d02e03 import find_bigger_integer_number


def test_find_bigger_integer_number():
    expect = 50
    numbers = [5, 10, 6, 50, 8, 33, 19]
    found_number = find_bigger_integer_number(numbers)
    assert found_number == expect
