// O primeiro será um array de respostas corretas (Gabarito)
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
//  segundo será um array de respostas a serem verificadas (respostas da pessoa estudante)
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
//terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante

const testCheck = (arrayBase, arrayComparer) => {
  if (arrayBase === arrayComparer) return 1;
  if (arrayComparer === 'N.A') return 0
  return -0.5;
}


const test = (arrayBase, arrayComparer, comparerTool) => {
  let totalScore = 0;
  for(let indexBase = 0; indexBase < arrayComparer.length; indexBase += 1) {
    const score = comparerTool(arrayBase[indexBase], arrayComparer[indexBase]);
    totalScore += score;
  }
  return totalScore;
  
};

console.log(test(RIGHT_ANSWERS, STUDENT_ANSWERS, testCheck));

module.exports = { test, testCheck };