def letters_compare(word, first_letter, last_letter):
    if first_letter > last_letter:
        return True
    elif word[first_letter] == word[last_letter]:
        return letters_compare(word, first_letter + 1, last_letter - 1)
    else:
        return False


def palindromes_recursive(word):
    first_letter = 0
    last_letter = len(word) - 1
    return letters_compare(word, first_letter, last_letter)


if __name__ == "__main__":
    ana = "ana"
    agua = "agua"
    socos = "socos"
    reviver = "reviver"
    coxinha = "coxinha"
    agga = "agga"

    ana_result = palindromes_recursive(ana)
    agua_result = palindromes_recursive(agua)
    socos_result = palindromes_recursive(socos)
    reviver_result = palindromes_recursive(reviver)
    coxinha_result = palindromes_recursive(coxinha)
    agga_result = palindromes_recursive(agga)

    assert ana_result is True
    assert agua_result is False
    assert socos_result is True
    assert reviver_result is True
    assert coxinha_result is False
    assert agga_result is True
