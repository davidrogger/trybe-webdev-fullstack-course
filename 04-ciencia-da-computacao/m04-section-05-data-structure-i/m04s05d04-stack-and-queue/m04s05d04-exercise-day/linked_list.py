from node import Node


class LinkedList:
    def __init__(self):
        self.head = Node("HEAD")
        self.tail = self.head
        self.head.next = None
        self.__length = 0

    def __len__(self):
        return self.__length

    def __repr__(self):
        return f"LinkedList:(len={self.__length}, value={self.head})"

    def is_empty(self):
        return not self.__length
