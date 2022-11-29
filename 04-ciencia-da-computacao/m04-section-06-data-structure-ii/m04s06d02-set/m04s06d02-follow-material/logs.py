# Exercício 7
# Sua trajetória no curso foi um sucesso e agora você está
# trabalhando para a Trybe! Em um determinado módulo, os estudantes
# precisam entregar dois trabalhos para seguir adiante. Cada vez
# que um dos trabalhos é entregue, o nome da pessoa fica registrado.
# Precisamos saber como está o andamento da entrega das listas.
# Para isso, você tem acesso aos nomes das pessoas da turma, bem
# como ao log de quem já entregou qual lista. A partir das listas
# abaixo, utilize a classe já criada e imprima os resultados das
# perguntas abaixo:

from conjunto import Conjunto2

if __name__ == "__main__":
    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    set_estudantes = Conjunto2()
    entregas1 = Conjunto2()
    entregas2 = Conjunto2()

    for estudante in estudantes:
        set_estudantes.add(estudante)
    for estudante in lista1_entregues:
        entregas1.add(estudante)
    for estudante in lista2_entregues:
        entregas2.add(estudante)

    print("Quem ainda não entregou a lista1?")
    print(set_estudantes.difference(entregas1))

    print("Quem já entregou as duas listas?")
    print(entregas1.intersection(entregas2))

    print("Quem já entregou qualquer uma das duas listas?")
    print(entregas1.union(entregas2))

    print("Quem ainda não entregou nenhuma das listas?")
    print(set_estudantes.difference(entregas1.union(entregas2)))
