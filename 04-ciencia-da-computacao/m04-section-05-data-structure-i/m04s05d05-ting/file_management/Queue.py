class Queue:
    def __init__(self):
        self.list = list()

    def __len__(self):
        return len(self.list)

    def enqueue(self, value):
        return self.list.append(value)

    def dequeue(self):
        first_element = 0
        return self.list.pop(first_element)

    def search(self, position):
        if position >= 0:
            return self.list[position]

        raise IndexError
