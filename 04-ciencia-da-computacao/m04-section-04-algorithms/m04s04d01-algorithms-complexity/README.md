# O que é um algoritmo?

É um conjunto de instruções para realizar uma tarefa.

## Exemplos do dia a dia:

- Se vestir;
- Assar um bolo;
- Preparar um sanduíche
- Trocar uma lâmpada

# Complexidade Algorítma

Dada uma função para analisar seu tempo de execução:

```
def sum_array(numbers):
    sum = 0
    for number in numbers:
        sum += number

    return sum
```

Essa função recebe uma lista de números para somar, quanto tempo ela demoraria?

E a resposta é, que depende de muitos fatores, computador que está sendo executado, os recursos que essa máquina está compartilhando com a função.
Supondo que é uma máquina padrão sem mais nada além da função rodando nela, temos mais um depente, que seria o tamanho de entrada nessa função, quanto maior a lista, mais tempo ela vai demorar.
O tempo de execução dele é proprocinal ao tamanho do dado de entrada.
Exemplo:
```
# def sum_array(numbers):
  # ...

# Suponha que, para o array abaixo, o tempo de execução seja `n`
sum_array(array_com_dez_mil_numeros)

# Nesse caso, aqui o tempo de execução vai ser `10 * n`, ou `10n`, já que o array é dez vezes maior que o anterior
sum_array(array_com_cem_mil_numeros)

# Já esse é dez mil vezes maior que o primeiro, então esse aqui executa em `100n`
sum_array(array_com_um_milhão_de_numeros)
```

O tempo de execução aumenta proprocionalmente, de acordo com uma taxa. Isso é chamado de complexidade: A taxa de crescimento do tempo de execução de algoritmo; quanto maior é essa taxa, maior é seu tempo de execução, e isso faz com que sua complexidade seja maior.

A ormde de complexidade nada mais é do que a representação da proproção (ou taxa) de crescimento. Quando um aumento no tamanho da entrada aumenta o tempo de execução na mesma proporção, pode-se dizer que o algoritmo é lenearmente proprocional ao tempo de execução, considerando-o um algoritmo linear.

A função matemática que representa uma relação linear é f(n) = n e a notação de Ordem de Complexidade para representar a taxa de crescimento do tempo de execução de um algoritmo é dada por 0(n), onde o n representa a quantidade de operações que o algoritmo vai realizar.

- A ordem de complexidade pode ser chamada, de Complexidade Assintótica.

## Complexidade

- Tempo: Relacionado ao tempo de Execução do algoritmo.
- Espaço: Relacionada ao espaço de armazenamento do algoritmo.