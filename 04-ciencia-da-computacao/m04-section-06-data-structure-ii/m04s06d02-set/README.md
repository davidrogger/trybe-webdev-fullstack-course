# Conceito de conjuntos

As implementações de conjuntos, nas linguagens, seguem as definições matemáticas de conjuntos. Para a matemática, um conjunto é uma coleção bem definida de elementos. Essa definição pode se dar por meio da listagem explícita dos elementos ou por meio da descrição dos elementos que o compõem:
```
# Listagem explícita:
# A = {1, 2, 3, 4, 5, 6}

# Descrição dos elementos
# B = {x | x é um número inteiro tal que 0 < x =< 6}
# Ou seja, x, onde x é um número inteiro tal que x menor igual a 6 e maior que
# zero. Ou seja, faz parte desse conjunto números maiores que 0 e menores
# iguais a 6 ({1, 2, 3, 4, 5, 6}).
```
As duas formas de descrever o conjunto acima resultam em conjuntos iguais. Porém, o conceito de igualdade entre conjuntos vai além: conjuntos são iguais se cada elemento de A pertence a B e se cada elemento de B pertence a A. Quais conjuntos abaixo são iguais?
```
A = {1, 2, 3}
B = {2, 1, 3}
C = {1, 1, 2, 2, 3, 3}
```

Os três conjuntos são iguais. O que nos leva a duas propriedades:

- A ordem não importa;
- É desnecessário manter cópias do mesmo elemento. Tudo o que precisamos que um conjunto descreva seus elementos únicos. As operações de "pertence" e "não pertence" são o que nos permite aplicar esse conceito, de igualdade. Essas operações constituem as operações básicas mais importantes de conjuntos que você já deve ter utilizado, em python, algumas vezes:
```
if element in colection:
    # ...

if element not in colection:
    # ...
```

# União

Todos os elementos que pertencem a A ou a B

<div align="center">
  <img
    src="./img/union.png"
    height="300px"
    width="300px"
    style="background:white; border-radius:10px;"
  \>
</div>

# Intersecção

Todos elementos que pertencem a A e a B

<div align="center">
  <img
    src="./img/intersection.png"
    height="300px"
    width="300px"
    style="background:white; border-radius:10px;"
  \>
</div>

# Diferença

Todos os elementos que pertencem a A e não pertencem a B

<div align="center">
  <img
    src="./img/difference.png"
    height="300px"
    width="300px"
    style="background:white; border-radius:10px;"
  \>
</div>

# Diferença Simétrica

Todos os elementos que pertencem exclusivamente a A ou a B

<div align="center">
  <img
    src="./img/simetric_diff.png"
    height="300px"
    width="300px"
    style="background:white; border-radius:10px;"
  \>
</div>

# Subconjunto

Não é uma operação. É qualquer conjunto em que todos os seus elementos pertencem ao conjunto maior (superconjunto). Conjunto Vazio e o próprio conjunto são subconjuntos dele mesmo.

<div align="center">
  <img
    src="./img/Subconjuntos.png"
    height="300px"
    width="300px"
    style="background:white; border-radius:10px;"
  \>
</div>

Casos em que o conjuntos são utilizados:

- Programa Educacional: um programa, temos acesso ao log de quem já entregou a avaliação 1 e de quem já entregou a avaliação 2. Queremos saber quem já entregou a 1, mas não a 2. Para isso, podemos criar uma função que verifique se uma pessoa consta no log de avaliação 1, mas não consta nos logs da avaliação 2. Os nomes dos alunos nos logs formam um conjunto, pois não são duplicados e a ordem das entregas não importa.
- SQL: um cenário onde operações sobre conjuntos são pesadamente utilizados são queries em bancos de dados. O comando SELECT cria um conjunto e comandos como UNION, INTERSECT e EXCEPT nada mais são do que operações sobre conjuntos. O SELECT cria um conjunto com linhas únicas. Utilizar um comando de conjuntos sobre os resultados de dois ou mais SELECT implicarão em eliminação de duplicados e desconsideração de ordem. [Explicação sobre set](https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%B5es_SET_(SQL))

