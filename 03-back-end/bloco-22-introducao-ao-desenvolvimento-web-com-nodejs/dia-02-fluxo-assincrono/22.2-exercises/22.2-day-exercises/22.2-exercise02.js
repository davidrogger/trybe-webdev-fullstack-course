const calculate = require('./22.2-exercise01');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

const exercise02 = () => {
  calculate(randomNumber(), randomNumber(), randomNumber())
    .then((response) => console.log(response))
    .catch((err) => console.error(`Somethings wrong: ${err}`));
};

exercise02();