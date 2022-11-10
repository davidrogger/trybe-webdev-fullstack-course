# Algoritmos de Ordenação

Fazem parte de uma categoria de algoritmos que buscam colocar elementos em uma sequência, sendo númerica, lexicográfica ou or qualquer outra característica. A ordenção tem a finalidade facilitar a visualização a busca.

# Algoritmos que usam força bruta

Caracteriza-se por testar cada possibilidade existente, uma a uma, até resolver o problema.

## Selection Sort

A ideia do Selection Sort é bem intuitiva:

1. Encontre o menor elemento da lista
2. Adicione o elemento encontrado em uma outra lista
3. Repeita o processo para todos os elementos restantes.

Exemplo:

Lista original: = [7, 5, 9, 2, 6, 8]

1. menor elemento = [**2**, 5, 9, **7**, 6, 8]
2. busca pelo segundo menor elemento = [2, **5**, 9, 7, 6, 8]
2. elemento ja esta na posição correta = [2, **5**, 9, 7, 6, 8]
3. busca pelo terceiro menor elemento = [2, 5, 9, 7, **6**, 8]
3. troca de posição com terceiro menor elemento = [2, 5, 6, **7**, 9, 8]
4. busca pelo quarto menor elemento = [2, 5, 6, **7**, 9, 8]
4. elemento ja esta na posição correta = [2, 5, 6, **7**, 9, 8]
5. busca pelo quinto menor elemento = [2, 5, 6, 7, 9, **8**]
5. troca de posição com quinto menor elemento = [2, 5, 6, 7, **8**, 9]

List ordenada = [2, 5, 6, 7, 8, 9]

### Exemplo de implementação

```
def selection_sort(numbers):
    n = len(numbers) # Quantidade de elementos da lista

    for index in range(n - 1): # Precisamos ordenar N-1 elementos
        min_element_index = index # Definimos a variável para buscar o menor elemento

        for search_index in range(index + 1, n): # Início da busca pelo menor elemento
            if numbers[search_index] < numbers[min_element_index]:
                min_element_index = search_index # Atualiza o índice atual do menor elemento

        # Troca os elementos de posição
        current_element = numbers[index]
        numbers[index] = numbers[min_element_index]
        numbers[min_element_index] = current_element

    return numbers

numbers = [7, 5, 9, 2, 6, 8]
print(f"Lista inicial: {numbers}")
ordered_numbers = selection_sort(numbers)
print(f"Lista final: {ordered_numbers}")
```

A complexidade deste algoritmo, que independente de todos os elementos estarem ordenados, ou parcialmente, sempre será percorrido o array completamente e também n - 1 elementos a cada iteração. Sendo uma complexidade 0(n²) para todos os casos.

Como foi criado apenas algumas variáveis de controle e não uma lista auxiliar, o algoritmo tem uma complexidade de espaço constante.

# Insertion Sort

Insere um elemento de cada vez em sua posição correta. Faz analogia a um jogo de cartas, onde cada nova carta recebida fosse movida até achar a posição correta, fazendo isso sucessivamente até que esteja ordenada. A ordenação por inserção é mais eficiente que a ordenação por seleção e também considereda mais simples.

Exemplo:
```
def insertion_sort(numbers):
    n = len(numbers) # (6) Quantidade de elementos na lista

    for index in range(1, n): # (1~5) Começaremos a ordenar pelo segundo elemento
        key = numbers[index] # (5) Pegamos o segundo elemento e o definimos como chave

        new_position = index - 1 # (0) Tomamos a posição anterior para iniciar a comparação
        while new_position >= 0 and numbers[new_position] > key: # Enquanto a chave for menor, remaneja o elemento para frente
            numbers[new_position + 1] = numbers[new_position] # Remaneja o elemento
            new_position = new_position - 1 # (-1)

        numbers[new_position + 1] = key # Insere a chave na posição correta

    return numbers

numbers = [7, 5, 9, 2, 6, 8]
print(insertion_sort(numbers))
```

Em um pior e medio caso, onde a lista esteja inversamente ordenada, teremos uma complexidade de 0(n²). Se a lista estiver ordenada, será uma complexidade 0(n), pois só fará a iteração de todos os elementos, e não precisará ficar remanejando os elementos.

Como foi criado apenas algumas variáveis de controle e não criamos uma lista auxiliar, algoritmo tem uma complexidade de espaço constante, ou seja, não muda, seja para 10, 1000 ou 100000 elementos.

# Algoritmos que usam soluções iterativas

Soluções iterativas consistem na realização de uma ou mais operações repetidas vezes, por meio de comandos de repetição. São consideradas iterativas operações de comparação e troca de elementos repetidas vezes por meio de comandos de repetição (for).

Toda solução iterativa pode ser reescrita de forma recursiva

## Bubble Sort

Ordenação por bolha, têm esse nome, pois a movimentação dos elementos lembra o movimento de bolhas flutuando. Nesse caso, são realizadas múltiplas iterações sobre a coleção, sempre comparando o valor ao item adjacente e realizando a troca daqueles que estão fora de ordem. A cada iteração o próximo maior valor é colocado em sua posição correta, ou seja, cada item se desloca como uma bolha para a posição a qual pertence.

Pode-se imaginar que os maiores elementos da lista serão jogados para as últimas posições como se elas flutuassem.

Exemplo:
```
def bubble_sort(numbers):
    n = len(numbers) # Quantidade de elementos na lista

    for ordered_elements in range(n - 1): # Precisamos ordenar n-1 elementos
        for item in range(0, n - 1 - ordered_elements): # Vamos percorrer até o elemento anterior ao ordenado
            if numbers[item] > numbers[item + 1]: # se um elemento for maior, flutuamos ele para cima
                current_element = numbers[item]
                numbers[item] = numbers[item + 1]
                numbers[item + 1] = current_element
                
                # Lembra da troca com desempacotamento?
                # numbers[item], numbers[item + 1] = numbers[item + 1], numbers[item]
    return numbers

numbers = [7, 5, 9, 2, 6, 8]
print(bubble_sort(numbers))
```

