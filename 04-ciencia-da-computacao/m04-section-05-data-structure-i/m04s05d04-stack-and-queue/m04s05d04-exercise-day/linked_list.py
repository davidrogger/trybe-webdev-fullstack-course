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

    def insert_first(self, value):
        old_header = self.head
        self.head = Node(value)

        if not self.is_empty():
            self.head.next = old_header

        current_element = self.head

        while current_element.next:
            current_element = current_element.next

        self.tail = current_element
        self.__length += 1
