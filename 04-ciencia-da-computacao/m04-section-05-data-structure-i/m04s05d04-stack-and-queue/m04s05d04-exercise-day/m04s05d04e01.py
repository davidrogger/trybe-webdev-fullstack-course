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

    def enqueue(self):
        pass

    def dequeue(self):
        raise NotImplementedError

    def peek(self):
        raise NotImplementedError

    def is_empty(self):
        raise NotImplementedError
