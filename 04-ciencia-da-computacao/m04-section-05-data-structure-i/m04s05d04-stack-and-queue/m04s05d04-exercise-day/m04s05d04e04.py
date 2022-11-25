# Exercício 4:
# Estenda a classe Stack, que escrevemos durante as explicações do
# conteúdo, para que ela suporte um limite de itens dentro da pilha.
# Se definirmos que a pilha deve ter o tamanho dois, ela não poderá
# ter três itens. Por exemplo:

# ...

# content_stack = LimitStack(2)
# content_stack.push(1)
# content_stack.push(-2)

# try:
#     content_stack.push(3)
# except StackOverflow:
#     print("Não é possível adicionar outro item à pilha")

from m04s05d04e02 import Stack


class StackOverflow(OverflowError):
    pass


class StackLimited(Stack):
    def __init__(self, limit):
        self.__limit = limit

    def push(self, value):
        raise NotImplementedError
