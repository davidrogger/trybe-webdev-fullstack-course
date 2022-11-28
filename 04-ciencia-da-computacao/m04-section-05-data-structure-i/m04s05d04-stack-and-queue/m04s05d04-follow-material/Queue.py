from stack import Stack


class Queue(Stack):
    def __str__(self):
        stack_str = super().__str__()

        return stack_str.replace("Stack", "Queue")

    def pop(self):
        if self.is_empty():
            return None

        value = self._data[0]
        del self._data[0]
        return value


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_queue = Queue()

    for elem in elements:
        content_queue.push(elem)

    print(content_queue)

    content_queue.pop()

    print(content_queue)
