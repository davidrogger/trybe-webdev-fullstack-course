from linked_list import LinkedList

# 🚀 Exercício 1:
# Filas: crie uma classe Queue, onde deve conter as operações:
# enqueue, dequeue, peek e is_empty.

# Para este desafio, é necessário efetuar o import das classes
# LinkedList e Node e utilizar seus métodos de acesso para simular
# uma fila, respeitando o padrão FIFO.


class Queue:
    def __init__(self):
        self.queue = LinkedList()

    def __len__(self):
        return len(self.queue)

    def enqueue(self, value):
        self.queue.insert_last(value)

    def dequeue(self):
        self.queue.remove_first()

    def peek(self):
        return self.queue.get_head()

    def is_empty(self):
        raise NotImplementedError
