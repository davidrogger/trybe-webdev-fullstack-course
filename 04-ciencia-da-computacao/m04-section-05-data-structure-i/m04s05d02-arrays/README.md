# Tipo Abstrato de Dados: Lista Linear

É um Tipo Abstrato de Dado (TAD) que define uma coleção sequencial e mutável de elementos que são acessados atráves do índice.

## Tipos Abstratos de Dados (TADs)

São espécies de documentos que servem para definir:

1. Conjuntos de dados;
2. Operações que podem ser executadas sobre esses dados.

Esses documentos não especificam como será a implementação, mas simplesmente fornecem uma interface mínima esperada e um conjunto de comportamentos.

Exemplo, para pode chamar um objeto de carro, ele deve ter pelo menos algumas características, como, quatro rodas, ser movido a motor, volante, acelerador, freio, se locomover em ambiente terrestre e plano, espaço para pelo menos 1 motorista e talvez pessoas passageiras.

Definição de TAD lembra a definição de classes abstratas e interfaces da Orientação a Objetos, e não é coincidência, Historicamente esta metodologia de abstração foi incorporada à própria linguagem de programação para um protótipo do que hoje conhecemos como orientação a objetos.

Existem diversos TADs que são usados no dia a dia sem sabermos, como filas, mapeamentos, conjuntos, pilhas, grafo...

# Exercício de Fixação
1. Tipos abstratos de dados possuem uma única implementação bem documentada?
Não, ele possuem uma documentação com a interface minima esperada.

2. Listas(list), dicionários(dict) e conjuntos(set), que já vêm no Python, são considerados tipos de dados? Caso negativo, justifique sua resposta.
Sim, pois ela tem uma estrutura de dados minima, de como devemos usa-las.

# Implementando o TAD Lista Linear com Arrays

O tipo list do python não é um array puro, pois um array puro somente armazena elementos de um mesmo tipo (e listas no python não tem essa limitação). Mas o tipo list utiliza parte da lógica de Array e isso será suficiente para entender suas vantagens e desvantagens.

Implementando um jeito de recuperar e armazenar um dado através do índice:
```
"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""


class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)


# vamos inicializar e preencher uma estrutura de dados array
array = ListaArray()
array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1
```
# Entendendo a estrutura

Para entender o que acontece a cada inserção na nossa ListaArray, devemos entender o comportamento de uma lista (list), pois é a base da implementação da estrutura de dados.

```
import sys

# class ListaArray:
#     def __init__(self):
#         self.data = []
# ...
# array = ListaArray()

# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)

# ...
```

Quando inicializada a estrutura ListaArray internamente é inicializado uma lista vazia, adicionando alguns itens, um espaço adicional é reservado para armazenar os itens. O tamanho de cada slot é baseado no tamanho do tipo que vamos armazenar.

No caso do Python, o tipo que fica armazenado é apenas o endereço de memória de cada objeto. É assim que a classe list consegue armazenar elementos de diversos tipos sem se preocupar com o tamanho de cada objeto armazenado.

Inserindo alguns itens para comprar o resultado:
```
# ...

array.set(0, "Marcos")
array.set(1, "Patrícia")
# quando começamos as inserções o valor muda
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 56

array.set(2, "Matheus")
array.set(3, "Giovana")
# como um espaço adicional é reservado o valor não é modificado
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size) # 88

```

Inserindo mais valores:
```
# ...

array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size) # 120

```

A lista cresceu de tamanho à medida que foram adicionados novos itens. De acordo com a documentção, a cada vez que um elemento é inserido, a lista cresce em 1.125.

À primeira vista parece que a estrutura apenas aloca mais espaço em memória e adiciona novos itens, o que acontece na verdade é que, quando há um crescimento, um novo endereço na memória é reservado para uma nova lista. Em seguida, os elementos são copiados da lista original para a nova, e então o novo elemento é adicionado ao espaço de memória da nova lista.

Para ter uma perspectiva visual:
```
# Supondo uma lista com 4 valores numéricos:
            *---*---*---*---*
original    | 1 | 2 | 3 | 4 |   posição na memória: 0x01
            *---*---*---*---*

# Ao adicionar um novo item, a lista precisa crescer:
            *---*
novo item   | 5 |
            *---*
            *---*---*---*---*
original    | 1 | 2 | 3 | 4 |    posição na memória: 0x01
            *---*---*---*---*

# Uma nova lista é criada:
            *---*---*---*---*---*---*---*---*
nova        |   |   |   |   |   |   |   |   |    posição na memória: 0x1A
            *---*---*---*---*---*---*---*---*

# Os elementos da lista original são copiados para a nova lista:
            *---*---*---*---*
original    | 1 | 2 | 3 | 4 |    posição na memória: 0x01
            *---*---*---*---*
              ↓   ↓   ↓   ↓
            *---*---*---*---*---*---*---*---*
nova        | 1 | 2 | 3 | 4 |   |   |   |   |    posição na memória: 0x1A
            *---*---*---*---*---*---*---*---*

# O novo elemento é colocado na nova lista:
            *---*
novo item   | 5 | -------------
            *---*             ↓
            *---*---*---*---*---*---*---*---*
nova        | 1 | 2 | 3 | 4 |   |   |   |   |    posição na memória: 0x1A
            *---*---*---*---*---*---*---*---*

# O endereço onde se encontrava a lista antiga é liberado para ser utilizado
# e o "nome original" é atribuído a nova lista:
            *---*---*---*---*---*---*---*---*
original    | 1 | 2 | 3 | 4 | 5 |   |   |   |    posição na memória: 0x1A
            *---*---*---*---*---*---*---*---*
```

