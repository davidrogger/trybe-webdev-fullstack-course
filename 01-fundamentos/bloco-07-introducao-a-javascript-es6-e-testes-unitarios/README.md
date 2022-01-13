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

## Fluxo de exceções - Throw, Try/Catch

[Throw](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw) é uma exceção definida para que uma função pare e siga uma instrução após o throw usando o bloco Catch.

```
try {
  if (true) throw new Error('mensagem de erro')
} catch (error) {
  throw error.message;
}
```

## Objetos

### [Object.keys()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

Coleta e organiza dentro de um array as chaves em forma de string dentro de um objeto.

```
const cliente = {
  nome: 'Jonas",
  age: 33,
}

Object.keys(cliente)

//output
['nome', 'age']
```

### [Object.values](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

Coleta e organiza dentro de um array os valores referente as chaves de um objeto.

```
const cliente = {
  nome: 'Jonas",
  age: 33,
}

Object.values(cliente)

//output
['Jonas', '33']
```

### [Object.entries](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

Ele coleta e retorna um array com a chave e o valor.

```
const cliente = {
  nome: 'Jonas",
  age: 33,
}

Object.entries(cliente)

//output
[['nome','Jonas'],['age', '33']]
```

### [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

Tem a finalidade de copiar todas chaves e valores de um objeto para um destino.
```
Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
```

```
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */
```

# Bonus bloco 7

## Bonus do Bloco 7.2

[Controle de fluxo e manipulação de erro](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
[Erros em JS](https://www.w3schools.com/js/js_errors.asp)
[Convertendo objetos em arrays](https://www.samanthaming.com/tidbits/76-converting-object-to-array/)
[Como usar métodos Object no JavaScript | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript-pt)
[Video sobre Object.assign](https://www.youtube.com/watch?v=JmGJUzNsGFs)
[Artigo sobre Object.keys .](https://levelup.gitconnected.com/learn-about-object-keys-in-javascript-cf2967ba6401)