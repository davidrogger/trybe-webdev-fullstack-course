anotações pessoais...

# Firs-class citizens

São variaveis, que são usadas como input, parametros, para alguma determinada ação, operação...


# First-Class Functions

Tem funções com tratamento de firs-class citizens, são funções que são colocadas dentro de uma variavel assim como as arrow functions.

`const firsClass = () => {console.log('Essa variavel recebeu essa função )};`

# Higher Order Functions

São funções que recebem outra função como parametro ou retornam uma função.

# HOFs que são utilizadas com arrays

## [forEach](https://www.w3schools.com/jsref/jsref_foreach.asp);

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

