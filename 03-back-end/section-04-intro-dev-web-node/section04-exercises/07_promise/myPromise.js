function areNumbers(payload) {
  return payload.every(Number);
}

async function promiseTest(n1, n2, n3) {
  const promise = new Promise((resolve, reject) => {
    if (!areNumbers([n1, n2, n3])) reject('Please insert just numbers.');
    const calc = (n1 + n2) * n3;
    if (calc <=50 ) reject('Value to low.')
    resolve(calc);
  });
  return promise;
}

async function main() {
  try {
    const response = await promiseTest(100, 2, 3);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

main();