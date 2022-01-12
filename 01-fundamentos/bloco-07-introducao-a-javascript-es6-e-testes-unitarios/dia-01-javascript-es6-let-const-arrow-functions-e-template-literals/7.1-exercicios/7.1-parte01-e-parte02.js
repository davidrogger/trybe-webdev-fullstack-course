// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }  
// }

// testingScope(true);


// Parte I
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

// sort() https://www.youtube.com/watch?v=N4G7XtU75kU

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];


// console.log(`Filtro array crescente ${oddsAndEvens.sort((a,b) => a - b)}`); // será necessário alterar essa linha 😉

// Parte II
// recursividade https://www.youtube.com/watch?v=NKymAD4pJZI

// const fatorial = (n) => {
//   let result = n;
//   for(let cont = (n - 1); cont >= 1; cont -= 1) {
//     result = result * cont;
//   }
//   return result;
// }

// console.log(fatorial(5));

// const fatorial = number => number > 1 ? number * fatorial(number - 1) : 1;

// console.log(fatorial(5));

// const biggerWord = phrase => {
//   const splitPhras = phrase.split(' ');
//   let biggerWordArray = splitPhras[0];
//   for(let index = 0; index < splitPhras.length; index += 1) {
//     if(biggerWordArray.length < splitPhras[index].length) {
//       biggerWordArray = splitPhras[index];
//     }    
//   }
//   return biggerWordArray;
// }

// console.log(biggerWord('qual sera a palavra maior aqui =P'));

// Requisito 4
// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

// const xWord = word => `Tryber ${word} aqui!`

// console.log(xWord('dale'));

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

// const skills = ['html', 'css', 'javascript', 'unix', 'play'];

