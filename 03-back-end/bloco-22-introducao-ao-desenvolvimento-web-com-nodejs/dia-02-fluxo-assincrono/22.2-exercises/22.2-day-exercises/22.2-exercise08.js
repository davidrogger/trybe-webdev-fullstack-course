const exircise08 = (number) => {
  return new Promise((resolve, reject) => {
    const divisibleByFive = number % 5 === 0;
    const divisibleByThree = number % 3 === 0;
    if(divisibleByFive && divisibleByThree) resolve('FizzBuzz')
    if(divisibleByFive) resolve('Buzz');
    if(divisibleByThree) resolve('Fizz');
    reject(number);
  })
}

console.log(exircise08(21));