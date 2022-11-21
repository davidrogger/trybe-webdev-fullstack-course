# Nó

É um TAD responsável por conter pelo menos duas coisas:

- Um valor (qualquer tipo)
- Um ponteiro (para o espaço de memória de outro Nó)

Simplificando, imagine que uma variável é uma gaveta, onde cabe um valor de um determinado tipo. O nó, é como uma gaveta com duas partes, em uma delas fica o valor e na outra a localização da outra gaveta(nó).

A parte da gaveta que possui a localização é chamada de ponteiro, pois ele aponta para outro elemento nó. Este ponteiro aponta para o endereço de memória onde o próximo nó está alocado na memória RAM. Note que este segundo nó também terá um ponteiro de outro Nó, e assim sucessivamente quantas vezes quisermos, até que o último Nó terá um ponteiro nulo (null), que não aponta para nada.

Um nó não tem valor sozinho, mas quando encadeado ou ligado com vários outros nós em sequência, ele se torna uma lista encadeada.
