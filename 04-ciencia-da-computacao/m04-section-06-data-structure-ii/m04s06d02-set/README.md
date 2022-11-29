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
