# Exercício 5: Escreva um algoritmo recursivo que
# identifica se um número é primo.
def is_number_prime_aux(n, divider):
    if divider < n:
        if n % divider != 0:
            return is_number_prime_aux(n, divider + 1)
        else:
            return False
    else:
        return True


def is_number_prime(n):
    if n > 3:
        return is_number_prime_aux(n, 2)
    elif n <= 0:
        return False
    else:
        return True


if __name__ == "__main__":
    is_prime = is_number_prime(5)
    print(is_prime)
