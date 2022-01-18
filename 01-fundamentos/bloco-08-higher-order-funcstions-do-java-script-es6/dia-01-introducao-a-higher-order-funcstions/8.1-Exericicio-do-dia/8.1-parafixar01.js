const wakeUp = () => 'Acordando!!';
const breakFast = () => 'Bora tomar café!!';
const goBed = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(breakFast);