anotações pessoais...

# JavaScript ES6 - let, const, arrow, functions e template literals

## Javascript - ES6

Javascript é o nome de trademark da Oracle, referente ao java script o nome oficial da linguagem é ECMAScript.
A versão 6 teve a finalidade de ser uma linguagem melhor para construir aplicações complexas, resolver problemas do antigo JS e facilitar o desenvolvimento de libraries.

## var, let e const

`var` = Variável mutável global.
`let` = Variável mutável dentro do escopo que ela foi criada.
`const` = Variável imutavel, não é possivel reatribuir um novo valor após ja definido, e é separado por escopo.

## Template Literals

É uma forma de criar e manipular strings dinâmicamente:

Usando o acesso craseado para iniciar e finalizar:

```
let name = 'David';
console.log(`Olá meu nome é ${name}`)
```
 Também se pode adicionar uma expressão dentro da chave:
 ```
let num1 = 10;
let num2 = 10;

`Soma de ${num1} + ${num2} = ${num1 + num2}`
```