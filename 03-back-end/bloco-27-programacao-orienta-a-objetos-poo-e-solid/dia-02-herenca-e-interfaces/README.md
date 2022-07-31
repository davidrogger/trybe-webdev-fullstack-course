anotações do dia...

- Classe representa algo genérico, uma estrutura.
- Objeto é um elemento gerado nos moldes de uma classe.
- Atributo é uma variável no contexto de uma classe.
- Método é uma função no contexto de uma classe.
- Abstração é a não exibição do funcionamento interno da classe, de forma a - simplificar a sua utilização.
- Encapsulamento é a disponibilização apenas dos atributos e métodos que são - necessários para o bom uso da classe.

# Sintaxe geral
```
class Animal {
  /*
    Ao invés de declarar os atributos antes do construtor, receber parâmetros
    no construtor e colocá-los nos atributos da classe, se não formos
    validar, podemos utilizar uma forma simplificada de escrita, simplesmente
    colocando o modificador de visibilidade na frente
    do nome do parâmetro no construtor

    Exemplo
    O seguinte código:

    public x: number
    constructor(x: number) { this.x = x }

    Pode ser substituído por:

    constructor(public x: number) { }
    
    Obs: Usando essa sintaxe é necessário indicar explicitamente 
    logo antes do nome do atributo se ele é public, private, protected ou readonly
  */
  constructor(public name: string, private birthDate: Date) { }

  get age() {
    /*Para operar com datas, vamos operar somente com milissegundos. Uma data
    é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
    const timeDiff = Math.abs(
      Date.now() -
      new Date(this.birthDate).getTime()
    );

    /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
    Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger);
tiger.walk();

/*
Saída (código rodado em Mar/2022):

Tigre está andando!
*/
```

É usado o tipo Animal, para o parametro da função, mesmo se tratando de um mamifero, pois todo mamifero é um animal na criação da classe, porém se tentarmos usar o metodo ou definições que foram feitas dentro do mamifero ele irá consta que não existe tal propriedade, no caso, se tentarmos usar o walk, que só existe no mamifero.
```
const main = (animal: Animal) => {
  console.log(animal.age);
  animal.walk(); // error: Property 'walk' does not exist on type 'Animal'.
}

main(tiger);
```

# Atributos protegidos

Não se pode acessar um atributo privado mesmo entre herança, mas as vezes precisamos manter atributos e metodos privados do mundo externo, mas possíveis de serem modificados dentro de subclasses, então usamos o protected;
Exemplos:
Privado:
```
class Animal {
  constructor(private birthDate: Date) { } // Repare no private

}
class Bird extends Animal {
  showBirthDate() {
    console.log(this.birthDate); // ERRO! birthDate é privado e não é visível pra subclasse Bird.
  }
}
```
Protegido:
```
class Animal {
  constructor(protected birthDate: Date) { } // Protected: classe filha pode ler e escrever, mas acessos externos não
}
class Bird extends Animal {
  showBirthDate() {
    console.log(this.birthDate); // Okay!
  }
}
```

# Super
```
class Animal {
  constructor(protected birthDate: Date) { }
}
class Bird extends Animal {
  constructor(public name: string) { } // ERRO: constructor deve respeitar o contrato da superclasse
}
```

Em typescript, o método construtor de uma subclasse deve ser o mesmo da superclasse ou deve chamar a superclasse.
```
class Animal {
  constructor(protected birthDate: Date) { }
}
class Bird extends Animal {
  constructor(public name: string) {
    super(new Date());
  }
}
```

O super é basicamente uma referência à superclasse. Ao ser invocado como uma função, está invocando o construtor da superclasse.

O super também é útil quando fazemos sobrescrita de métodos.

# Implementando interfaces

Herança é utilizada quando queremos codificar um comportamento padrão na superclasse, a fim de que as subclasses sigam esses comportamento, e também quando queremos mais reutilização de código.
Quando falamos de orientação a objetos, também falamos de Orientação a Interfaces. Na herança, temos a ideia de que subclasses vão herdar métodos e atributos das superclasses. Quando estamos usando Interfaces, porém temos uma class que vai implementar métodos definidos em uma interface. O objetivo é desacoplar a implementação do contrato.
Na interface, nós determinamos quais as assinaturas dos métodos e quais atributos o contrato deve respeitar. A interface por si só não pode ser instanciada, não podemos usar ela junto com o new para criar um objeto novo. Ela é apenas o contrato que será implementado por uma classe.

Na interface não implementamos nenhum código, apenas definimos o contrato (atributos e assinaturas dos méotodos). A classe que implementar essa interface, deve obrigatoriamente, implementar todos os méotodos e ter todos os atributos que a interface declara.
```
interface Animal {
  name: string;
  age: number;

  getBirthDate(): Date;
}

class Bird implements Animal {
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate; }

  fly() { console.log(`${this.name} está voando!`); }
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(parrot.age);
parrot.fly();

/*
Saída (código executado em Mar/2022):

Papagaio está voando!
*/
```

A interface é implementada por uma classe por meio da sintaxe class Classe implements Interface.

Importante salientar que a interface é um contrato de tudo que a classe deve possuir de forma pública.Atributos privados precisam ter seu correspondente público, e você pode usar getters e setters como uma forma pública de acessar atributos privados.
Observe também que a classe Bird possui o método fly, não definido pela interface. A classe deve possuir todos atributos e méotodos definidos na interface, mas não necessariamente se limitar a eles.

# Interfaces vs Classes

Interfaces e super classes podem servir para especificar o comportamento de classes, mas de formas e em níveis distintos.
Quando utilizamos interfaces, queremos gaarntir que alguns atributos e métodos existam, sem se importar com o que fazem.
Já quando utilizamos a herança, disponibilizamos não só um contrato, mas uma base já implementada de código que funciona, de forma que apenas vamos especializar esta base de código adicionando novas funcionalidades.

Existe uma forma de criar classes que precisam obrigatoriamente implementar alguns métodos em específico, as chamadas classes abstratas.

Quando a classe A implementa a interface 1, ela deve implementar todos os métodos declarados em 1 e possuir todos os atributos de 1. Quando a classe B herda da classe A, ela já herda todos os métodos e atributos públicos ou protegidos implementados na classe A.

# Composição

A ideia de herança é muito boa para reuso de código. Entretanto, deve-se tomar cuidado com uso indevido.
Utilizamos herança sempre que queremos especializar uma classe, deixá-la mais específica. Basta se perguntar se subclasse é um tipo de superclasse: se a resposta for não, então não devemos utilizar herança.
```
interface Board {
  save(): void;
  // ...
}

// Aqui vamos compor a classe com o nosso Database: passamos um objeto
// do tipo Database para o construtor da classe.
class GenericBoard implements Board {
  // Finja que faz sentido as casas do tabuleiro serem um array de strings
  constructor(public houses: string[], protected database: Database) {}

  public save() {
    this.database.save(this.houses);
  }
}

class ChessBoard extends GenericBoard {
  constructor(
    public houses: string[],
    protected database: Database,
    // Parâmetros específicos de um tabuleiro de xadrez
  ) {
    // Implementação específica de um tabuleiro de xadrez
  }
}

interface Database {
  save(content: any): void;
  // ...
}

class MySQLDatabase implements Database {
  private connection: MySQLConnection; // Uma conexão fictícia com o banco
  // ...
  save(content: any) {
    // Uma query fictícia para salvar o conteúdo no banco
    this.connection.query(`INSERT INTO table_name VALUES (${content})`);
  }
}

const db = new MySQLDatabase();
const board = new ChessBoard(['A1', 'A2', 'B1', 'B2'], db);
board.save();
```