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

