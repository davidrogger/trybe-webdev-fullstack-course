anotações pessoais...

# Bloco 9.1

Para contornar o problema de um serviço sendo usado pela nossa página estar fora do ar ou lento, é usado operações *assíncronas*, fazendo com que determinado elemento fique carregando, enquanto os demais seguem o fluxo normalmente.

## Operações assíncronas

As operações no Javascript tradicionalmente são sincrónas, para realizar uma operação é necessário que a operação anterior termine.

### [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

Syntax
`setTimeout(function, milliseconds, param1, param2,...)`
função: Obrigatório
milisegundos: opcional e por padrão seu valor é 0.
param: Parametros para a função.

SetTimeout é usado para determinar que uma função/bloco será executada depois de um determinado tempo estimado.

Exemplo:
```
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); // O retorno é [2, 3]
```
Nesse exemplo foi determinado para a adição do elemento 1 ao array, ocorrece depois de 3000ms(3s), como o console.log é apresentado antes da adição o retorno não consta ainda o 1 no array.
```
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000);
```

Adicionando um tempo para apresentação do console, agora o 1 aparece no array, porém por ultimo, pois ele foi adicionado por ultimo.

## Callbacks 

## Testes com callbacks utilizando o Jest 

## Setup and Teardown
