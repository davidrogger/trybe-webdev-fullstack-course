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

# Complexidade Logarítimica

Apesar do termo assustador, a complexidade Logarítimica não exige cálculos matemáticos complicados para ser entendida.

Representado pela notação 0(log n), um algoritmo logarítmico tem uma alteração na taxa de execução que, geralmente, reduz pela metade o tempo de finalização das iterações ao reduzir pela metade o tamanho do input a cada iteração.

O número de operações para executar o algoritmo logarítmico tem uma relação inversa ao tamanho da entrada: quanto maior ela é, menor o número de operações e, consequentemente, menor o tempo para execução do algoritmo.

Suponha que vamos criar um algoritmo de lista telefônica. Temos uma lista de nomes de tamanho n, ordenada em ordem alfabética, e um nome x; devemos encontrar o número de telefone da pessoa passada na entrada.

Vamos procurar pelo nome Tintim,

- Buscar na página (ou posição) da lista que tenha nomes começando com a letra T;
- Escolher uma página aleatória da lista para abrir;
- Percebemos que caímos na posição da letra M;
- Como M < T, na ordem alfabética, então, devemos avançar algumas posições para encontrar o T;
- Então, escolhemos uma página que está mais adiante;
- Percebemos que caímos na posição da letra V;
- Como V > T, então devemos voltar algumas posições;
- Repetimos esse processo até encontrar o nome desejado.

Outra maneira de encontrar o Tintim, seria iniciando pela letra A percorrendo até chegar na Letra T encontrando o Tintim, porém essa operação seria muito maior.
Ou seja resolvemos em menos passos o problema 0(log n).


Algoritmo de busca binária:
```
# A estrutura deve estar ordenada para que a busca binária funcione
def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while start <= end: # os índices podem ser no máximo iguais, o início não pode ultrapassar o fim
        mid = (start + end) // 2 # encontro o meio

        if numbers[mid] == target: # se o elemento do meio for o alvo, devolve a posição do meio
            return mid
        
        if target < numbers[mid]: # se o elemento for menor, atualiza o índice do fim
            end = mid - 1
        else: # caso contrário, atualiza o índice do inicio
            start = mid + 1
    
    return -1 # Não encontrou? Retorna -1

numbers = [2, 3, 4, 10, 40]
target = 40

result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
```

Esse algoritmo corta pela metade o problema, buscando apartir do meio o numero, como ele é ordenado ele segue apartir do meio se o target for maior que o valor central, e se for menor, ele itera de forma reversa.

Quando cortamos a entrada pela metade a cada interação, temos um padrão que segue a função matemática de logaritmo na base dois, assim o algoritmo é 0(log n)

Um logaritmo em base 2 respresenta o número de vezes que um valor deve ser dividido pela metade para obter 1.

Dessa forma, conseguimos calcular a ordem de complexidade de um algoritmo deste tipo: Quando a entrada é cortada pela metade a cada iteração temos um comportamento logarítimico.

# Exercícios de Fixação

**Exercício 4:** Imagine que você recebe dois arrays de tamanho igual, array1 e array2. Para cada elemento do array1, realize uma busca binária no array2. Mostre que a ordem de complexidade do algoritmo resultante é O(n * log n), ou O(n log n).

# Complexidade Exponencial e Fatorial

Essas complexidades caracterizam algoritmos que, para aumentos pequenos no tamanho da entrada, aumentam gigantemente o número de operações a serem realizadas para serem executados juntamente com seu tempo de execução. O tempo de execução e espaço ocupado em cada caso é:

- Exponencial: 2ⁿ (0(2ⁿ));
- Fatorial n! (0(n!))

Para uma entrada de dados n que possui vinte elementos, o algoritmo exponencial realizará aproximadamente um milhão (ou 2²⁰) de operações. Para o fatorial os mesmos vinte elementos rendem 24 quatrilhões de operações.(2432902008176640000 operações).

Quando não possuimos outro algoritmo conhecido que resolve o problema, acabmos precisando recorrer ao uso de complexidade fatorial.

