# Exercício 1:
# Remover duplicatas de uma LinkedList, atividade extraída e adaptada
# do LeetCode. Nesta atividade será necessário implementar um algoritmo
# que receba uma LinkedList como argumento e retorne uma nova lista
# sem elementos duplicados. Esta função deve respeitar a complexidade O(n).

# Exemplo:
# input: 1 -> 1 -> 2
# saída: 1 -> 2

# input: 1 -> 1 -> 2 -> 3 -> 3
# saída: 1 -> 2 -> 3

# removendo item por item desde a cabeça, e verificando se existe o item na
# lista seriam 2 operações = O(2n) resultando em O(n)
