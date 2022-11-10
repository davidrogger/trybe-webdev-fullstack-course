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

Assim como nos algoritmos de força bruta, no pior caso do buble sort ele será 0(n²).