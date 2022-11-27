# Exercício 7:
# Dado uma string, contendo letras e parênteses.
# Crie uma função que irá reverter os caracteres de tal forma
# que somente os caracteres dentro dos parênteses sejam revertidos.
# A string final não deve conter os parênteses. Por exemplo:

# string = 'teste(lagel)'
# resultado = 'testelegal'

from m04s05d04e02 import Stack


# GABARITO
def reverse_word(stack):
    char = ")"
    reversed_word = []
    while char != "(":
        char = stack.pop()
        if char != "(":
            reversed_word.append(char)


def reverse_letters(phrase):
    stack = Stack()

    for char in phrase:
        if char != ")":
            stack.push(char)
        else:
            reverse_word(stack)

    reversed_phrase = []

    while not stack.is_empty():
        reversed_phrase.append(stack.pop())

    return "".join(reversed_phrase)