Essa organização em espaço contínuos em memória torna o acesso a índices muito eficiente, pois basta pegar o endereço em memória do primeiro elemento e somar ao índice, multiplicando pelo tamanho do tipo armazenado e teremos o valor daquela posição. Pode-se ter dez,cem ou mil itens que o tempo para acessar o valor pelo índice será o mesmo.

A decisão por criar uma nova lista e copiar os valores parece esquisita, mas a operação de realocação tem um custo muito grande.

Inserimos somente ao final do array. Mas se precisarmos adicionar um elemento no início, ou no meio?
```
# ...
# array = ListaArray()

array.set(0, "Marcos")
array.set(1, "Patrícia")
# print(array), internamente chama o método array.__str__() que implementamos
print(array)  # saída: ["Marcos", "Patrícia"]

# inserindo no começo do array
array.set(0, "Valeria")
print(array)  # saída: ["Valeria", "Marcos", "Patrícia"]

# inserindo em uma posição intermediária
array.set(1, "Miguel")
print(array) # saída: ['Valeria', 'Miguel', 'Marcos', 'Patrícia']

```

Quando é inserido um novo elemento no início do array, todos os elementos já existentes são deslocados à direita, tendo seu índice modificado em 1. Análogo a isto, quando adicionamos em uma posição intermediária, todos os elementos com índices posteriores ao inserido serão movidos em uma posição.
```
# Supondo uma lista com 4 caracteres ao qual adicionaremos mais um no início:
            *---*
novo item   | a |
            *---*
              ↓
            *---*---*---*---*
original    | b | c | d |   |    posição na memória: 0x01
            *---*---*---*---*
                ⤻  ⤻  ⤻

# Os elementos são deslocados para o próximo índice.

            *---*---*---*---*
original    | a | b | c | d |    posição na memória: 0x01
            *---*---*---*---*


# As regras de crescimento ainda se aplicam portanto pode ser que uma nova lista
# seja criada, o elemento adicionado e os elementos copiados para a nova lista.
# Ainda assim, o índice de todos os elementos posteriores a inserção
# serão acrescidos em 1.
```

Mesmo acontece inserindo um novo elemento no meio:
```
# Supondo uma lista com 3 caracteres ao qual adicionaremos mais um na segunda posição, vulgo índice 1:
(inserimos b na posição 1).

                *---*
novo item       | b |
                *---*
                  ↓
            *---*---*---*---*
original    | a | c | d |   |    posição na memória: 0x01
            *---*---*---*---*
                    ⤻  ⤻

# O resultado final seria:
            *---*---*---*---*
original    | a | b | c | d |    posição na memória: 0x01
            *---*---*---*---*
```

Ocorre o mesmo quando fazemos remoção de um valor à partir do índice:
```
# Supondo uma lista com 4 caracteres ao qual removeremos um elemento

# Se removermos o último elemento (índice 3), nada precisa ser modificado

         *---*---*---*---*
array    | a | b | c |   |    posição na memória: 0x01
         *---*---*---*-⤹-*
                        d

# Porém se removermos o primeiro, ou qualquer outro índice,
# todos os valores serão deslocados à esquerda:
                 ⤺  ⤺  ⤺
         *---*---*---*---*---*---*---*---*
array    | a |   | c | d | e |   |   |   |    posição na memória: 0x01
         *---*-⤹-*---*---*---*---*---*---*
                b

# À medida que itens são removidos, a estrutura diminui em tamanho:
         *---*---*---*---*
array    | a | c | d | e |    posição na memória: 0x01
         *---*---*---*---*
```

Código de remoção:
```
# import sys

class ListaArray:
    # ...
    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

# ...
# array = ListaArray()
array.set(0, "Marcos")
array.set(1, "Patrícia")
print(array)  # saída: ['Marcos', 'Patrícia']

array.remove(0)  # retorna a string "Marcos"
print(array)  # saída: ['Patrícia']

```
