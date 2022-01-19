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