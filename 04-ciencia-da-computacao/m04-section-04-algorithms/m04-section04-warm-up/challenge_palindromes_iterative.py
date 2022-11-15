def palindromes_iterative(word):
    first_element = 0
    last_element = len(word) - 1

    while first_element <= last_element:
        if word[first_element] != word[last_element]:
            return False
        else:
            first_element += 1
            last_element -= 1

    return True


if __name__ == "__main__":
    ana = "ana"
    agua = "agua"
    socos = "socos"
    reviver = "reviver"
    coxinha = "coxinha"
    agga = "agga"

    ana_result = palindromes_iterative(ana)
    agua_result = palindromes_iterative(agua)
    socos_result = palindromes_iterative(socos)
    reviver_result = palindromes_iterative(reviver)
    coxinha_result = palindromes_iterative(coxinha)
    agga_result = palindromes_iterative(agga)

    assert ana_result is True
    assert agua_result is False
    assert socos_result is True
    assert reviver_result is True
    assert coxinha_result is False
    assert agga_result is True
