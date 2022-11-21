# Dado um array de números inteiros que representam uma
# avaliação a respeito de um ponto turístico. E seus índices
# represetam a distância entre os pontos turísticos.
# Calcule a máxima pontuação obtida a partir de um par de
# pontos turísticos. Para calcular a pontuação some as avaliações
# dos dois pontos e em seguida subtraia a distância entre eles.


def turist_tour(tour_avaliations):
    answer = -1
    previous = -1

    for next_index in range(1, len(tour_avaliations)):
        current_index = next_index - 1

        previous = max(
            previous, tour_avaliations[current_index] + current_index
        )
        answer = max(
            answer, previous + tour_avaliations[next_index] - next_index
        )
    return answer


if __name__ == "__main__":
    tour_avaliations = [8, 1, 5, 2, 6]
    print(turist_tour(tour_avaliations))
