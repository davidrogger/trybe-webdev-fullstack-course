class Superclass {
  constructor(public isSuper: boolean = true) { };

  public sayHello() {
    console.log('Hello world!');
  }
}

class Subclass extends Superclass{
  public sayHello2() {
    this.sayHello();
  }
}

function myFunc(param: Subclass) {
  param.sayHello2()
}

// const suupa = new Superclass();
const sub = new Subclass();

// myFunc(suupa);
myFunc(sub);