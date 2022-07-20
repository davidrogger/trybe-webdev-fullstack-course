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

