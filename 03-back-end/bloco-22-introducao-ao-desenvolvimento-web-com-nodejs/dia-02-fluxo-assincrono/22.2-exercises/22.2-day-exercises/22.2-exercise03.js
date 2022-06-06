const exercise01 = require('./22.2-exercise01');

const randomNumber = () => Math.floor(Math.random() * 100 + 1);

async function exericse03() {
  try {
    const response = await exercise01(randomNumber(), randomNumber(), randomNumber());
    console.log(response);
  } catch(err) {
    console.error(`Something went wrong: ${err}`);
  }
}

exericse03();