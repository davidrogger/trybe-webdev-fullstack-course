const { questionInt } = require('readline-sync');

const avgSpeed = (distance, minutesTime) => {
  const avgResult = distance / (minutesTime * 60);
  console.log(`With the distance of ${distance} meters and the ${minutesTime} minutes time the average of speed was ${avgResult.toFixed(2)} seconds per meters`);
};

const speedQuestions = () => {
  console.log('Measuring the car average speed')
  const distance = questionInt('What is the traveled distance in meters? ');
  const time = questionInt('It took how much time to complete the path in minutes? ');
  avgSpeed(distance, time);
}


module.exports = speedQuestions;