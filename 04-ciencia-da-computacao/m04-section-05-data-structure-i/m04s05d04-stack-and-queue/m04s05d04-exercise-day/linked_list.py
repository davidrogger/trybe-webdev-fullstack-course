from node import Node


class LinkedList:
    def __init__(self):
        self.__head = Node("HEAD")
        self.__tail = self.__head
        self.__head.next = None
        self.__length = 0

    def __len__(self):
        return self.__length

    def __repr__(self):
        return f"LinkedList:(len={self.__length}, value={self.__head})"

    def is_empty(self):
        return not self.__length

    def insert_first(self, value):
        old_header = self.__head
        self.__head = Node(value)

        if not self.is_empty():
            self.__head.next = old_header

        if self.is_empty():
            self.__tail = self.__head

        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            self.insert_first(value)

        self.__tail.next = Node(value)
        self.__tail = self.__tail.next

        self.__length += 1

    def get_head(self):
        return self.__head.value

    def get_tail(self):
        return self.__tail.value
