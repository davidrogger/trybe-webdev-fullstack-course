// https://www.youtube.com/watch?v=pfkkdzeyx6U
const hydrate = (string) => {
  const numberFinder = /\d+/g;
  const allNumbers = string.match(numberFinder);
  let waterNeed = 0;
  for(drinks of allNumbers) {
    waterNeed += parseInt(drinks);
  }
  if(waterNeed === 1) {
    return `${waterNeed} copo de água`;
  }
  return `${waterNeed} copos de água`;

}

module.exports = hydrate;