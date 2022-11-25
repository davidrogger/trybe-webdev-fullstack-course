from m04s05d04e03 import StackWithMin


def test_min_value():
    new_stack = StackWithMin()
    push_numbers = [10, 1, 50, 30, -1, -5]
    expect = -5

    for number in push_numbers:
        new_stack.push(number)

    assert new_stack.min_value() == expect
