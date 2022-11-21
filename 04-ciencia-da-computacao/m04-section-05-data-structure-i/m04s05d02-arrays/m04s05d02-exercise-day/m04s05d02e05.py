# Exercício 5 Em um software gerenciador de servidores, precisamos
# verificar o número de servidores que se comunicam. Os servidores
# estão representados como um array bidimensional onde o valor 1
# representa um computador e 0 a ausência do mesmo. Dois servidores
# se comunicam se eles estão na mesma linha ou mesma coluna.

# servidores =  [
#                [1,0],
#                [0,1],
#               ]
# resultado: 0
# Linhas e colunas são diferentes.

# servidores = [
#               [1,0],
#               [1,1],
#              ]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

# servidores = [[1, 0, 0],
#               [1, 0, 0],
#               [0, 0, 1]]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.


def server_communication(servers):
    rows_quantity = len(servers)
    next_element = 1
    total_communication = 0

    for row in range(rows_quantity - 1):
        columns_quantity = len(servers[row])
        currenty_row = servers[row]
        next_row = servers[next_element]
        current_communication = 0
        for column in range(columns_quantity):
            has_computer = 1
            if (
                currenty_row[column] == has_computer
                and next_row[column] == has_computer
            ):
                current_communication += 2
            elif (
                current_communication > 0
                and currenty_row[column] == has_computer
            ):
                current_communication += 1
            elif (
                current_communication > 0 and next_row[column] == has_computer
            ):
                current_communication += 1
        total_communication += current_communication
        next_element += 1

    return total_communication


# GABARITO
def count_servers(grid):
    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1
    answer = 0

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                answer += 1

    return answer


if __name__ == "__main__":
    first = [[1, 0], [0, 1]]
    second = [[1, 0], [1, 1]]
    third = [[1, 0, 0], [1, 0, 0], [0, 0, 1]]
    fourth = [[1, 0, 0], [1, 0, 0], [1, 0, 0]]

    assert count_servers(first) == 0
    assert count_servers(second) == 3
    assert count_servers(third) == 2
    assert count_servers(fourth) == 3
