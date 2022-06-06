const { questionInt, question } = require('readline-sync');

const playGame = { start: true, keepPlayingQuestion: true };

const checkNumber = (number) => {
  const maxNumber = 10;
  const randomNumber = Math.floor(Math.random() * maxNumber);
  if(number === randomNumber) return 'Congratulation! you hit the jackpot!';
  return `Ups it wasn\'t this time, the correct number was ${randomNumber}`;
};

const guessingGame = () => {
  const number = questionInt('Chose a number between 0 and 10 ');
  console.table(checkNumber(number));
};

const playerAnswerCheck = (answer) => {
  if(answer === 'y') return ({start: true, keepPlayingQuestion: false});
  if(answer === 'n') return ({start: false, keepPlayingQuestion: false });
}

const game = () => {
  console.table('Welcome to the guessing game!');
  while (playGame.start) {
    playGame.keepPlayingQuestion = true;
    guessingGame()
    while(playGame.keepPlayingQuestion) {
      const keepPlaying = question('Keep playing? (y/n) ');
      if (keepPlaying === 'y' || keepPlaying === 'n')
      {
        const { start,  keepPlayingQuestion } = playerAnswerCheck(keepPlaying);
        playGame.start = start;
        playGame.keepPlayingQuestion = keepPlayingQuestion;
      }  else {
        console.log(`Your answer was ${keepPlaying}, Please answer y or n`);
      }
    }
  }
}

module.exports = game;