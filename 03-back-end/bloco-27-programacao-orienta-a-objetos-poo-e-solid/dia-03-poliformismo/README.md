anotações do dia...

# Polimorfismo

Vem do grego, Poli muitos e morfismo formas, muitas formas.

# Sobrescrita de método

Exemplo:
```
class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

/*
Saída:
Tubarão está se movendo.
Papagaio está voando.
Tatu está andando.
*/
```

myMove recebe como parâmetro um animal da classe animal e chama o metodo move.

# Uso do super

Pode-se também chamar a implementação da superclasse por meio do super.

Exemplo:
```
class Animal {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird extends Animal {
  move() {
    super.move();
    console.log(`${this.name} está voando.`);
  }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}

const a = new Animal('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

/*
Saída:
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está andando.
*/
```


# Classe abstrata e método abstrato

Por vezes, criamos classes que devem possuir métodos pensados para ser criados em subclasses.

A ideia é que a superclasse, mais genérica, não deve fazer ideia de como esse método deve funcionar, apenas saber que ele existe.
Isso é o mesmo que quando há uma implementação de interface, com a diferença na interface nenhum método deve funcionar, apenas saber que ele existe.

Isso é o mesmo que quando há uma implementação de interface, com a diferença na interface nenhum método é implementado, e que queremos selecionar alguns métodos para que não sejam implementados.

Para isso, utilizamos classes abstratas, e estas possuem métodos abstratos.

As classes abstratas não podem ser instanciadas, ou seja, você não pode criar um objeto a partir de uma classe abstrata.
Métodos abstratos só podem existir em classes abstratas, e eles devem ser implementados na subclasse.
```
/*
Dicionário en-pt:
- fish: peixe
*/

abstract class Animal {
  constructor(public name: string) { }
  abstract move(): void
}
class Bird extends Animal {
  move() { console.log(`${this.name} está voando.`); }
}
class Mammal extends Animal {
  move() { console.log(`${this.name} está andando.`); }
}
class Fish extends Animal {
  move() { console.log(`${this.name} está nadando.`); }
}

const a = new Fish('Tubarão');
const b = new Bird('Papagaio');
const m = new Mammal('Tatu');

const myMove = (animal: Animal) => {
  animal.move();
}
myMove(a);
myMove(b);
myMove(m);

/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/
```

# Métodos (e atributos) estáticos

Um método estático é uma função que não precisa acessar nenhum atributo do objeto.

A diferença semântica de um método estático para uma função é que o método estático tem a ver com a classe. Isso significa que fica meio "sem sentido" você disponibilizar o dito método sozinho, pois mais que ele não precise manipular uma instância, ele está muito ligado à classe.
Além de métodos, podemos ter atributos estáticos, que são acessados manipulando a classe, não a instância.

Exemplo: 

```
/*
Dicionário en-pt:
- employee: pessoa empregada/funcionária
- static: estático
*/

class Employee {
  private static employeeCount = 0

  constructor(public name: string) {
    Employee.addEmployee();
  }

  private static addEmployee() {
    this.employeeCount += 1;
  }

  static get employees() {
    return this.employeeCount;
  }
}

console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(Employee.employees);
const e2 = new Employee('Cíntia');
console.log(Employee.employees);

/*
Saída:



*/
```

# Sintaxe com interfaces e generics

## Polimorfismo com interfaces

O polimorfismo com interfaces se dá da mesma forma que o com herança.
Duas classes diferentes implementam a mesma interface, implementando também os métodos obrigatórios que a interface estipula.

Por exemplo, podemos enviar a uma função um parâmetro com o tipo da interface e passar em seu lugar um objeto de uma classe que implementa tal interface.

Há uma garantia de que tudo o que a interface estipula está implementado na classe e, consequentemente, no objeto.

Classes diferentes irão implementar determinados métodos de formas diferentes. No exemplo abaixo, o método showIdentification é implementado de forma diferente nas classes PessoaFísica e PessoaJurídica.

```
interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cpf;

  constructor(name: string, cpf: string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cpf() { return this._cpf; }
  showIdentification() { console.log(this.id, this._cpf); }
}

class LegalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cnpj;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() { return this.lastId++; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }
  showIdentification() { console.log(this.id, this._cnpj); }
}

const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const showIdentification = (person: Person) => {
  person.showIdentification();
}
showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);

/*
Saída:
 123456789
 987654321
 834729384723
*/
```

# Garantia de tipo com generics

