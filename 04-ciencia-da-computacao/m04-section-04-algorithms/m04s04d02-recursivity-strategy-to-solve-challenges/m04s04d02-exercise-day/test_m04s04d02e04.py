from m04s04d02e04 import mdc
import pytest


@pytest.fixture
def numbers():
    return [
        {
            "n1": 20,
            "n2": 24,
            "expect": 4,
        },
        {
            "n1": 18,
            "n2": 60,
            "expect": 6,
        },
        {
            "n1": 32,
            "n2": 48,
            "expect": 16,
        },
    ]


def test_mdc(numbers):
    for number in numbers:
        number1 = number["n1"]
        number2 = number["n2"]
        expect = number["expect"]

        mdc_value = mdc(number1, number2)
        assert mdc_value == expect
