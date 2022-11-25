from m04s05d04e04 import StackLimited, StackOverflow
import pytest


def test_stack_push_limited():
    limit = StackLimited(2)
    push_numbers = [1, 2, 3]

    with pytest.raises(StackOverflow):
        for number in push_numbers:
            limit.push(number)
