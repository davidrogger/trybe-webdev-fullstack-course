# Exercício 3:
# Estenda a classe Stack, que escrevemos durante as explicações do
# conteúdo, adicionando uma nova função chamada min_value() que irá
# retornar o menor valor inteiro presente na pilha. Por exemplo:

# # ...

# content_stack.push(1)
# content_stack.push(-2)
# content_stack.push(3)
# print(content_stack.min_value()) # saída: -2

from m04s05d04e02 import Stack


class StackWithMin(Stack):
    def min_value(self):
        raise NotImplementedError
