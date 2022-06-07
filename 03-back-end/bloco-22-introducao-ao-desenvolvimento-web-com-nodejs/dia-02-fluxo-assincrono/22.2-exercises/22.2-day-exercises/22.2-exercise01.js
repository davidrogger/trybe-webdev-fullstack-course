function promiseNumber(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    const notAnumber = [num1, num2, num3].some((number) => typeof(number) !== 'number');
    if(notAnumber) return reject(new Error('Just numbers allowed'));
    const result = (num1 + num2) / num3;
    if(result < 50) return reject(new Error('Value too low'));
    resolve(result);
  });
}

// console.log(promiseNumber(1000, 200, 20)); // Promise { 60 }
// console.log(promiseNumber(1000, '200', 20)); // <rejected> Error: Just numbers allowed
// console.log(promiseNumber(1000, 'oi', 20)); // <rejected> Error: Just numbers allowed
// console.log(promiseNumber(10, 10, 20)); // <rejected> Error: Value too low

module.exports = promiseNumber;