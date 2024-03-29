from linked_list import LinkedList

# Exercício 2:
# Pilhas: crie uma classe Stack, onde deve conter as operações:
# push, pop, peek e is_empty.


class Stack:
    def __init__(self):
        self.stack = LinkedList()

    def __len__(self):
        return len(self.stack)

    def __repr__(self) -> str:
        return self.stack

    def push(self, value):
        self.stack.insert_last(value)

    def pop(self):
        return self.stack.remove_last()

    def peek(self):
        return self.stack.get_tail()

    def is_empty(self):
        return self.stack.is_empty()
