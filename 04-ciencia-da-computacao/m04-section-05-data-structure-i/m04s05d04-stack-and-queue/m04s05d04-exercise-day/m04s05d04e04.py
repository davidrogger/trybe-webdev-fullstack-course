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
        super().__init__()

    def push(self, value):
        if len(self) == self.__limit:
            raise StackOverflow
        super().push(value)


# Faça a análise de complexidade da sua solução.
# Complexidade constante O(1), pois não há necessidade vasculhar informações
# o limite é definido inicialmente, e sempre que algo novo for adicionado
# é verficiar se o tamanho está no limite.
