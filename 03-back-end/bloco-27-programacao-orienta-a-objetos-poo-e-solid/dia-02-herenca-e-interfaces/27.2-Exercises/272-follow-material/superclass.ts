class Superclass {
  constructor(public isSuper: boolean = true) { };

  public sayHello() {
    console.log('Hello world!');
  }
}

class Subclass extends Superclass{
  constructor(){
    super(false);
  }
  public sayHello2() {
    this.sayHello();
  }
}

function myFunc(param: Superclass) {
  if (param.isSuper) console.log('Super!')
  if (!param.isSuper) console.log('Sub!')
  param.sayHello()
}

const suupa = new Superclass();
const sub = new Subclass();

myFunc(suupa);
myFunc(sub);