from file_management.Queue import Queue
import pytest


@pytest.fixture
def queue():
    queue = Queue()
    items = [1, 2, 10, 5, 30, 60]

    for item in items:
        queue.enqueue(item)

    return queue


def test_queue_create():
    queue = Queue()

    assert len(queue) == 0


def test_enqueue_elements():
    queue = Queue()
    queue.enqueue(42)

    assert len(queue) == 1

    items = [10, 5, 30, 60]

    for item in items:
        queue.enqueue(item)

    assert len(queue) == 5


def test_dequeue_elements(queue: Queue):
    first_length_expect = 5
    second_length_expect = 0
    queue.dequeue()

    assert len(queue) == first_length_expect

    for _ in range(first_length_expect):
        queue.dequeue()

    assert len(queue) == second_length_expect


def test_search(queue: Queue):
    expect_script = [
        (0, 1),
        (1, 2),
        (2, 10),
        (3, 5),
        (4, 30),
        (5, 60),
    ]

    for position, expect in expect_script:
        assert queue.search(position) == expect

    queue.dequeue()

    with pytest.raises(IndexError):
        queue.search(5)
