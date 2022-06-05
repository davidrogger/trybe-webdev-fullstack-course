const avgSpeed = (distance, minutesTime) => {
  const avgResult = distance / (minutesTime * 60);
  console.log(`With the distance of ${distance} meters and the ${minutesTime} minutes time the average of speed was ${avgResult.toFixed(2)} seconds per meters`);
};

module.exports = avgSpeed;