anotações pessoais do dia...

# Tipos de coleções

## Arrays

São conjuntos de valores de mesmo tipo:
```
let names: string[] = ["Mary Joe", "Alan Joe"];
```

## Tuplas

Permitem declarar um conjunto de valores cuja ordem e tipo dos valores são fixas, são representadas como arrays mas sua estruturas são diferentes.
```
let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];
```

# Type Aliases

É um nome para um tipo especifico. Pode-se dar um nome a qualquer tipo não apenas a um tipo de objeto.
```
type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100
```

## Exercícios
1. Crie um type para um objeto que represente um pássaro.
```
type bird {
  name: string,
  race: string,
  age: number
}
```
2. Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
```
type sum {
  number1: number,
  number2: number,
}

function sum({ number1, number2 }: sum): number {
  return number1 + number2;
}
```
3. Crie um type para um objeto que represente um endereço.
```
type address {
  street: string,
  number: number,
  city: string
}
```

# Type Unions

É uma forma de declarar que um objeto é um tipo formado a partir de dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos. Para isso, é preciso declarar os tipos esperados separados por barras.
```
// A função abaixo pode receber tanto um número
// quanto uma string.
function retornarCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}
```

## Exercícios
1. Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso.
```
type state = "liquid" | "solid" | "gaseous"
```
2. Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex: “123.567.890-12” ou 123456789012.
```
type docs = number | string;
```
3. Crie um type union que represente sistemas operacionais: linux, mac os ou windows.
```
type system = "linux" | "mac" | "windows";
```
4. Crie um type union que represente as vogais do alfabeto.
```
type aBc = "a" | "e" | "o" | "i" | "u";
```

# Classes

No TypeScript as classes são uma maneira de definir a forma de um objeto.
```
enum EyeColor {
    Black = "Pretos",
    Blue = "Azuis",
    Green = "Verdes",
    Brown = "Castanhos",
}

// usamos a palavra reservada class para definir uma classe
class Person {
    name: string;
    birthDate: Date; // o tipo Date está presente no TypeScript assim como no JavaScript
    eyeColor: EyeColor; // na cor dos olhos usamos uma Enum com valores pré definidos

    // aprenderemos mais sobre o construtor no próximo bloco
    // considere-o como uma função utilizada para construir um objeto a partir da classe,
    // nele recebemos todos os dados necessários para construir um objeto de pessoa
    constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
        // usamos o this para acessar as propriedades da instância da classe,
        // ele representa a própria instância que estamos criando
        // atribuimos o valor do parâmetro recebido a propriedade da instância da classe
        this.name  = name;
        this.birthDate  = birthDate;
        this.eyeColor  = eyeColor;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}
```

A classe Person pode ser reutilizada para criar qualquer quantidade de novos objetos Person, cada um com suas próprias características.
```
// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."
```
```
// usamos a palavra reservada new para criar uma instância de Person
// e passamos os parâmetros necessários para o construtor
const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "eyeColor": "Castanhos"
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."
```

Também é possível definir que uma das propriedades não é obrigatŕoio usando o caractere "?".
```
enum EyeColor {
    Black = "Pretos",
    Blue = "Azuis",
    Green = "Verdes",
    Brown = "Castanhos",
}

class Person {
    name: string;
    birthDate: Date;
    eyeColor?: EyeColor;

    constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
        this.name  = name;
        this.birthDate  = birthDate;
        this.eyeColor  = eyeColor;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}
```

A criação das instâncias poderiam ou não serem criadas com cor dos olhos:
```
const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z"
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "eyeColor": "Pretos"
// }
// "Jon Doe está andando."
```

Exercícios:

