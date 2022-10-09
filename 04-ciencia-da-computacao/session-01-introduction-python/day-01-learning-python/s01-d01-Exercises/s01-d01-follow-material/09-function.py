def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de
    # um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula

    final_string = ""
    for string in strings:
        final_string += string
        if (
            not string == strings[-1]
        ):  # se ele não é o ultimo elemento, adiciona a ,
            final_string += ", "
    return final_string


names = concat("Carlos", "Cristina")

print(names)
