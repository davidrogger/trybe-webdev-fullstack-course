export enum colors {
  black = 'black',
  white = 'white',
  red = 'red',
  silver = 'silver'
}

export enum door {
  open = 'open',
  close = 'close',
}

export enum direction {
  right = 'right',
  left = 'left',
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
    console.log(`Doors ${door.open}`);
  }

  closeTheDoor() {
    console.log(`Doors ${door.close}`);
  }

  turnOn() {
    console.log('Car is on');
  }

  turnOff() {
    console.log('Car is off');
  }

  speedUp() {
    console.log('accelerate the car');
  }

  speedDown() {
    console.log('decelerate the car');
  }

  stop() {
    console.log('stoped the car');
  }

  turn(direction: direction) {
    console.log(`Turn ${direction}`);
  }
}