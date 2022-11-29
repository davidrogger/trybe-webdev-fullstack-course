# 🚀 Exercício 1 - Facebook
# Você receberá uma lista de palavras e uma string. Escreva uma
# função que decida quais palavras podem ser formadas com os caracteres
# da string (cada caractere só pode ser utilizado uma vez). Retorne a soma
# do comprimento das palavras escolhidas.

# words = ["cat", "bt", "hat", "tree"], chars = "atach"
# # saída: 6
# """Explicação: As palavras que podem ser formadas com os caracteres
# da string são "cat" (tamanho 3) e "hat" (tamanho 3)."""

# words = ["hello", "world", "students"], chars = "welldonehoneyr"
# # saída: 10
# """Explicação: As palavras que podem ser formadas com os caracteres
# da string são "hello" (tamanho 5) e "world" (tamanho 5)."""


# Complexidade O(n^2)
def match_words(words, chars):
    char_catalog = {char: True for char in chars}
    compatible_words = []

    for word in words:
        length = len(word)
        match_letters = 0
        for letter in word:
            if letter in char_catalog:
                match_letters += 1
        if length == (match_letters):
            compatible_words.append(length)

    return sum(compatible_words)
