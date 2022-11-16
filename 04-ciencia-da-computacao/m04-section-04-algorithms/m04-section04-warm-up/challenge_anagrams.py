from quick_sort import quick_sort


def anagrams(first_string: str, second_string: str):
    if len(first_string) == len(second_string):
        first_letters = list(first_string.lower())
        second_letters = list(second_string.lower())
        quick_sort(first_letters)
        quick_sort(second_letters)

        return first_letters == second_letters

    return False


if __name__ == "__main__":
    result_amor = anagrams("amor", "roma")
    result_roma = anagrams("Roma", "Amor")
    result_coxinha = anagrams("coxinha", "empada")
    result_pato = anagrams("pato", "tapo")
    result_pedra = anagrams("pedra", "perda")
    result_empty1 = anagrams("", "empty")
    result_empty2 = anagrams("empty", "")
    result_kibe = anagrams("kibe", "Nice")

    assert result_amor is True
    assert result_roma is True
    assert result_coxinha is False
    assert result_pato is True
    assert result_pedra is True
    assert result_empty1 is False
    assert result_empty1 is False
    assert result_kibe is False
