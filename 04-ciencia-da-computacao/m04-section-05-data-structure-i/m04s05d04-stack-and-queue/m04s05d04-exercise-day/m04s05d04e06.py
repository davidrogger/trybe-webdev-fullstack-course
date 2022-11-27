# Exercício 6:
# Dada a função que faz a resolução de expressões pós fixas, adicione
# as operações de subtração e divisão.
# Considere os exemplos abaixo para testar a sua alteração na função.

# Nota: transforme as expressões em pós fixas e atribua valores.
# Caso seja necessário, faça o cast do valor para ponto flutuante.

from m04s05d04e02 import Stack


# GABARITO
def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == "-":
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 - op2
            stack.push(result)
        elif token == "/":
            op2 = stack.pop()
            op1 = stack.pop()
            result = op1 / op2
            stack.push(result)
        else:
            stack.push(int(token))

    return stack.pop()


if __name__ == "__main__":
    assert solve_expression("5 10 + 30 5 / -") == 9
    assert solve_expression("10 5 30 * 30 / 2 * +") == 20
    assert solve_expression("5 10 * 30 - 4 5 * 10 - +") == 30
    assert solve_expression("30 10 / 5 + 5 10 + *") == 120
    assert solve_expression("50 10 * 2 / 5 * 5 /") == 250
