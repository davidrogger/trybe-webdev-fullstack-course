# 🚀 Exercício 4: Escreva um algoritmo recursivo para
# encontrar o máximo divisor comum (mdc) de dois inteiros.


def recursive_mdc_aux(n1, n2, divider):
    if n1 % divider == 0 and n2 % divider == 0:
        n1_divided = n1 / divider
        n2_divided = n2 / divider
        return divider * recursive_mdc_aux(n1_divided, n2_divided, divider)
    elif n1 % divider == 0:
        n1_divided = n1 / divider
        return recursive_mdc_aux(n1_divided, n2, divider)
    elif n2 % divider == 0:
        n2_divided = n2 / divider
        return recursive_mdc_aux(n1, n2_divided, divider)
    elif n1 == 1 and n2 == 1:
        return 1
    else:
        return recursive_mdc_aux(n1, n2, divider + 1)


def recursive_mdc(n1, n2):
    divider = 2
    return recursive_mdc_aux(n1, n2, divider)


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


def gabarito_mdc(a, b):
    if b == 0:
        return a
    return gabarito_mdc(b, a % b)


if __name__ == "__main__":
    # mdc_value = mdc(20, 24) # 4
    # mdc_value = recursive_mdc(20, 24)
    mdc_value = gabarito_mdc(20, 24)
    print(mdc_value)