# Conjuntos representados por vetores
```
A = {1, 2, 3}
B = {2, 3, 4}
```

Os elementos são números inteiros e pequenos, podemos fazer uso dos índices de um vetor de booleanos para identificar a presença ou não de cada elemento:
```
A = [False, True, True, True, False]
#      0     1     2     3     4
```

Para saber se um elemento pertence ao conjunto, basta verificar se A[2] é True, por exemplo. O acesso direto aos endereços do vetor, consulta, inserção e remoção, ocorrem em O(1). Os lados negativos dessa implementação são:

- Caso os elementos não sejam valores pequenos;
- Caso os elementos sejam valores muito esparsos, como {1, 1000, 20000}. Assim teríamos muitos espaços subutilizados na memória;
- Caso os elementos não sejam números

# Conjuntos representados por Dict

Casos em que o vetor não se mostra uma boa solução, contendo chaves sendo strings, podemos utilizar uma hashmap. Poderíamos mapear para qualquer coisa, uma vez que esses valores nunca serão acessados e estariam lá apenas porque a hash exige. Vamo usar booleanos, que ocupam pouco espaço.
```
A = {1, 2, 3}
# 0: False
# 1: True
# 2: True
# 3: True
# 4: False
# ...
```

É importante entender as operações sobre conjuntos por de baixo dos panos:

- Para entender a complexidade das operações, precisamos saber como elas são realizadas;
- Caso a linguagem com a qual estamos trabalhando não tenha uma representação de dicada. Ou seja, a linguagem não atende as nossas necessidades. Nesse caso teríamos que implementar as operações manualmente;
- Em entrevistas de algoritmos (whiteboards), se o problema em questão for implementar uma classe "Set", é evidente que nós não poderemos utilizar os métodos prontos. Teremos que saber implementar do zero. Observação: caso a estrutura de dados seja apenas auxiliar, não é necessário implementar do zero.

# Criando a classe Conjunto

Exercícios de fixação
Exercício 1: Inicializando a classe e adicionando elementos

Crie uma classe chamada Conjunto;

Escreva um construtor que defina uma lista do tamanho necessário. Inicialize todos os valores com False, uma vez que ainda não temos valores adicionados;

Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;

Na main (dentro de: if __name__ == "__main__":), instancie um objeto do tipo Conjunto e adicione os valores.
```
[0, 10, 100, 1000]
```

Exercício 2: Imprimir

Caso tenhamos que imprimir na tela o nosso objeto, o comando print(conjunto) não irá funcionar. O que será impresso é o endereço de memória onde o objeto está guardado, e não é isso que queremos. Para que o comando print funcione, precisamos que a nossa classe tenha um método chamado __str__ e é o que faremos agora:

Crie um método com a assinatura abaixo:
```
def __str__(self):
    # retorno: uma string que representa o seu objeto
```

Exemplos de entrada e saída:
```
A = {1, 2, 3}
# saída: '{1, 2, 3}'

B = {7, 2, 10}
# saída: '{2, 7, 10}'

C = {}
# saída: '{}'
```

A saída não precisa ser ordenada, até mesmo porque um conjunto não leva a ordem em consideração. A saída pode ser em qualquer ordem, mas provavelmente será mais fácil retornar em ordem. Teste seu método imprimindo os objetos que você criou.

Exercício 3: is_in

Caso queiramos saber se um elemento faz parte ou não do conjunto usando o operador in precisamos que a nossa classe tenha um método chamado __contains__ e é o que faremos agora:

Crie um método com a assinatura abaixo:
```
def __contains__(self, item):
    # retorno: True, caso o elemento faça parte. False, caso o elemento não faça parte.
```

