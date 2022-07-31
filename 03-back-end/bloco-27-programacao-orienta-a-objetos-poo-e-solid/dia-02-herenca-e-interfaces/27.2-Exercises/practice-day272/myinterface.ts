interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {};
  myFunc(myParam: number): string {
    return `The sum ${myParam} with ${this.myNumber} is ${myParam + this.myNumber}`;
  }
}

const sum1 = new MyClass(10);

console.log(sum1.myFunc(1));