const readline = require('readline-sync');

function fibonacci(n) {
  let before = 0;
  let current = 1;

  console.log(before);
  console.log(current);

  let after = before + current;

  if (n <= 0) throw new Error('Number most be positive and above 0.');

  for (let sequece = 1; sequece < n; sequece++) {
    console.log(after);
    before = current;
    current = after;
    after = before + current;
  }
}

function main() {
  try {
    console.log('Insert a value bigger than zero, to create a fibonacci sequence.')
    const sequence = readline.questionInt('Type a value: ');
    fibonacci(sequence);
  } catch (e) {
    console.error(e.message);
  }

}

main();

module.exports = main;
