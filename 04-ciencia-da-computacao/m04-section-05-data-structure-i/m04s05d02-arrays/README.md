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
