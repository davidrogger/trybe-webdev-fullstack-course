anotações pessoais.

# Bloco 4.1

## JS - Primeiros passos

Por que JavaScript? <br>
Principais motivos, importantes, é um linguagem apontada na pesquisa do Stack Overflow nos ultimos 8 anos, como a mais popular.<br>
JavaScript é versátil, além de ser usado na sua principal área web, ele também é usado em diversas outras áreas, como num servidor (back-end), com node, manipulação de dados através de diversos drivers, com react native em mobile, electron em desktop. <br>
JS é a porta de entrada para inumeras empresas que usam essas técnologias. <br>

## História JS

Em 1995 NetScape contrata Brendan Eich com o desafio de colocar uma linguem de programação chamada Scheme dentro do navegador, parecida com JS, o mais rápido possivel. (não ficou claro em que ponto ele largou a scheme para iniciar a mocha). <br>

Primeiro nome dado ao JS foi Mocha, era uma mistura de java com c, trazendo novas tecnologias avançadas, linguagem era multiparadigma, não sendo exclusiva para navegadores, em seguida nomearam de mocha para livescript, e depois com o sucesso de Java na época, foi finalmente nomeado JavaScript.

Com o constante crescimento da Microsoft na época (1996), ele criaram o famoso Internet Explorer, e criaram uma linguagem com base no JS, chamado JScript, as linguagem era praticamente identicas.
Com o crescimento da internet na época, foi então que a Netscape, solicitou uma padronização para ECMA, que é uma organização neutra, responsavel por padronizações na área de TI. <br>
Em 1997 nśo temos a primeira versão ECMA-262 também conhecido como ECMAScript, fornecia diversos guias de forma padrões para implementar o JavaScrip nos navegadores.

## Variaveis

## Variaveis

**let**, a informação contida em let, pode ser reatribuida, exemplo: se ela recebeu 20 em um determinando momento, ela pode receber outro valor, sendo prescrevido o valor 20, pelo outro valor inserido.
**const**, não pode ter um valor reatribuido, se foi colocado o valor 20 em const, ele não pode ser alterado.

## Tipos Primitivos

**undefined**, variaveis que não tem nenhum tipo definido.
**null**, variavel sem valor.
**String**,  representa valores, representado por caracteres, números, caracteres especiais(textos em si).
**Number**, representa, valores números, sejam eles inteiros(1) ou flutuantes(1.1), usados para calulos.
**Boolean**, é representado como TRUE ou FALSE, se é verdadeiro ou falso, em uma condição.

## Tipagem Dinâmica

JS possui uma tipagem dinâmica, pois mesmo sem indicar que tipo de variavel ela é, ele consegue identificar pelos padrões de tipagem.

## Operadores Aritméticos

`+ Soma`
`- Subtração`
`* Multiplicação`
`** Exponecial`
`/ Divisão`
`% Resto da divisão`
`++ Incrimento`
`-- Descremento`

## Condições

if, condição de se algo for verdadeiro
else, se não faça esse outro algo.

### Extrutura de condições

```
if (condicao) {
    //codigo
}
else if (outra condicao) {
    //outra condição
}
else {
    // nenhuma das condições acima atendidas
}
```

## Operadores lógicos

```
&& AND "As duas condiões devem ser verdadeiras para o resultado ser verdadeiro.
|| OR Uma das condições deve ser verdadeira, para o resultado ser verdadeiro
! NOT Diferente, a condições deve ser diferente daquele argumento indicado.
```

## Switch e Case

Extrutura:
```
let trafficLight;
switch (trafficLight){
  case "vermelho":
  console.log("pare");
  break;

case "amarelo":
  console.log("atenção);
  break;

case "verde":
  console.logo("siga");
  break;

default:
  console.log("valor não identificado");
}
```
# Array

Existem dois tipos devariaveis as simples, que armazenam **uma** informação e as compostas que podem ser compostas por diversas informações dentro da mesma variavel. <br>
A composição da variavel array, é por meio de colchetes `variavel []`, dentro dos colchetes, cada informação é divida por meio da vírgula. Para cada informação dentro de uma virgula é dado o nome de chave, ou indice, também é considerado como indice zero, ou seja, sua contagem começa apartir do 0, para apresentarmos o primeiro valor do array, deve ser o número 0 e não o 1.<br>

### Alguns comandos:
```
variavel.length = usado para mostrar a quantidade total de chaves dentro daquele array.
variacel.sort() = usado para organizar as informações dentro do array, em forma alfabética.
variavel.unshift(itemAdicionado) = usado para acrescentar uma informação dentro do array no começo da "fila".
variavel.push(itemAdicionado) = usado para acrescentar uma informação dentro do array no final da "fila".
variavel.pop(itemAdicionado) = usado para remover uma informação dentro do array no final da "fila".
variavel.shift(itemAdicionado) = usado para remover uma informação dentro do array no começo da "fila".
variavel.indexOf(item); usado para localizar a posição do item dentro do array.
```

## FOR

É usado para criar um laço de repetição, até ele completar uma determinada condição, ele irá repetir isso.

### Extrutura
```
for (let contatdor = 0; contador < variavel; contador += 1){
  repetição
}
```
Nesse exemplo, criamos dentro do for uma variavel, para determinar quais as condições, atribuindo 0(let contatdor = 0), ele irá comparar o contador a uma variavel(contador < variavel), enquanto o contador for menor quela, ele irá executar a tarefa dentro das chaves, e toda vez que for executado ele irá incrementar 1 no contador(contador += 1).

### FOR/OF

Usado normalmente para mostrar o conteúdo dentro de um array, é possivel adicionar informação, mas ele nunca altera o array, somente mostra a alteração sobre o conteúdo mostrado.

## Algoritmos

Receita do bolo, seria o passo a passo de como algo deve ser executado.

### Complexidade de código

Para medir a complexidade de um código, exite a complexidade ciclomática, quanto maior for a complexidade ciclomática, mais dicil é de fazer o acompanhamento do código, sua manutenção e testagem.

## Objetos
