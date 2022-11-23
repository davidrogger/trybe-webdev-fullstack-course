# O que é uma pilha?

A estrutura de pilha é uma estrutura do tipo LIFO (Last In First Out), o último elemento a entrar na pilha é o primeiro a sair.

Sempre devemos remover o último item que entrou na pilha. Uma remoção de algum item do meio dará trabalho para reorganizar a pilha.

Assim como no mundo real, quando manipulamos uma pilha de pratos, só conseguimos efetuar "operações" no top da pilha. Adicionar um novo prato no topo da pilha é uma tarefa bem simples de ser realizada, assim como também a operação de retirar um prato da pilha para podermos utilizar no almoço. Claro que no mundo real podemos remover um prato do meio, mas convenhamos, dá trabalho. Na programação remover itens do meio da pilha também não é uma boa ideia.

Podemos criar uma pilha utilizando alguma outra estrutura de dados como listas encadeadas ou arrays, com a única diferença que todas as operações devem ocorrer com o elemento mais ao topo, ou seja, no último elemento adicionado.

![Adicionando numa pilha por etapa](./img/Adicionando%20numa%20pilha%20por%20etapa.png)

Se encontramos um elemento fechando na string, e a pilha estiver vazia, significa que fechamos algo sem antes abrir, ou seja, a string não está "balanceada". Se terminarmos a string, e houverem elementos na pilha ainda, significa que abrimos algo sem fechar depois. E se encontrarmos um símbulo na string, e o símbolo no topo da pilha for par diferente, significa que eles estão na ordem errada. O caso correto é quando terminamos a string com sucess, e a pilha está vazia!

# Operações comuns

Ao se manipular uma pilha, existem algumas operações que são comuns de serem utilizadas. São elas: push, pop e peek.

- push: adiciona um item ao topo da pilha, quando utilizando pilhas, podemos aidicionar novos valores apenas no topo dela.
- pop e peek: São usadas para ler valores do topo da pilha. Sua diferença é que a pop remove o item da pilha, e peek somente lê.

