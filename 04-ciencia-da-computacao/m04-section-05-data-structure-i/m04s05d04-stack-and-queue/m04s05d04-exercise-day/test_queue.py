from m04s05d04e01 import Queue
import pytest


@pytest.fixture
def queue_test():
    new_queue = Queue()
    new_queue.enqueue("Jonas")
    new_queue.enqueue("Bahdok")
    new_queue.enqueue("Caius")
    new_queue.enqueue("Modiz")
    return new_queue


def test_enqueue():
    new_queue = Queue()

    assert len(new_queue) == 0

    new_queue.enqueue("Jonas")
    new_queue.enqueue("Bahdok")
    new_queue.enqueue("Caius")
    new_queue.enqueue("Modiz")

    assert len(new_queue) == 4


def test_dequeue(queue_test: Queue):
    queue_test.dequeue()
    assert len(queue_test) == 3
    queue_test.dequeue()
    assert len(queue_test) == 2


def test_peek(queue_test: Queue):
    first_expect = "Jonas"
    second_expect = "Bahdok"
    assert queue_test.peek() == first_expect
    queue_test.dequeue()
    assert queue_test.peek() == second_expect


# def test_is_empty():
#     pass
