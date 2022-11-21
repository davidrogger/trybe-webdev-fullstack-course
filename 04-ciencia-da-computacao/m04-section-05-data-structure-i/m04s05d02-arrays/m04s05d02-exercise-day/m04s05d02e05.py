# Exercício 5 Em um software gerenciador de servidores, precisamos
# verificar o número de servidores que se comunicam. Os servidores
# estão representados como um array bidimensional onde o valor 1
# representa um computador e 0 a ausência do mesmo. Dois servidores
# se comunicam se eles estão na mesma linha ou mesma coluna.

# servidores =  [[1,0],[0,1]]
# resultado: 0
# Linhas e colunas são diferentes.

# servidores = [[1,0],[1,1]]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

# servidores = [[1, 0, 0],
#               [1, 0, 0],
#               [0, 0, 1]]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.
