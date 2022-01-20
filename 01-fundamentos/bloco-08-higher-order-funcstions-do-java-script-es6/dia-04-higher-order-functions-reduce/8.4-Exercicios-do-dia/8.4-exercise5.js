// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// // const names = [
// //   'Aanemarie'
// // ];

// const countingAs = (qtA, item) => {
//   if (item === 'a' || item === 'A') {
//     return qtA += 1;
//   }
//   return qtA;
// }

// const breakWorks = (name) => {
//   const nameSplited = name.split('');
//   const sumofAs = nameSplited.reduce(countingAs, 0);
//   return sumofAs;
// }

// function containsA() {
//   const qtAfromEachArray = names.map((breakWorks))
//   return qtAfromEachArray.reduce((sum, number)=> sum + number);
// }

// console.log(containsA());

// ============================= GABARITO ========================================

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
}

console.log(containsA());