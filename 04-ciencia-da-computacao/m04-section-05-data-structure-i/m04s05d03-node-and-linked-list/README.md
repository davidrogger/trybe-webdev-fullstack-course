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

# Encadeamento duplo

As listas normais têm seus nós ligados por ponteiros em somente uma direção. Mas e se precisarmos, percorrer a lista também no sentido oposto, nada impede de criar ponteiros no sentido oposto, fazendo com que cada nó aponte para o anterior e ao próximo.

A vantagem é mais facilidade de percorrer esta lista no sentido oposto. A desvantagem é que ocupamos mais espaço de memória, pois temos uma quantidade maior de ponteiros. Podemos construir nossos nós com mais de um ponteiro, isso possibilita montarmos estruturas diferentes, como as listas duplamente encadeadas, ou árvores por exemplo.

O principal motivo da evolução da lista encadeada para a lista duplamente encadeada é a capacidade de optimização em operações nas extremidades.

Neste caso como temos uma forma de guardar a primeira e a última posição, podemos obter complexidade O(1), em ambas operações insert e remove.

O primeiro nó da lista se chama HEAD, e o ultimo TAIL.

# Implementação de um Node

Será declarado o construtor da classe Node, declaramos a propriedade que indica o próximo elemento (next) como tendo o valor, por default, None:
```
class Node:
    def __init__(self, value):
        self.value = value  # 🎲 Dado a ser armazenado
        self.next = None  # 👉 Forma de apontar para outro nó

    def __str__(self):
        return f"Node(value={self.value}, next={self.next})"
```

Iniciando a estrutura da LinkedList:
```
class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length
```
# Inserir no início

Informando que o primeiro elemento inserido será o novo head_value
```
# from node import Node


class LinkedList:
    # ...

    def insert_first(self, value):
        first_value = Node(value)
        self.head_value = first_value
        self.__length += 1
```

Inserindo o valor 3, teremos o seguindo resultado:
```
LinkedList(len=1 value=Node(value=3 next=None))
```

Seguindo essa abordagem faz com que os elementos anteriores sejam sobrepostos pelo novo. Devemos indicar que o elemento atual, será o next do elemento que estamos inserindo.

O next será preenchido com o valor que está atualmente na head, para que o novo valor que está sendo inserido no início da lista, seja preenchido na variável head.

Assim inserindo um proximo número, teremos o resultado:
```
LinkedList(len=2 value=Node(value=1 next=Node(value=3 next=None)))
```

# Inserir no final

Deve-se informar que o elemento que estamos inserindo é o ultimo na estrutura de cadeia de nodes:
```
# from node import Node


class LinkedList:
    # ...

    def insert_last(self, value):
        last_value = Node(value)
        current_value = self.head_value

        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1
```

Está abordagem esteria correta, desde que houvesse ao menos um elemento em nossa estrutura. Porém, caso haja nenhum elemento, o trecho: while current_value.next: causaria o error: AttributeError: "NoneType" object has no atttribute "next".

Isso acontece, pois o head_value ainda não possui valor. Para corrigir essa lógica, podemos utilizar a função insert_first.

```
# from node import Node


class LinkedList:
    # ...

    def insert_last(self, value):
        last_value = Node(value)
        current_value = self.head_value

        # Mais abaixo criaremos o método is_empty()
        # que substituirá a condição deste if
        if current_value is None:
            return self.insert_first(value)

        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1
```

Foi necessario percorrer toda a cadeia de Nodes, pois assim não perdemos a referência para a cabeça da estrutura head.

# Inserir em qualquer posição

Deve-se informar o que o elemento que estamos inserindo seja adicionado na posição desejada em nossa estrutura.

A primeiro posição, assim como em arrays, é considerada como 0

Considerações:

- Se o elemento tem a posição inferior a 1, será adicionado na posição inicial, utilizando a furnção insert_first;
- Se o elemento tem a posição igual ou superior a quantidade de elementos, será adicionado na posição final, utilizando a função insert_last.
```
# from node import Node


class LinkedList:
    # ...

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.head_value
        while position > 1:
            current_value = current_value.next
            position -= 1
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1
```

A lógica é similar ao insert no final, não analisamos se existe um próximo, mas sim, se o próximo é a posição para inserir o novo valor.

# Remover no início

Removendo a head, em casos de estrutura vazia, retornando None:
```
# from node import Node


class LinkedList:
    # ...

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed
```

O elemento next passa a ser o primeiro elemento, já que a head irá referenciá-lo

# Remover no final

Devemos informar que o elemento que estamos removendo seja o último da nossa estrutura de cadeia de Nodes. Os problemas vistos na sessão Inserir no final também se aplicam aqui.

Caso tenhamos apenas um elemento em nosso estrutura, invocaremos a função de remoção existente, remove_first:
```
# from node import Node


class LinkedList:
    # ...

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.head_value

        while previous_to_be_removed.next.next:
            previous_to_be_removed = previous_to_be_removed.next

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed
```

# Remover em qualquer posição

Com a posição do elemento desejamos a remoção dele na estrutura.

Considerações:

- Se o elemento tem a posição inferior a 1, será removido na posição inicial, utilizando a função remove_first;
- Se o elemento tem ap osição igual ou superior a quantidade de elementos, será removido na posição final, utilizando a função remove_last.
```
# from node import Node


class LinkedList:
    # ...

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.head_value
        while position > 1:
            previous_to_be_removed = previous_to_be_removed.next
            position -= 1
        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed
```

Lógica similar ao remover do final, no entento não analisamos se existe um próximo, mas se o próximo é a posição que queremos remover.