## Exemplo:

### Caixeiro-Viajante:

- Dada uma lista de cidades e distância entre cada par de cidades, qual é a rota mais curta possível que visita todas as cidades exatamente uma vez e volta pela cidade de origem?

A única solução exata conhecida para esse problema é a força bruta: testamos todas as possibilidades e escolher a menor rota.
```
- Belo Horizonte > São Paulo > Florianópolis

- Belo Horizonte > Florianópolis > São Paulo

- Florianópolis > Belo Horizonte > São Paulo

- Florianópolis > São Paulo > Belo Horizonte

- São Paulo > Belo Horizonte > Florianópolis

- São Paulo > Florianópolis > Belo Horizonte
```

O número de rotas para 3 cidades é `3! == 3 * 2 * 1 = 6`. Atualmente, o Brasil tem 5570 municípios. Se nosso caixeiro viajante tivesse que passar por todos os municípios, isso daria a ele 5570 * 5569 * 5568 * ... * rotas.

Quantos milhares de anos um computador precisaria para roda esse algoritmo nesse caso.

Algoritmos que não têm solução conhecida em tempo polinomial, ou seja, cuja ordem de complexidade é fatorial ou exponencial e são possivelmente resolvidos somente com força bruta, pertencem a uma categoria de problemas na computação chamada **NP Completos**.

# Algoritmos com várias estruturas de repetição
```
def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1

    number2 = 0
    for n1 in range(n):
       for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
       for n2 in range(n):
           for n3 in range(n):
               number3 += n1 + n2 + n3

    return number1, number2, number3

n1, n2, n3 = calculations(100)
print(f'{n1}, {n2}, {n3}')
```

Esse algoritmo tem três estruturas de repetição evidentes: linear, quadrática e cúbica.

Qual a resposta para sua ordem de complexidade: seria 0(n + n² + n³)

Se os loops estão aninhados você os multiplica, e se estão paralelos você os soma.

Outro exemplo:
- Um algoritmo de busca binária que roda três vezes teria 0(3 * log n) de complexidade;
- Um algoritmo que roda uma busca binária num array de tamanho n para cada elemento de um array de tamanho m teria 0 (m * log n) de complexidade.

Ordens de complexidade diferentes, para entradas grandes, têm valores absurdamente diferentes.

Imagine escrever 0(n! + log(n)). Para uma entrada de tamanho 8 esse número seria (40320 + 3). Observe como o componente fatorial da equação, n! = 40320, domina completamente  a ordem de complexidade. Nesse cenário, dizemos que a complexidade menor é desprezível e, então, a omitimos.

Para valores, grandes, dizer a maior ordem de complexidade do conjunto já basta para uma boa análise. Sendo assim, ao analisar várias estruturas de repetição em paralelo, responsa somente com o valor da estrutura que tiver maior ordem de complexidade na hora de fazer a sua análise.

# Melhor caso, pior e médio caso

Eles significam: "A depender da entrada, o algoritmo pode executar em 0(1) ou 0(n).
```
def linear_search(numbers, target):
    n = len(numbers) # N será a quantidade de elementos da lista
    for index in range(0, n): # vamos iterar a lista completa
        if numbers[index] == target: # se encontrar o elemento alvo, retorne a posição
            return index

    return -1 # Não encontrou? Retorne -1


print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1
```

Para entradas muito grandes, esse algoritmo é 0(n)

Caso tenhamos sorte e o número que procuramos seja o primeiro, mesmo para uma entrada infinita, nossa complexidade será 0(1). Esse é o melhor caso desse algoritmo. De forma análoga, o pior caso é o número ser o último elemento do array, ou seja 0(n)

O caso médio, seria algo como 0(n * 1/2). Nesse caso, o número que procuramos está no meio da lista. Mas para entradas muito grandes, aprendemos a desprezar os números menos relevantes da soma, podemos simplificar e dizer que o caso médio é 0(n).

Diferentes algoritmos têm diferentes cenários de melhor caso, pior caso e caso médio.