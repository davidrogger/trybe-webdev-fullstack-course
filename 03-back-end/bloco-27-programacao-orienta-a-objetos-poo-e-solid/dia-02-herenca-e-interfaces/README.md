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

