const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(accumulator, item) {  
 return accumulator.concat(item);
}

console.log(arrays.reduce(flatten, []))