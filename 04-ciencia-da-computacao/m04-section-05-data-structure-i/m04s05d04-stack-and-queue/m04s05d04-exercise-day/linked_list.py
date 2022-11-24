from node import Node


class LinkedList:
    def __init__(self):
        self.head = Node("HEAD")
        self.tail = self.head
        self.head.next = None
        self.__length = 0
