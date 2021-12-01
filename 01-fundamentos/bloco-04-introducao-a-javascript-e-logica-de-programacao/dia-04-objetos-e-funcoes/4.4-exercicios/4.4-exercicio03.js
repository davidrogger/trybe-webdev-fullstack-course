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