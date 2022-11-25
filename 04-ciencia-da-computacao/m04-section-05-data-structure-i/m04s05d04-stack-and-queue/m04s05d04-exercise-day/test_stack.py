from m04s05d04e02 import Stack
import pytest


@pytest.fixture
def stack_test():
    stack = Stack()
    stack.push("Jonas")
    stack.push("Bahdok")
    stack.push("Caius")
    stack.push("Modiz")
    return stack


def test_stack_push():
    new_stack = Stack()
    new_stack.push("Teste")
    assert len(new_stack) == 1
    new_stack.push("Teste2")
    assert len(new_stack) == 2


def test_stack_pop(stack_test: Stack):
    assert len(stack_test) == 4
    stack_test.pop()
    assert len(stack_test) == 3
    stack_test.pop()
    stack_test.pop()
    assert len(stack_test) == 1


def test_stack_peek(stack_test: Stack):
    first_expect = "Modiz"
    second_expect = "Caius"
    assert stack_test.peek() == first_expect
    stack_test.pop()
    assert stack_test.peek() == second_expect


def test_stack_is_empty(stack_test: Stack):
    assert stack_test.is_empty() is False
    for _ in range(len(stack_test)):
        stack_test.pop()
    assert stack_test.is_empty() is True