```
class Contract {
  static _number = 0;
  constructor(public broker: Person){}
  static get number() { return this._number; }
}

const c1 = new Contract(pp0);
console.log(c1.broker.cpf); // Erro, pois não existe cpf em Person
```
```
class Contract<T> { // Agora a classe recebe o genérico T
  static _number = 0;
  constructor(public broker: T) { } // T no lugar de Person
  static get number() { return this._number; }
}

// Tipo inferido (não explícito)
const c1 = new Contract(pp0); // TypeScript "advinha" que pp0 é pessoa física
console.log(c1.broker.cpf); // Okay

// Tipagem explícita
const c2: Contract<LegalPerson> = new Contract(lp); // Deixo explícito que lp é pessoa jurídica
console.log(c2.broker.cnpj); // Okay

/*
Saída:


*/
```

# Jogo de xadrez

Considerando apenas a movimentação das peças e não das peças "inimigas"

Primeiramente é definido alguns tipos e uma função auxiliar que checa se determinada lista contém outra lista:

```
type BoardColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type BoardRow = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
type BoardHouse = [BoardColumn, BoardRow];

const boardColumns: BoardColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const boardRows: BoardRow[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

const isInList = (element: any, list: any[]) => {
    for (let e of list)
        if (element[0] == e[0] && element[1] == e[1]) return true;
    return false;
};
```

Os tipos relacionados ao taubuleiro, BoardColumn e BoardRow e BoardHouse são para auxiliar na representação das casas do tabuleiro de xadrez.

Agora, vamos definir a estrutura de uma peça de xadrez genérica:

```
abstract class Piece {
    protected _position: BoardHouse;
    abstract type: string;

    constructor(position: BoardHouse, protected board: Board) {
        this._position = position;
    };

    get position() { return this._position; }
    abstract get availableMoves(): BoardHouse[];

    move(newPosition: BoardHouse) {
        console.log(
            `MOVENDO ${this.type} DA CASA ${this._position} PARA A CASA ${newPosition}`
        );
        if (!isInList(newPosition, this.availableMoves)) return false;
        this._position = newPosition;
        return true;
    }
}
```

A Classe piece é uma classe abstrata e o método availableMoves é abstrato, pois cada tupo de peça se movimenta de uma forma diferente. OBS: availableMoves é um getter, mas a sintaxe de método abstrato pode ser utilizado como métodos normais também.

Implementando o Pawn:

```
class Pawn extends Piece {
    type = 'Pawn';
    get availableMoves() {
        const column = this.position[0];
        const row = this.position[1];
        const rowIndex = boardRows.indexOf(row);
        if (rowIndex === 7)
            return [];

        const nextHouse: BoardHouse = [column, boardRows[rowIndex + 1]];
        if (isInList(nextHouse, this.board.occupiedHouses))
            return [];

        return [nextHouse];
    }
}
```

A class Pawn implementa o método que é abstrato na classe Piece, availableMoves. É uma implementação bem simples, apenas checando se o peão já está na linha 8 ou se existe alguma outra peça em sua frente.

```
class Rook extends Piece {
    type = "Rook";
    get availableMoves() {
        const column = this.position[0];
        const columnIndex = boardColumns.indexOf(column);

        const row = this.position[1];
        const rowIndex = boardRows.indexOf(row);

        let availableHouses: BoardHouse[] = [];

        // Adiciona todas as casas abaixo
        for (let i = rowIndex - 1; i >= 0; i--) {
            const house: BoardHouse = [boardColumns[columnIndex], boardRows[i]];
            if (isInList(house, this.board.occupiedHouses)) break;
            availableHouses.push(house);
        }

        // Adiciona todas as casas acima
        for (let i = rowIndex + 1; i < 8; i++) {
            const house: BoardHouse = [boardColumns[columnIndex], boardRows[i]];
            if (isInList(house, this.board.occupiedHouses)) break;
            if (isInList(house, availableHouses)) continue;
            availableHouses.push(house);
        }

        // Adiciona todas as casas na direita
        for (let i = columnIndex + 1; i < 8; i++) {
            const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(house, this.board.occupiedHouses)) break;
            if (isInList(house, availableHouses)) continue;
            availableHouses.push(house);
        }

        // Adiciona todas as casas na esquerda
        for (let i = columnIndex - 1; i >= 0; i--) {
            const house: BoardHouse = [boardColumns[i], boardRows[rowIndex]];
            if (isInList(house, this.board.occupiedHouses)) break;
            if (isInList(house, availableHouses)) continue;
            availableHouses.push(house);
        }

        return availableHouses;
    }
}
```

Por último, temos o tabuleiro já com duas peças:

```
class Board {
    pieces: Piece[] = [];

    constructor() {
        this.addPiece(new Pawn(['C', '2'], this));
        this.addPiece(new Root(['F', '1'], this));
    }

    private addPiece(piece: Piece) {
        if (isInList(piece.position, this.occupiedHouses))
            return;
        this.pieces.push(piece);
    }
    get occupiedHouses() {
        return this.pieces.map((piece) => piece.position);
    }

}
```