1. Crie uma classe cujo objeto represente um Cachorro.
```
interface Dog {
    name: string;
}

class Dog {
    constructor(name: string) {
        this.name = name;
    }

    action() {
        return `${this.name} bark!`;
    }
}

const dog1 = new Dog('Jonas');

console.log(dog1.action());
```
2. Crie uma classe cujo objeto represente uma Casa.
```
interface House {
    address: string;
    number: number;
    city: string;
}

class House {
    constructor(address: string, number: number, city: string) {
        this.address = address;
        this.number = number;
        this.city = city;
    }

    addressName() {
        return `the address name is ${this.address}`;
    }

    addressNumber() {
        return `the number is ${this.number}`;
    }

    addressCity() {
        return `the city name is ${this.city}`;
    }

    fullAddress() {
        return `${this.address}, number ${this.number} city ${this.city}`;
    }
}

const house1 = new House('Rua dos xablaus', 1, 'Xablauland');

console.log(house1.addressName());
console.log(house1.addressNumber());
console.log(house1.addressCity());
console.log(house1.fullAddress());
```
3. Crie uma classe cujo objeto represente um Voo.
```
interface Fly {
    origin: string;
    destiny: string;
    date: Date;
}

class Fly {
    constructor(origin: string, destiny: string, date: Date) {
        this.origin = origin;
        this.destiny = destiny;
        this.date = date;
    }

    log() {
        return `From ${this.origin} to ${this.destiny} releasing at ${this.date}`;
    }
}

const flyToValhala = new Fly('midgard', 'valhala', new Date('December 20, 2022 10:00:00'));

console.log(flyToValhala.log());
```

# Interfaces

É mais uam estrutura que não existe no JavaScript. A Interface é utilizada para declarar a forma de um objeto, nomear e parametrizar os tipos do objeto e comport tipos de objetos nomeados existentes em novos. São uma forma eficiente de definir um "contrato de código" sendo definido o que você espera que seja implementado dentro do seu código.

Exemplo, criando uma interface que define as propriedades e métodos de uma pessoa funcionária;
```
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}
```

O único trabalho de uma interface é descrever o objeto. Ela define o que o contrato de código exige, enquanto quem implementa a interface deve atender ao contrato fornecendo os detalhes de implementação necessários.

# Exercícios

1. Crie uma interface cujo objeto represente um Automóvel.
```
interface Car {
    model: string;
    year: Date;
    color: string
}
```
2. Crie uma interface cujo objeto represente um Felino.
```
interface Feline {
    name: string;
    age: Date;
}
```
3. Crie uma interface cujo objeto represente uma Aeronave.
```
interface Aircraft {
    model: string;
    year: Date;
    color: string;
}
```

# Generics

São modelos de código que podem ser definidos e reunitilizados em toda base do código. Fornecem uma forma de intormar a funções, classes ou interfaces que tipo é desejado usar ou chamar, além de ajudar a reduzir o uso de tipo any, que não é uma boa prática em TypeScript.

Exemplo criando uma função que recebe any;
```
function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
numberArray.push(25);
stringArray.push("Rabbits");
numberArray.push("isto não é um número");
stringArray.push(30);
console.log(numberArray);
// Saída:  [5, 10, 15, 20, 25, "isto não é um número"]
console.log(stringArray);
// Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]
```
Para garantir que o TypeScript verifique e garanta que os valores sejam de um determinado tipo é usado o generics:
```
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
```

Os generics definem uma ou mais variáveis de tipo para identificar o tipo ou tipos que serão passados para o componente, colocados entre colchetes angulares (<>). T é um nome comumente usado para um generic, mas pode-se usar qualquer outro tipo de nome de paramêtro.
Após especificar a variável de tipo, você pode usá-la no lugar do tipo em parametros;

Com isso podemos criar declarações de variáveis;
```
let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
stringArray.push(30); // Isto vai gerar um erro de compilação
```

Pode ser passada quantas variáveis de tipo forem necessárias para nossos componentes genéricos:
```
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");
```

Outro uso comum para generics é com interfaces e classes:
```
interface ProcessIdentity<T, U> {
    (value: T, message: u): T;
}

function processIdentity<T, U> (value: T, message: U): T {
    console.log(message);
    return value;
}

let processor: ProcessIdentity<numer, string> = processIdentity;
let returnNumber = processor(100, 'Olá');
let returnString = processor('Olá', 100) // check error: Argument of type "string" is not assignable to parameter of type "number".
```
```
class ProcessIdentity<T, U> {
    _value: T;
    _message: U;
    contructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity(): T {
        console.log((this._message));
        return this._value;
    }
}

let processor = new processIdentity<number, string>(100, 'Olá');
processor.getIdentity(); // imprime Olá e retorna 100
```