Assim como nos algoritmos de força bruta, no pior caso do bubble sort ele será 0(n²).

# Algoritmos que usam dividir e conquistar

Consiste em dividir um problema grande em partes menores, encontrar soluções para as partes menores, e então combinar as soluções obtidas em uma solução global. Esta técnica produz um algoritmo eficiente caso a divisão e conquista sejam eficientes.

Toda solução recusiva pode ser reescrita de forma iterativa.

## Merge sort

Ordenação por mistura é um algoritmo onde a técnica da divisão e conquista funciona dividindo a coleção em porções menores até atingir uma coleção mínima. Em seguida, misturando as porções de forma ordenada até que toda a coleção seja reunida novamente, resultando na ordenação.

Exemplo:

```
def merge_sort(numbers, start=0, end=None):
    if end is None:
        end = len(numbers)
    if (end - start) > 1: # se não reduzi o suficiente, continua
        mid = (start + end) // 2 # encontrando o meio
        merge_sort(numbers, start, mid) # dividindo as listas
        merge_sort(numbers, mid, end)
        merge(numbers, start, mid, end) # unindo as listas

# função auxiliar que realiza a mistura dos dois arrays

def merge(numbers, start, mid, end):
    left = numbers[start:mid] # indexando a lista da esquerda
    right = numbers[mid:end] # indexando a lista da direita

    left_index, right_index = 0, 0 # as duas listas começarão do início

    for general_index in range(start, end): # percorrer sobre a lista inteira como se fosse uma
        if left_index >= len(left): # se os elementos da esquerda acabaram, preenche o restante com a lista da direita 
            numbers[general_index] = right[right_index]
            right_index = right_index + 1
        elif right_index >= len(right): # se os elementos da direita acabaram, preenche o restante com a lista da esquerda
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        elif left[left_index] < right[right_index]: # se o elemento do topo da esquerda for menor que o da direita, ele será o escolhido
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            numbers[general_index] = right[right_index] # caso o da direita seja menor, ele será o escolhido
            right_index = right_index + 1


numbers = [6, 5, 3, 1, 8, 7, 2, 4]
merge_sort(numbers, 0, len(numbers))
print(numbers)
```

A separação em partes traz uma complexidade 0(log n), e as misturas 0(n). Resultando em uma complexidade de 0(n long n), independente do array estar ordenado por completo, não ordenada, ou parcialmente ordenado.

Como é um algoritmo recursivo, consome mais memória, possuindo uma complexidade de espaço 0(n), cresce linearmente proprocional à entrada de dados.

# Quick Sort

Também utiliza da técnica de divisão e conquista. Sua estratégia de ordenação consiste em determinar um elemento pivô (nome dado ao elemento que divide o array em porções menores). Em seguida, todos os elementos maiores que o pivô serão colocados à direita e os menores à esquerda. Com isso, o pivô será colocado em sua posição correta e teremos duas subcoleções não ordenadas ao seu redor. Recursivamente ordenamos os sub arrays, repetindo o mesmo processo de escolha do pivô e particionamento(divisão).

O quicksort possui dois procedimentos:

- Função quicksort: a coleção será particionada de acordo com o pivô.
- Função partition: ela é a chave para o algoritmo. Nela a coleção será reorganizada.

Exemplo:
```
def quick_sort(numbers, start, end):
    if start < end:
        p = partition(numbers, start, end) 
        quick_sort(numbers, start, p - 1) # Os menores em relação ao pivô ficarão à esquerda
        quick_sort(numbers, p + 1, end) # Os maiores elementos em relação ao pivô ficarão à direita

# função auxiliar responsável pela partição do array
# escolhendo um pivô e fazendo movimentações dos sub arrays gerados

def partition(numbers, start, end):
    pivot = numbers[end]
    delimiter = start - 1

    for index in range(start, end):
        # o índice será o elemento em análise no momento, ele passará por todos os elementos
        if numbers[index] <= pivot:
          delimiter = delimiter + 1
          numbers[index], numbers[delimiter] = numbers[delimiter], numbers[index]

    numbers[delimiter + 1], numbers[end] = numbers[end], numbers[delimiter + 1]

    return delimiter + 1

numbers = [6, 5, 3, 1, 8, 7, 2, 4]
quick_sort(numbers, 0, len(numbers) - 1)
print(numbers)
```

Esta ordenação possui com complexidade 0(n log n), em um pior caso, ondeo array está ordenado de forma inversa, ocorrerá com complexidade 0(n²)

Quando é usada a função sorted padrão do python ou faz array.sort, é utilizado uma ordenadação chamada TimSort, que é um algoritmo híbrido que mistura o merge sort e insertion sort. Ele é utilizado pela linguagem Java para ordenar arrays também.

# Algoritmos de Busca

Algoritmos desta categoria buscam um item com uma determinada propriedade dentro de uma coleção, podendo esta coleção ser gerada elemento a elemento, a partir de uma série de operações (fórmula matemática, procedimento), não necessitando uma coleção de fato. Esses algortimos não devem ser associados somente com arrays. São considerados algoritmos desta categoria aqueles que fazem travessias em estruturas de dados com o propósito de encontrar um valor.

## Busca Linear

Consiste em percorrer toda a estrutura elemento a elemento, tentando encontrar o valor.

Uma busca simples, porém não a mais rápida, ja que realiza a verificação de todos elementos para encontra o correspondente.

Exemplo:
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
