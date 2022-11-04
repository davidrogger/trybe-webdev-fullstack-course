# Recursividade

Uma função que chama a si mesma é chamada de recursiva. O processo pra executar tal função recursiva é chamado de recursividade.
Não se usa for ou while, mas se usa if para determinar a condição de parada, evitando um loop.

# Leis da recursão

Um código recursivo sempre deve ter um;

- Caso base: que define quando ele vai parar
- Caso recursivo: quando ele deve chamar a si mesmo.

Exemplo:
Função countdown tem o objetivo de fazer uma contagem até zero apartir de um número:
```
def countdown(n):
    print(n)
    countdown(n - 1)  # chamada recursiva

countdown(5)
```

Nesse caso temo somente um caso recursivo, onde ele chama a si, gerando um loop sem base, que nunca irá parar.

Para essa recursão funcionar deveria seguir o exemplo:
```
def countdown(n):
    if n == 0: # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1) # caso recursivo

countdown(5)
```

Nesse caso, ele só chama a si mesmo, se o n for diferente de 0, e caso seja igual a 0, ele imprime o FIM, e não chamaria mais a propria função.

Sendo assim temos 3 leis importantes:

1. Um algoritmo recursivo deve ter um caso base: quando falamos de recursão, devemos sempre lembrar do caso base, pois sem ele nosso algoritmo ficará executando infinitamente.

2. Um algoritmo recursivo deve mudar o seu estado e se aproximar do caso base: após o início da execução de um algorimo recursivo, a cada nova chamada a ele mesmo, o seu estado deve se aproximar progressivamente do caso base.

3. Um algoritmo recursivo deve chamar a si mesmo, recursivamente: Essa lei é a própria definição de recursão.


## Estrutura de uma função recursiva:
```
Nome da função e parâmetro:
    Condição de parada

    Chamada de si mesma
```

1. Declaramos uma função com um parâmetro.
2. Dentro da função criada, definimos qual é a condição de parada da função.
3. A condição de parada faz uma comparação entre o valor da condição como o parâmetro que a função está recebendo. Caso a condição não se satisfaça, a função é chamada novamente com um novo parâmetro. Caso contrário a execução para na condição de parada.

# A pilha de chamadas

A pilha de chamadas, conhecida como call stack, organiza as sub-rotinas que estão executando no computador. Trazendo para o contexto de recursividade, a pilha de chamadas registra a execução das funções ou seja está sendo executada, em que ponto ela deve retornar, qual é a proxima a ser chamada, etc.

Exemplo:

Uma função A está sendo executada e durante a sua execução ela precisa do resultado do processamento de outra função B a qual ela chama. Diante disso, a funçãoA ficará aguardando na pilha de chamadas enquanto a função B executa. Quando B terminar, seu resultado voltará para A que vai continuar sua execução.

- Toda vez que chamamos uma função em um programa, o sistema operacional reserva memória para as variáveis e parâmetros da função;
- Sempre quando uma função é executada, ela é aguardada na pilha;
- Quando a função termina de ser executada, ela sai da pilha.

```
def saudacao():
    print("Oi")

def despedida():
    print("Tchau")

def init():
    print("Inicio")
    saudacao()
    print("Fim")
    despedida()

init()
```

# Iterativo x Recursivo!

Escolher entre uma solução e outra depende muito da necessidade.

- Escolher uma solução recursiva, não significa ganho de performance, muito pelo contrário, grande parte das vezes, a solução iterativa será mais perfomática.
- Escolher s olução recursiva terá um ganho na diminuição de complexidade do código do projeto. Complexidade = legibilidade. O código fica mais simples, mais harmonioso, quando utilizado a recursividade.

# Análise de algoritmos recursivos

## Árvore de recursão

Pode ser usado para estimar o curso de um algoritmo. É um medo de analisar o seu custo, o que ajuda a decidir se tal solução vale apena ou não.

Pode-se visualiar nível por nível da estrutura de um algoritmo recursivo, pro meio da árvore. No final, tem-se uma estimativa de tempo do problema.

Exemplo:
```
def fibonacci(num):  # nome da função e parâmetro
    if (num <= 1):  # condição de parada
        return num
    else:
        return fibonacci(num - 2) + fibonacci(num - 1)  # chamada de si mesma com um novo valor
```
Usando um código recursivo para cálculo de Fibonacci.
Visualizamo a representação do algoritmo Fibonacci resursivo abaixo, convertido em uma estrutura de árvore:

![Fluxograma Fibonacci Recursivo](/04-ciencia-da-computacao/m04-section-04-algorithms/m04s04d02-recursivity-strategy-to-solve-challenges/m04s04d02-follow-material/Fluxograma%20Fibonacci%20Recursivo.png)

Cada nó da árvore acima representa o custo da solução de um subproblema. Quando olhamos para árvore como um todo, quando expandimos ela, podemos somar todos os custos de cada nível dessa árvore e então teríamos o resultado total do problema.

O problema começa com apenas um nó e vai decompondo até alcançar os casos base, que são as "folhas" da árvore. Folhas são, basicamente, nós da estrutura que não possuem nenhum nó abaixo deles.

Analisando de forma interativa, como essa árvore chegou a esse resultado passo a passo:

![Exemplo retirado do site: www.visualgo.net/en/recursion](/04-ciencia-da-computacao/m04-section-04-algorithms/m04s04d02-recursivity-strategy-to-solve-challenges/m04s04d02-follow-material/gif%20Arvore%20recursao%20fibonacci.gif)

# Principais cuidados ao usar recursão

Chamadas de funções ocupam memória já que toda vez que uma chamada é feita, o SO reserva memória para as variáveis e parâmetros.

Quando um loop recursivo é muito, ele ferá muitas chamadas, e quando ele faz muitas chamadas podemos ter um stack overflow (que não é apenas o fórum de ajuda para devs). O stack overflow, ou estouro de pilha, significa que ficaríamos sem memória para continuar com a execução do programa.

Para evitar um estouro de pilha, é importante que as chamadas recursivas parem. Para que consigamos fazer as chamadas recursivas pararem é importante lembrarmos sempre de implementar a condição de parada na função.

Apesar de funções recursivas serem mais harmoniosas e fáceis de implementar, elas costumam ser menos eficientes que do que as iterativas, por causa do overhead de empilhar e desempilhar chamadas de funções.

Não é tão simples decidir quando usar uma solução recursiva para um problema, mas você vai perceber que alguns problemas são muito mais fácieis e intuitivos de serem resolvidos recursivamente. É nesses casos que a recursã ovale apena.
