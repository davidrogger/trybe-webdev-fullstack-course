from m04s05d04e02 import Stack


def test_stack_push():
    assert Stack().push("empty")


def test_stack_pop():
    assert Stack().pop()


def test_stack_peek():
    assert Stack().peek()


def test_stack_is_empty():
    assert Stack().is_empty()
