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
