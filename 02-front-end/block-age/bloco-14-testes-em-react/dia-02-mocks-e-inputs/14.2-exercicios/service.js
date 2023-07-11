const randomNumber = () => Math.floor(Math.random() * 100);

const upperCaseString = (phrase) => {
  return phrase.toUpperCase();
}

const firstLetter = (word) => {
  return word[0];
}

const twoPhrases = ( phrase1, phrase2 ) => {
  return (`${phrase1} ${phrase2}`);
}


module.exports = { randomNumber, upperCaseString, firstLetter, twoPhrases };