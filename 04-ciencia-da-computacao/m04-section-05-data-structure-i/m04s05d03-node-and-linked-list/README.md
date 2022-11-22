# Nó

É um TAD responsável por conter pelo menos duas coisas:

- Um valor (qualquer tipo)
- Um ponteiro (para o espaço de memória de outro Nó)

Simplificando, imagine que uma variável é uma gaveta, onde cabe um valor de um determinado tipo. O nó, é como uma gaveta com duas partes, em uma delas fica o valor e na outra a localização da outra gaveta(nó).

A parte da gaveta que possui a localização é chamada de ponteiro, pois ele aponta para outro elemento nó. Este ponteiro aponta para o endereço de memória onde o próximo nó está alocado na memória RAM. Note que este segundo nó também terá um ponteiro de outro Nó, e assim sucessivamente quantas vezes quisermos, até que o último Nó terá um ponteiro nulo (null), que não aponta para nada.

Um nó não tem valor sozinho, mas quando encadeado ou ligado com vários outros nós em sequência, ele se torna uma lista encadeada.

# O que é uma lista encadeada?

Cada nó contém um valor além do ponteiro, temos assim uma estrutura capaz de conter uma quantidade indefinida de elementos em sequência.

Listas encadeadas, também conhecidas como listas ligadas(linked lists), são um TAD capaz de armazenar elementos de forma sequencial.

Tendo basicamente a mesma estrutura que do array, porém sua ordem de complexidade de operações é bem diferente.

Quando temos um array, existia todo um trabalho para redimensionar a estrutura, quando inserindo e removendo elementos. Ja com as linked lists não possuem alguns destes problemas. Como cada nó que compõe a lista tem um endereço de memória, não é necessário alocar todos elementos da lista de forma sequencial, proximo um ao outro, e também não é necessário escolher um tamanho inicial para a lista encadeada quando ela é criada.

Comparando o array com a linked list:

- Inicialização: para o array, é necessário escolher um tamanho inicial. Isto pode ser problemático se não souber o valor de antemão quantos elementos esta estrutura precisará armazenar; estimar errado pode desperdiçar memória com espaço não utilizado, ou se precisarmos de um array maior vamos ter que criar outro e realocar todos os elementos. Já para linked list, basta criar os primeiros elementos. Se não forem adicionados mais, a lista não está desperdiçando espaço, e caso precise de mais itens, basta criar eles em qualquer lugar da memória e alterar os ponteiros da lista já existente para apontar para os novos elementos, de acorodo com a ordem desejada.

- Busca e Acesso: onde o array leva vantagem. No array, sabemos exatamente a posição de cada elemento na memória, então se precisarmos acessar um específico, já sabemos o endereço. Porém em uma lista encadeada os elementos estão espalhados. Para buscar o enésimo número da lista, é necessário percorrer os N números, buscando ponteiros para achar o próximo. Esta operação pode ser mais custosa.

Um detalhe importante é que, para realizar a inserção em uma lista encadeada, é necessário buscar esta posição. Para saber qual estrutura é melhor em casos de inserção, precisamos somar o custo de busca e de inserção. Portanto, para comparar o tempo de inserção em arrays com o tempo de inserção em listas encadeadas, precisamos levar em consideração também o tempo de busca em cada uma destas estruturas, de forma a termos o custo total da operação.

- Inserção: Inserir em um array tem três casos:

1. O espaço em que queremos inserir está vago. Neste caso, a operação é extremamente simples e rápida.
2. O espaço em que queremos inserir já está ocupado. Neste caso, a operação é extremamente simples e rápida.
3. O espaço em que queremos inserir não existe no array. Neste caso, precisamos criar um array novo, com as novas dimensões desejadas, transferir todos os elementos, e então inserir o novo. Também é bem custoso.

Já para uma linked list, todas as inserções são extremamente rápidas. Para inserir no final, apenas é criado um novo nó em qualquer lugar da memória e é apontado no ultimo nó anterior para esse novo nó que foi criado, fazendo com que este passe a ser o último. Para inserir no começo, ou no meio não é necessário mover ninguém de lugar, é criado um novo nó e ajustado os ponteiros.

Exemplificando:
Supondo que temos uma lista com os nós A e C, sendo A  aponta para C (ou seja, A é o primeiro elemento, C é o segundo). Se quisermos inserir um nó B entre o A e o C, primeiramente criamos o novo nó B e fazemos ele apontar para o elemento que o A aponta (que neste caso é o C). Em seguida, fazemos A apontar para B.

LinkedLists não tem as restrições de acesso como nas seguintes TADs:

- FILA: Acessa apenas o primeiro elemento;
- PILHA: Acessa apenas o último elemento;
- DEQUE: Acessa apenas as extremidades - Deque

Uma lista encadeada possibilita acessar qualquer elemento, sem exceção.

# Quais as operações mais comuns?

- insert_first nos permite adicionar um `Node` no início da lista(O(1));
- insert_last nos permite adicionar um `Node` no final da lista(O(n));
- insert_at nos permite adicionar um `Node` em qualquer posição da lista(O(n));
- remove_first nos permite remover um `Node` do final da lista(O(1));
- remove_last nos permite remover um `node` do final da lista(O(n));
- remove_at nos permite remover um `Node` em qualquer posição da lista(O(n));
- clear nos permite remover todos os `Node`s da lista(O(n));
- get_element_at nos permite visualizar o `node` em qualquer posição da lista(O(n));
- is_empty nos permite identificar se existe ao menos um `Node` na lista(O(1))

