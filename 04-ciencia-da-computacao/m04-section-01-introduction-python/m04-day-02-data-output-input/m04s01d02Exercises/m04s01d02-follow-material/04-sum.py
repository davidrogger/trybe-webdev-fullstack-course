# Exercício 2:
# Escreva um programa que receba vários números naturais
# e calcule a soma desses valores. Caso algum valor da entrada
# seja inválido (por exemplo uma letra), uma mensagem deve ser
# exibida na saída de erros no seguinte formato: “Erro ao somar
# valores, {valor} é um valor inválido”. Ao final, você deve imprimir
# a soma dos valores válidos.

# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária
# que separe-os com um espaço. Receba os valores no formato str e utilize
# o método split para pegar cada valor separado. O método isdigit, embutido
# no tipo str, pode ser utilizado para verificar se a string corresponde a
# um número natural.

def sum_numbers():
    print("Insert numbers to be sum, ex: 5 5 output 10")
    numbers = input("Insert numbers: ").split()
    total = 0
    for number in numbers:
        if number.isdigit():
            total += int(number)
        else:
            print(f'Error when sum the value {number}, it is an invalid value')

    print(f'The total sum of the valid values is {total}')


sum_numbers()
