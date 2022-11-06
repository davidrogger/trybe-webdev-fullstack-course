from m04s04d02e01 import even_number_counter


def test_recursive_even_number_counter():
    expect = 5
    counted = even_number_counter(10)
    assert counted == expect
