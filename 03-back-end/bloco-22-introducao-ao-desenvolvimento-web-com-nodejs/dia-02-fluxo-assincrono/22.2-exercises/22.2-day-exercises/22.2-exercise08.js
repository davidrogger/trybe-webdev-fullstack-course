const exercise08 = (number) => {
  return new Promise((resolve, reject) => {
    const divisibleByFive = number % 5 === 0;
    const divisibleByThree = number % 3 === 0;
    if(divisibleByFive && divisibleByThree) resolve('FizzBuzz')
    if(divisibleByFive) resolve('Buzz');
    if(divisibleByThree) resolve('Fizz');
    reject(number);
  })
}

exercise08(3)
  .then((response) => console.log(response))
  .catch((err) => console.error(`Something wrong ${err}`));