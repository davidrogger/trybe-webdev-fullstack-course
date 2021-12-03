// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function checkString (word, ending){
  if (ending.length < word.length){
    let reverseWord = reverseString(word);
    let reverseEnding = reverseString(ending);
    let qtEgualWords = 0;
    for (let index = 0; index < reverseEnding.length; index += 1){
      if (reverseWord.charAt(index) == reverseEnding.charAt(index)){
        qtEgualWords += 1;
      }       
    }
    if (qtEgualWords == reverseEnding.length){
      return true;
    } else {
      return false;
    }
  } else {
    return 'Letras finais devem ser menores que a palavra.'
  }
}

function reverseString (word){ // criei uma function para reverter a escrita das palavras
  let capsWord = word.toUpperCase(); // toda palavra maiuscula
  let splitWord = capsWord.split(''); // transforma em array
  let reverseArray = splitWord.reverse(); // inverte a posicao do array
  let joinArray = reverseArray.join(''); // converte o array para string
  return joinArray;
}

console.log(checkString ('joaofernando', 'joaofernandodasilva'));