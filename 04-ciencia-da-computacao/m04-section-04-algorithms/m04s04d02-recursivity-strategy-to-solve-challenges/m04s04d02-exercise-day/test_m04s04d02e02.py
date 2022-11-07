from m04s04d02e02 import recursive_even_number_counter


def test_recursive_even_number_counter():
    expect = 5
    counted = recursive_even_number_counter(10)
    assert counted == expect
