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

## Teste unitário

Tem a finalidade de validar o comportamento do nosso código de forma sólida e precisa, são responsáveis por validar o comportamento de unidades funcionais do código, permitem uma melhor manutenção do seu código, não só verifica se uma função especifica está funcionando, mas também garante que sua aplicação continue funcionando após alguma alteração.

### TDD - Test Driven Development

Desenvolvimento orientado a testes, em certos cenários, favorece a produtividade e a escrita de códigos confiáveis.
O desenvolvimento orientado a testes é um processo cíclico que pode ser descrito em três etapas, como ilustrado abaixo, o princípio básico do TDD é fazer testes pequenos.

![](./dia-03-primeiros-passos-em-jest/tdd-img.png)

Destrinchando cada etapa, o TDD consiste em:
Escrever um teste que cubra a função que você pretende implementar antes mesmo de executá-la. Este teste irá falhar - afinal, a sua função ainda não foi declarada. Você pode começar do teste mais elementar possível para esse cenário, como verificar se a função que você irá criar existe.
Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior, você só precisaria declarar a função para passar o teste.
Refatorar o código para que ele esteja bem escrito e fácil de se entender. O pulo do gato nessa etapa é que você tem um teste já implementado que irá falhar caso você quebre algo ao refatorar o seu código.
Repetir! Afinal de contas, o desenvolvimento orientado a testes é um ciclo. Volte a etapa 1 e repita esse processo até que todas as funcionalidades da sua função sejam implementadas.

## NodeJS [Assert](https://nodejs.org/api/assert.html)

É uma ferramenta que testa expressões, ele ja vem instalado no NodeJS. o Assert é uma expressão booleana que será sempre `true`, mas em caso de falha, retorna `false`.
Node.js só executa um arquivo por vez, com o comando node `<nome_do_arquivo>` . Se há vários arquivos de teste, é preciso executar um por vez ou escrever um script shell para executar todos os arquivos;

### [Jest](https://jestjs.io/docs/expect)

Jest é um framework para realização de testes JavaScript desenvolvido pelo Facebook.
É um framework de fácil instalação, requer zero configurações e é rápido.(time do airbnb reduziu 1/3 do tempo de execução de sua suíte de 12 para 4min).
Jest ja vem instalado e configurado com React.

#### Instalação do Jest

Para conseguir instalar o jest deve-se ter instalado o npm, para verificar se o npm está instalado, use o comando `npm -v`, se ele estiver instalado ele deve retornar a versão do seu npm.

`npm init -y`, altera o script, teste para jest
`npm install --save-dev jest`

## Expect e matchers

 Função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers . Esses métodos são estruturas de comparação utilizadas em diversas bibliotecas de testes, inclusive no Jest .

### toBe

É o matcher mais simples, que testa igualdade estrita entre o valor passado para expect.
Exemplo:
`expect(5).toBe("5")`
Teste falharia, pois era esperado o númer 5 e não a string 5.

### toEqual

Existem duas formas de atribuir valores, a primeira é para variável e a segunda para propriedade do objeto, essas formas são conhecidas por valor e referência.
É importante entender que os tipos de dados são separados em primitivos(number, string, boolean, etc) e objetos(Objetos, Funções, Arrays, etc..).
Logo é necessário o uso para toBe, para variaveis primitivas, enquanto toEqual para objetos.

### [Booleans](https://jestjs.io/docs/using-matchers#truthiness)

As vezes é necessário distinguir teste entre undefined, null e false, mas as vezes você não quer tratar eles diferente, Jest deixa você explicitar o tratamento que você deseja.

`toBeNull` corresponde a apenas `null`
`toBeUndefined` corresponde a apenas `undefined`
`toBeDefined` é o oposto de toBeUndefined
toBeTruthy combina com qualquer coisa que uma instrução if trata como verdadeiro
toBeFalsy combina com qualquer coisa que uma instrução if trata como falso

### Números

Há matchers para as principais formas de comparar números. Leia [aqui](https://jestjs.io/docs/pt-BR/using-matchers#n%C3%BAmeros) sobre esses matchers.

### Strings

Para comparar string com expressões regulares, utilize o matcher [toMatch](https://jestjs.io/docs/pt-BR/expect#tomatchregexporstring).

### Arrays

Pode-se vericiar se um array contém um determinado item com [toContain](https://jestjs.io/pt-BR/docs/expect#tocontainitem), estruturas mais complexas podemos verificar com toContainEqual. [ToHaveLength](https://jestjs.io/pt-BR/docs/expect#tohavelengthnumber) para vericiar o tamanho de um array ou de uma string.

### Objetos

É bastante comum testar se um objeto possui uma propriedade específica. O matcher [toHaveProperty](https://jestjs.io/pt-BR/docs/expect#tohavepropertykeypath-value) é ideal para esses casos.

### Exceções

É testando se está sendo retornado um erro da forma definida usando o toThrow.

### not

Permite testar o oposto de algo; exemplo:
```
const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});
```

Mais documentações sobre Expect do jest [aqui](https://jestjs.io/docs/pt-BR/expect)

# Bonus bloco 7

## Bonus do Bloco 7.2

[Controle de fluxo e manipulação de erro](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
[Erros em JS](https://www.w3schools.com/js/js_errors.asp)
[Convertendo objetos em arrays](https://www.samanthaming.com/tidbits/76-converting-object-to-array/)
[Como usar métodos Object no JavaScript | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript-pt)
[Video sobre Object.assign](https://www.youtube.com/watch?v=JmGJUzNsGFs)
[Artigo sobre Object.keys .](https://levelup.gitconnected.com/learn-about-object-keys-in-javascript-cf2967ba6401)