// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

const testName = 'desenvolvimento';

function checkName(){  
  const capsName = testName.toLocaleUpperCase(); // deixa todo nome maiusculo para evitar erros na comparação
  const splitNameArray = capsName.split(""); //separa as palavras em array
  splitNameArray.reverse(); // inverte a posição do array do fim para o começo
  const reverseNameString = splitNameArray.join(''); // converte o array em string
  if (capsName === reverseNameString){ // teste se mesmo escrito invertido é um palíndromo
    console.log(true)
  } else {
    // return false;
    console.log(false);
  }  
}
checkName();