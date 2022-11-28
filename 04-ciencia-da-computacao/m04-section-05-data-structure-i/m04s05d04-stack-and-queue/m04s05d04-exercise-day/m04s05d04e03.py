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
        current_min_value = self.stack.get_node_at(0)
        current_value = self.stack.get_node_at(0)
        while current_value.next:
            if current_value.next.value < current_min_value.value:
                current_min_value = current_value.next
            current_value = current_value.next

        return current_min_value.value


# Faça a análise de complexidade da sua solução.
# Por ser necessário verificar todos os valores dos nodes, para encontrar
# o menor valor, complexidade de tempo O(n), logarítimica
