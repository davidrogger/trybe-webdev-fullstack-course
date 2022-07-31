class Superclass {
  constructor(public isSuper: boolean = true) { };

  public sayHello() {
    console.log('Hello world!');
  }
}

class Subclass extends Superclass{

}

function myFunc(param: Superclass) {
  param.sayHello();
}

const suupa = new Superclass();
const sub = new Subclass();

myFunc(suupa);
myFunc(sub);