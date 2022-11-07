# 🚀 Exercício 4: Escreva um algoritmo recursivo para
# encontrar o máximo divisor comum (mdc) de dois inteiros.


# def recursive_mdc(n1, n2):
#     pass


# def divider(n1, n2, divider):
#     pass


def mdc(n1, n2):
    dividers = list()
    divider = 2
    while n1 != 1 and n2 != 1:
        if n1 % divider == 0 and n2 % divider == 0:
            dividers.append(divider)
            n1 = n1 / divider
            n2 = n2 / divider
        elif n1 % divider == 0:
            n1 = n1 / divider
        elif n2 % divider == 0:
            n2 = n2 / divider

        if n1 % divider != 0 and n2 % divider != 0:
            divider += 1

    mdc_value = 1

    for number in dividers:
        mdc_value = number * mdc_value

    return mdc_value


if __name__ == "__main__":
    mdc_value = mdc(20, 24)
    print(mdc_value)
