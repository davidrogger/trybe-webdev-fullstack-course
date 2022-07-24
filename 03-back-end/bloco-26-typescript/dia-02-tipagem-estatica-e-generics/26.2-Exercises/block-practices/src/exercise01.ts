export enum colors {
  black = 'black',
  white = 'white',
  red = 'red',
  silver = 'silver'
}

export class Car {
  brand: string;
  color: colors;
  doors: number

  constructor(brand: string, color: colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log('biiiiiiiiiiiiibiiiiiiiiiiiii!!');
  }

  openTheDoor() {

  }

  closeTheDoor() {

  }

  turnOn() {
    console.log('Car is on');
  }

  turnOff() {
    console.log('Car is off');
  }

  speedUp() {

  }

  speedDown() {

  }

  stop() {

  }

  turn() {

  }
}