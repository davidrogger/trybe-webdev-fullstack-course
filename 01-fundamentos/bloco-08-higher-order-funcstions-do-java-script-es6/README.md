anotações pessoais...

# Firs-class citizens

São variaveis, que são usadas como input, parametros, para alguma determinada ação, operação...


# First-Class Functions

Tem funções com tratamento de firs-class citizens, são funções que são colocadas dentro de uma variavel assim como as arrow functions.

`const firsClass = () => {console.log('Essa variavel recebeu essa função )};`

# Higher Order Functions

São funções que recebem outra função como parametro ou retornam uma função.

# HOFs que são utilizadas com arrays

## [array.forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp);

Syntax
`array.forEach((itemValue, index, array) => {})`
itemValue: Obrigatório
index: opcional
array: opcional

Essa HOF, obrigatóriamente precisa ter uma função que será executada para cada item do array, indicado no começo da syntax.
Exemplo
```
const nomes = ['David', 'Jonas', 'Nizuk'];

names.forEach((ItemValue) => console.log(ItemValue));
```
Nesse forEach, eu indiquei que o array era o names, para cada array, ele irá mostrar no console o valor dele, tendo como resultado, Davíd, Jonas, Nizuk, em sequência.

Existe também a possibilidade de apenas chamar a função, sem apontar o itemValue, por padrão ele vai considerar o parametro na função chamada como o valor dentro do array.
Somente o ultimo parametro do forEach é opcional na maioria das execuções, ele mostra todo valor do array, que está sendo tratado, que nesse caso, seria `['David', 'Jonas', 'Nizuk']`.

## [array.find()](https://www.w3schools.com/jsref/jsref_find.asp)

Syntax
`array.find((itemValue, index, array) => {})`
itemValue: Obrigatório
index: opcional
array: opcional

Segue o mesmo padrão do forEach, porém só retorna o valor do array, caso a seja verdadeira a confição passada dentro da função callback apontada no find.

Exemplo
```
const arrayNumbers = [10, 20, 30, 50];

arrayNumbers.find((itemValue) => itemValue > 25); // retorna 30
```


## array.some() and array.every()

Some e every, são similares, some, retornar true se um dos valores atenderem as condições estabelecidas no callback, e every, todos valores devem bater para retornar true.

## [array.sort()](https://www.w3schools.com/js/js_array_sort.asp)

É usado para ordenar uma array, em ordem alfabética, em situações numéricas, ele ordena na ordem alfabética dos códigos usando a tabela de caracteres unicode.
Para ordenar de forma crescente numérica, devemos passar uma função no sorte.
```
const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]
```
A lógica é a seguinte: a função recebe, da sort , todos os elementos do array, em pares (elemento1, elemento2) , e vai comparando-os. O formato é meuArray.sort((elemento1, elemento2) => /* logica da função */) . Ou seja: para o array [1, 2, 3, 4] , a função receberá (a=2, b=1) , (3, 2) , (4, 3) como parâmetros e ordenará o array com base em seu resultado. Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente, só inverter elemento1 - elemento2 para elemento2 - elemento1 .

## [array.filter](https://www.w3schools.com/jsref/jsref_filter.asp)

Usado para filtrar elementos de um array, ele sempre retorna um array com os elementos que atender as condições estabelecidas no callback/função nela.

Syntax
`array.filter((itemValue, index, array) => {})`
itemValue: Obrigatório
index: opcional
array: opcional

Exemplo:
```
const studantsData = [ { nome: 'David', nota: 2 }, { nome: 'Jonas', nota: 7 }, { nome: 'Nizuk', nota: 10 }];

studantsData.filter((itemValue) => itemValue.nota > 5)

retorna um array = [{ nome: 'Jonas' nota: 7 }, { nome: 'Nizuk' nota: 10 }]
```


## [array.map()](https://www.w3schools.com/jsref/jsref_map.asp)

Maps, é usado para retornar um array, com a manipulação do array indicado.

Syntax
`array.map((itemValue, index, array) => {})`
itemValue: Obrigatório
index: opcional
array: opcional

Exemplo:
```
const numbersArray = [2, 5, 6, 11];

numbersArray.map((itemValue) => itemValue * 2);

retorna outra array = [4, 10, 12, 22];
```
## [array.reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp)

Segue o mesmo padrão que os anterios, acrescentando uma propriedade, o accumulator;

Syntax
`array.reduce((accumulator, itemValue, index, array) => {}, accumulatorInicialValue)`
accumulator: Obrigatório
itemValue: Obrigatório
index: opcional
array: opcional

O accumulator ele é onde fica "acumulado" o resultado de cada itaração com o array, você pode também detarminar qual é o valor inicial do accumulator, sendo até mesmo uma boa prática sempre indicalo, sendo um ponto de partida, para a finalização do reduce.

Exemplo:
```
const numbers = [2, 3, 10, 15];

numbers.reduce((accumulator, itemValue) => accumulator + itemValue, 0); // retorna 30;
```

Neste exemplo é indicado que o valor inicial do accumulator é 0, logo a primeira execução do reduce, ele irá, realizar accumulator (0) + itemValue (2), atualizando o valor do accumulator para 2, que é o resultado da função estabelecida, seguindo de 2 + 3, 5 +10, 15 + 15, resultando em 30.
Caso o valor inicial do accumulator não seja indicado, ele pega o primeiro valor do array, para representar o valor do accumulator, e o itemValue, começa a ser o segundo valor, seguindo o mesmo array de cima;
```
numbers.reduce((accumulator, itemValue) => accumulator + itemValue); // retorna 30;
```
Sequencia seria 2 + 3, 5 + 10, 15 +15;

Accumulator sempre vai aderir ao resultado da função.

## [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

Foi incluso no ES6, é usado para unificar arrays ou objetos da seguinte forma.

Syntax
`...array ou ...obj`
Usando os 3 pontos a esquerda, pode se unificar arrays/objetos distintos.

Exemplo:
```
const array1 = [1, 5, 9];
const array2 = [4, 7, 8];
const fusionArray = [...array1, ...array2] //output: [1, 5, 9, 4, 7, 8]

const obj1 = {nome: João, idade: 24}
const obj2 = {profissao: pintor}
const fussionObj = {...obj1, ...obj2} //output  { nome: João, idade: 24, profissao: pintor } 
```
Lembrando que a ordem colocada, afeta em como o resultado será, se for invertido a posição dos arrays ou objs no exembro, a ordem dos elementos seriam alterados.


## parâmetro rest

## object destructuring

## array destructuring

## default destructuring

## abbreviation object literal

## default params

