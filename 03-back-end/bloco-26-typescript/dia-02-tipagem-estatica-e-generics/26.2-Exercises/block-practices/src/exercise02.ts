import { Car, colors, direction } from './exercise01';


const driver = new Car('volkswagen', colors.silver, 4);

function newCall() {
  driver.turnOn();
  console.log('after 600 meters');
  driver.turn(direction.left);
  console.log('Keep straight for 1.2 kilometers');
  console.log('after 300 meters')
  driver.turn(direction.right);
  console.log('400 meters to arrive the destination')
  console.log('destination completed');
  driver.stop();
  driver.openTheDoor();
  driver.closeTheDoor();
  driver.turnOn();
  console.log('in 300 meters turn right');
  driver.turn(direction.right);
  console.log('in 200 meters turn left');
  driver.turn(direction.left);
  console.log('in 400 meters turn right');
  driver.turn(direction.right);
  console.log('100 to arrive destination');
  console.log('destination completed');
  driver.stop();

}

newCall();