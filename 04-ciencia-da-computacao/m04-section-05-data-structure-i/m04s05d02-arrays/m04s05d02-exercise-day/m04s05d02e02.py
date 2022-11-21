# Exercício 2 Em um jogo de baralho, as cartas estão representadas
# por um array numérico. Para iniciar o jogo, devemos embaralhar as
# cartas. Faremos isto dividindo uma porção de cartas em 2 e depois
# mesclando as duas porções. Por exemplo:
from math import ceil

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def shuffle_numbers(numbers):
    shuffled_numbers = []
    step = ceil(len(numbers) / 2)
    current_index = 0
    while len(shuffled_numbers) < len(numbers):
        shuffled_numbers.append(numbers[current_index])
        try:
            shuffled_numbers.append(numbers[current_index + step])
        except IndexError:
            pass
        finally:
            current_index += 1

    return shuffled_numbers


# GABARITO
def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer


if __name__ == "__main__":
    first_cards = [2, 6, 4, 5]
    second_cards = [1, 4, 4, 7, 6, 6]
    third_cards = [1, 4, 4, 7, 6, 6, 8]

    assert shuffle_numbers(first_cards) == [2, 4, 6, 5]
    assert shuffle_numbers(second_cards) == [1, 7, 4, 6, 4, 6]
    assert shuffle(third_cards) == [1, 7, 8, 4, 6, 4, 6]
