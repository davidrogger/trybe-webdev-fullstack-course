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

A ordem de complexidade nada mais é do que a representação da proproção (ou taxa) de crescimento. Quando um aumento no tamanho da entrada aumenta o tempo de execução na mesma proporção, pode-se dizer que o algoritmo é linearmente proprocional ao tempo de execução, considerando-o um algoritmo linear.

A função matemática que representa uma relação linear é f(n) = n e a notação de Ordem de Complexidade para representar a taxa de crescimento do tempo de execução de um algoritmo é dada por 0(n), onde o n representa a quantidade de operações que o algoritmo vai realizar.

- A ordem de complexidade pode ser chamada, de Complexidade **Assintótica**.

## Complexidade

- Tempo: Relacionado ao tempo de Execução do algoritmo.
- Espaço: Relacionada ao espaço de armazenamento do algoritmo.

A complexidade de um algoritmo representa o crescimento de seu tempo de execução em função de uma taxa, a quantidade de operações que ele realiza. Mas quando falamos de complexidade, não é analisando somente o tempo, mas seu espaço "gasto" também.

Exemplo:
```
def squared_array(numbers):
    array_of_squares = []
    for number in numbers:
        array_of_squares.append(number * number)

    return array_of_squares
```

Esse algoritmo recebe um array de números e retornar um novo com os números ao quadrado. Ele passa por todos os elementos, se houver 10 número, na entrada serão 10 operações; se houverem 100, serão 100, em relação à complexidade de tempo, temos aqui uma taxa de crescimento linear, uma vez que o aumento no tamanho do array, faz crescer proprocionalmente o tepo gasto. Pode-se afirmar que a complexidade de tempo é 0(n), chamada geralmente tempo linear 0 faz referência a ordem de complexidade, enquanto o n representa a fórmula matemática sobre a taxa de crescimento do número de operações.
Conforma a entrada cresce, a saída também cresce e, consequentemente, o espaço ocupado por ela, o que implica dizer que sua complexidade de espaço é dado por 0(n).
Usando outro caso de algoritmo, em que ele recebe um array de números, e retorna a soma de todos, nesse caso, a complexidade de tempo também é de 0(n), porém sua complexidade de espaço é 0(1), pois seu retorno é consntate, ele sempre irá retornar a soma do array.

Um ponto importante que deve ser ressaltado é que quando calculamos a complexidade de espaço não levamos em consideração o espaço ocupado pela entrada, um vez que o tamanho da entrada não é algo que podemos, com nosso algoritmo, influenciar.

Quando falado em ormde de complexidade sem especificar se é de tempo ou de memória, assuma que é de tempo.

# Exercício de Fixação:

**Exercício 1:** Qual é a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?
```
def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result
```

Tempo: 0(n) Linear
Espaço: 0(1) Constante

# Complexidade quadrática

Dependendo da forma como um algoritmo é escrito, seu tempo de execução vai ser alterado de acordo com diferentes taxas de crescimento.

Exemplo:
```
def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = [1, 2, 3, 4, 5]

multiply_arrays(meu_array, meu_array)
```

Conforme aumentar o tamanho dos arrays de entrada, o número de operações para a execução do algoritmo cresce ao quadrado, Isso significa que, para entradas de tamanho n, a quantidade de operações para executar o algoritmo é de n². Sendo assim, a complexidade desse algoritmo é dada por 0(n²) e a chamamos de Complexidade Quadrática.

# Comparando Complexidades

- A Ordem de complexidade diz respeito à taxa de crescimento do tempo de execução (ou espaço de memória ocupado) de um algoritmo, na medida em que aumentamos o tamanho da sua entrada;
- Uma complexidade é 0(1)(constante), quando o tempo de execução do algoritmo independe do tamanho da entrada.
- Uma complexidade é 0(n) (linear) quando a taxa de crescimento em seu tempo de execução é linear: se aumentarmos a entrada em 2x, aumentamos o tempo de execução em 2 vezes;
- Uma complexidade é 0(n²) (quadrática) quando a taxa de crescimento do tempo de execução do algoritmo é quadrática: se aumentamos a entrada em 2 vezes, aumentamos o tempo de execução em 4(ou 2²) vezes.
- Uma complexidade é 0(n³) (cúbica) quando a taxa de crescimento do tempo de execução do algoritmo é cúbica: se aumentarmos a entrada em 3 vezes, aumetamos o tempo de execução em 8 (2³) vezes.

O tempo de execução de um algoritmo cúbico cresce muito mais para uma entrada e muito menor que a do algoritmo linear.

Para um algoritmo linear, com n = 1000, teremos mil operações a serem realizadas. Quando o algoritmo é 0(n²), seria um milhão de operações.

