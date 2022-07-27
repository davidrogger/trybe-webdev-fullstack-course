anotações do dia...

# POO

## Conceitos

Classe é o primeiro dos conceitos. Ele é utilizado para determinar algo genérico. Na programação orientada a objetos, toda classe tem como finalidade modelar com precisão a representação de uma entidade do mundo real.

Trazendo para programação: um atributo é uma variável criada numa classe, e um método é uma função criada numa classe.
Um método que parece destaque é o método construtor. Ele é rodado automaticamente na criação de um objeto, e serve para inicializar alguns atributos e chamar alguns métodos. Por exemplo, no nascimento de uma pessoa, os atributos altura e massa são definidos, e o método chorar é chamado.

# Pilares da POO

Possui quatro pilares fundamentais

1. abstração indica que você não necessariamente precisa saber os detalhes de como algo funciona. Pense por exemplo em uma câmera, provavelmente não se sabe todos os detalhes de como ela funciona, mas para operar você apenas precisa apontar, conferir no visor e apertar o botão. Uma atualização pode mudar detalhes do funcionamento da câmera, mas sua operação vai continuar essencialmente a mesma.

2. encapsulamento faz com que algunas atributos só possam ser acessador ou modificados dentro da classe. Pense na sua massa. Você pode diretamente, mudar sua massa. Não é possível você pensar "vou ter x kg" e você passar a ter essa massa. Entretando, algumas interfaces para alterar essa massa são expostas. Você pode comer para aumentar a massa, e dentro de você, sem que possa ditar como seu corpo irá se comportar, ele vai absorver as calorias do alimento. Ou seja, não é possível mudar diretamente a sua massa, pois ela é um atributo privado da classe Pessoa, mas existem métodos na classe Pessoa que permitem que a massa seja alterada de forma interna, como o método comer.

3. herança permite que classes filhas, que herdam métodos e atributos de outras classe (super classe), sejam criadas. Pense em uma classe Pessoa, com os atributos nome e altura e como o método sonhar. A partir dessa classe Pessoa, eu posso criar uma outra classe, chamada PessoaCantora, que herda de Pessoa. Ou seja já virá automaticamente com os atributos nome e altura e com o método sonhar, mas poderá ter outro método exclusivo dela, como cantar.

4. polimorfismo permite que coisas diferentes aconteçam ao chamarmos objetos de classes filhas distintas de uma mesma super classe. Por exemplo, pense que existe a classe Pessoa, que possui um método dormir, só que esse méotodo não é implementado (não possui nenhum código). Então são criadas duas outras classes: PessoaQueDormeDeBrucos e PessoaQueDormeDelado, e ambas implementam o método dormir conforme seus nomes. Se em algum lugar do código eu esperao um objeto da classe Pessoa, eu posso perfeitamente passar um objeto de uma classe filha (já que ele herda tudo que tem na classe Pessoa), ou seja, eu posso passar tanto um objeto da classe PessoaQUeDormeDeBrucos quando da classe PessoaQueDormeDelado. Como o código esperava um objeto da classe Pessoa, qualquer um dos dois servem, mas se o método dormir for chamado, ele irá se comportar de forma diferente.

# Sintaxe Geral

```
class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/
```

# Abstração

Quando criamos códigos Orientados a Objetos, deve ser intencional o uso de abstração, ou seja de esconder detalhes da implementação da pessoa que vai usar a classe ou os objetos.

Exemplo: log é um método do objeto console. Com isso para gerar um texto usando o console.log no terminal, o texto tem que ser carregado em buffers especiais, ser enviado para decodificadores, passar por um grande passo a passo, culminando em um sinal elétrico sendo enviado ao seu monitor, por fim, resultando no acendimento dos pixels correspondentes às letras que formam a frase.

Entre a chamada do console.log e a visualização do resultado na tela, existem várias camadas de abstração, as quais por um lado, não te dão nitidez do que acontece no processo, mas por outro resolvem seu problema sem que você tenha que se preocupar.

A mentalidade ao desenvolver código Orientado a Objetos deve ser essa: a pessoa que vai usá-lo não deve ter que se preocupar em como determinado méotod funciona. Ela só precisa saber que, ao receber certa entrada, esse método irá retornar ou exebir um certo resultado.

# Encapsulamento

Consiste na exibição e concessão de acesso para quem usa a classe apenas daquelo que ela pode/deve de fato ver ou interagir.
A ideia é garantir que os processos internos da classe possam ocorrer sem que a pessoa que a utiliza altere atributos de forma indevida, o que poderia ocasionar em problemas no funcionamento. Para isso existem os modificadores de visibilidade do atributo, sendo os principais o **public**, **private**, **protected** e o **readonly**.

Os atributos criados sem modificadores de visibilidade são públicos por padrão, e podem ser acessados e alterados tanto dentro quanto fora da classe. Se quisermos deixar explícito que não esquecemos de colocar a visibilidade adequada, podemos utilizar a palavra reservada **public** na frente do atributo.

Já os atributos criados com o modificador **private** só podem ser lidos e modificados dentro da classe. Isso significa que se você tentar utilizar a notação objeto.atributo do lado de fora das chaves que delimitam a criação da classe, você terá um erro do compilador.

**readonly** podem ser lidos em qualquer lugar, mas só podem ser inicializados uma vez, no construtor. Apesar desse modificador não estar exatamente ligado a Orientação a Objetos, é importante entender seu funcionamento.

Para alterar atributos privados fora de uma classe, utilizamos os métodos. Eles validam as leituras e alterações, de forma a não comprometer o funcionamento da classe. Por exemplo, você pode ter uma classe Pessoa com o atributo dataDeNascimento privado, e possuir um método para mudar essa data de nascimento de forma a validar se é digitada uma data válida. Para ler os valores dos atributos, podemos criar os métodos getters, e para modificar, os métodos setters. É importante salientar que atributos privados não são obrigados a ter getters e setters. Eles só precisam destes métodos caso seja necessário alterá-los diretamente, podendo garantir uma validação do dado que foi passado.
A depender da filosofia da linguagem que se utiliza, uma boa prática é deixar todos os atributos como privados e criar os getters e setters de acordo com a necessidade de cada atributo. Uma outra prática comum é o uso de um **underline antes do nome de atributos privados**.