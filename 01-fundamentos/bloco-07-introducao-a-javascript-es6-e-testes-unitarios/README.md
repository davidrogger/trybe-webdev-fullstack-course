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

## Arrow Functions

Arrow functions é uma forma diferente de escrever uma função com menos código.

```
const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());
```
A sintexa da Arrow Function nos permite omitir a necessidade do uso do nome function e return, conforme exemplo:
```
const printName = () => {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());

```

Também pode-se omitir o parenteses quando a função recebe apenas um parametro.

Mais Exemplos:
```
Com o template literals
console.log(`Primeira linha
Segunda linha
Terceira linha`);

Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

function soma(soma1, soma2) {
  return soma1 + soma2;
}

console.log(soma(2, 2));

const soma = function (soma1, soma2) {
  return soma1 + soma2;
}

console.log(soma(2, 2));

const soma = (soma1, soma2) => {
  return soma1 + soma2;
}

console.log(soma(2, 2));

const soma = (soma1, soma2) => soma1 + soma2;

console.log(soma(2, 2));

const contaPalavras = frase => frase.split(' ').length;

console.log(contaPalavras('Fala tribo, beleza?'));

const objetoPessoa = (nome, idade) => ({nome: nome, idade: idade});
console.log(objetoPessoa('David', 33));
```

## Ternary operator

É um operador usado para reduzir a quantidade do código em condições simples, normalmente abordando somente a condição verdadeiro ou falso, usando o tradicional, quando existe uma comparação maior.

```
// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira
```

## Fluxo de exceções

[documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw)
Throw é uma exceção definida pelo usuário, 