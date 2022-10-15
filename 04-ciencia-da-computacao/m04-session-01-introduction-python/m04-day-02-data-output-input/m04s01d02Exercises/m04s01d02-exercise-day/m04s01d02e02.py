# Exercício 2:
# Jogo da palavra embaralhada. Desenvolva um jogo
# em que a pessoa usuária tenha que adivinhar uma palavra que
# será mostrada com as letras embaralhadas. O programa terá uma
# lista de palavras e escolherá uma aleatoriamente. O jogador terá
# três tentativas para adivinhar a palavra. Ao final, a palavra deve
# ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça:
# scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando
# o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".

import random


def guess_name():
    names = ["Python", "Typescript", "Trybe"]

    print("Picking a word")
    picked_name = random.choice(names)

    print("Shuffle the letters")
    scrambled_word = "".join(random.sample(picked_name, len(picked_name)))

    print("Loading the lifes")
    count = 3

    hit = False
    print(f"The word issssss: {scrambled_word}")

    while (count > 0) and (not hit):
        answer = input("Now tell me what is the correct word?: ")
        hit = answer == picked_name
        if hit:
            print("Correct answer, Nice work!")
        else:
            count -= 1
            if count == 0:
                print("There is not lives left, try again later!")
            else:
                print(f"Wrong answer! you have {count} lives left!")


guess_name()
