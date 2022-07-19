export function greeter(name: string) {
  return `Hello ${name}`;
};

export function personAge(name: string, age: number) {
  return `${name} is ${age} old! `
};

export function add(x: number, y: number): number {
  return x + y;
};

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangleArea(base: number, heigh: number): number {
  return (base * heigh) / 2;
};

export function squareArea(side: number): number {
  return side ** 2;
};

export function rectangleArea(base: number, heigh: number): number {
  return base * heigh;
}

export function diamondArea( bigSide: number, smallSide: number): number {
  return (bigSide * smallSide) / 2;
};

export function trapezeArea(largeBase: number, minorBase: number, heigh: number): number {
  return ((largeBase + minorBase) * heigh) / 2;
}

export function circleArea(raio: number):number {
  return 3.14 * (raio ** 2);
};