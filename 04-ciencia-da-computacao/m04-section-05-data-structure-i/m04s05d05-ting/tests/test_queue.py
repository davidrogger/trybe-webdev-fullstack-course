from file_management.Queue import Queue


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
