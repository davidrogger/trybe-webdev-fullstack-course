from m04s05d04e02 import Stack


def test_stack_push():
    new_stack = Stack()
    new_stack.push("Teste")
    assert len(new_stack) == 1
    new_stack.push("Teste2")
    assert len(new_stack) == 2


def test_stack_pop():
    assert Stack().pop()


def test_stack_peek():
    assert Stack().peek()


def test_stack_is_empty():
    assert Stack().is_empty()
