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