Exemplos de entrada e saída:
```
A = {1, 2, 3}

# entrada: 1
# saída: True

# entrada: 0
# saída: False
```

Exercício 4: União

União: Todos os elementos que estão em A OU em B

- Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:
```
def union(self, conjuntoB):
    # retorno: outro objeto Conjunto com união do próprio objeto com o conjuntoB
```

- Na main, instancie dois objetos do tipo Conjunto. Preencha o primeiro com os valores de 1 a 10, e o segundo, com valores de 10 a 20;

- Imprima na tela a união dos dois conjuntos.

Exercício 5: Intersecção

Intersecção: Todos os elementos que estão em A E em B

Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:
```
def intersection(self, conjuntoB):
    # retorno: outro objeto Conjunto com intersecção do próprio objeto com o conjuntoB
```
Exemplos de entrada e saída:
```
A = {1, 2, 3}
B = {3, 4, 5}
# saída: {3}

C = {0, 3, 6, 9}
B = {12, 15, 18}
# saída: {}
```

# A classe set

Por baixo dos panos, a classe Set é uma modificação da classe Dict e não um vetor de booleanos. Set é um hashmap, mas não é um simples mapeamento da chave True, a classe set não guarda valor nenhum, ou seja, não está exatamente replicando uma estrutura do tipo "chave-valor", pois não há valor. Por isso, ocupa menos espaço do que um Dict, ao mesmo tempo em que mantém a eficiência das operações.

Set é uma coleção não ordenada de objetos imutáveis únicos. Por não se preocupar com a ordem, set não guarda a ordem de inserção e não é possível indexar elementos com [] como em listas ou Dicts. Assim como Dict, só é possível usar objetos imutáveis como chave. Mas dict admite guardar valores, então é possível mapear chaves para Dicts. Mas set não guarda valores e é um objeto mutável, então não é possivel guardar sets dentro de um set. Para resolver isso, existe o frozenset.

# Frozenset

São objetos idênticos a set, porém são imutáveis; uma vez instanciados, não é possível adicionar ou remover elementos e todos os métodos que realizam essas duas operações estão indisponíveis no frozenset. Todos os demais métodos de set funcionam em um frozenset. Para criar sets de set, o elemento de dentro precisa ser um frozenset.

# Operações básicas

A classe set oferece complexidade O(1) para as operações de inserção, remoção e consulta:
```
# Podemos instanciar um set vazio ou inicializar com valores de um objeto
# iterável, como uma lista
conjuntoA = set()

# Ao inicializar com valores de uma lista, os valores duplicados serão
# desconsiderados e a ordem de inserção será perdida.
conjuntoB = set([1, 1, 2, 3, 3, 3])

# Add - adiciona o elemento ao conjunto
conjuntoA.add(5)
conjuntoA.add(3)
conjuntoA.add(0)

# sets admitem objetos mistos. Ou seja, admitem ter _strings_ com _ints_
# dentro de um mesmo objeto, por exemplo.
conjuntoA.add('elemento')

# Temos 2 jeitos de remover elementos:
# - remove() causa erro caso o elemento não esteja no set;
# - discard() não causa erro caso o elemento não esteja no set.

# Não vai dar erro
conjuntoB.remove(3)

# Vai dar erro pois já removemos esse elemento e set não guarda duplicatas
conjuntoB.remove(3)

# Não vai dar erro
conjuntoB.discard(3)

# Pop - remove e retorna um elemento aleatório do set
# - set é um objeto iterável, mas não conseguimos garantir em que ordem os
#   elementos serão acessados.
# - A função pop () é útil quando queremos trabalhar com algum elemento do
#   set, mas não sabemos de antemão quais elementos estão dentro dele.
some_element = conjuntoA.pop()

# clear() remove todos os itens do set
conjuntoB.clear()

# Consulta
# A consulta é feita com o operador "in"
if 2 in conjuntoA:
    print("2 está em A")

if 7 not in conjuntoA:
    print("7 não está em A")
```
