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


## [parâmetro rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

Feature do ES6, você pode definir para que o parametro recebido seja encapsulado em um array, usando a mesma configuração do spread operator.

Exemplo:
```
function parameterRest(...para) {  
  console.log(para[0]);
  console.log(para[1]);
  console.log(para[2]);
};

parameterRest('ola', [1, 2, 3, 4], true);

// ola
// 123
// true
```
```
function parameterRest(...para) {  
  console.log(para.length);
};

parameterRest('ola', 1, 5, [1, 5, 9]);

// 4
```

Lembrando que sempre o parametro passado, será tratado como um array.

## object destructuring

Mais uma feature do ES6, para acesso de valores de um objeto.

Exemplo:
```
const studant = {
  name: 'Jonas',
  school: 'Trybe',
  age: 30,
  grades: {
    Hardskills: 'HTML',
    Softskills: 'Feedbacks',
  }
};

const { name } = studant;
console.log(name) // Jonas,
```

Você basicamente atribui a chave name, para ser uma nova variavel, que vai conter o valor da chave, mas também é possivel renomea-lo
```
const { name: nome } = studant;
console.log(nome) // jonas
```
E para acessar objetos dentro do objeto
```
const { grades: { Softskills, Hardskills } } = studant;

console.log(Softskills, Hardskills); // Feedbacks HTML
```

## array destructuring

Feature do ES6, segue o mesmo padrão referente aos objetos.

Exemplo:
```
const names = ['David', 'Jonas', 'Nizuk'];

const [ firstName, secondName, thirdName] = names;

console.log(firstName); // David
console.log(secondName); // Jonas
console.log(thirdName); // Nizuk
```
## default destructuring

Feature ES6, é usado em situações em que não queremos que quando solicitado uma chave ou campo que não tem valor, ela retorne um valor padrão determinado nessa destructuring.

Exemplo
```
const user = {
  nome: 'Jonas,
  age: 20,
}

console.log(user.birthday);
```

Usando esse caso, ele retornaria undefined, mas usando default destructuring poderiamos definir, que ele retonaria qualquer outro valor.

Exemplo
```
const user = {
  nome: 'Jonas,
  age: 20,
}

const { birthday = '2002' } = user;

console.log(user.birthday); // 2002
```

Foi definido um valor padrão para retorno caso ele não esteja preenchido, nota, ele não adiciona esse valor ao objeto, ele apenas apresenta esse valor, como padrão por não existir.

## abbreviation object literal

É usado para reduzir a repetição na hora de formular um objeto.

Exemplo:
```
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};
```
No exemplo acima, se torna repetitivo, a escrita do ID, NAME e EMAIL, com o uso de abbreviation, poderiamos declarar da seguinte maneira.
```
const newUser = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};
```

Ele ja entende que o parametro recebido, deve receber a chave com o nome ID, seguindo do valor apresentando no parametro.
```
retorno: console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }
```

## default params

Segue o mesmo padrão do default destructuring, podemos definir um valor padrão dentro da função para caso aquele parametro não seja determinado.

Exemplo:
```
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!
```

Nesse exemplo, caso não seja escrito o nome do usuário ele será considerado como usuário mesmo.