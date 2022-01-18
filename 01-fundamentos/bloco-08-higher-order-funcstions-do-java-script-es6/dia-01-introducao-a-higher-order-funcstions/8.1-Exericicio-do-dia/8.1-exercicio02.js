//https://www.w3schools.com/js/js_random.asp

const betCheck = (lotteryResult, myNumber) => lotteryResult === myNumber;

const lottery = (bet, checkNumber) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return checkNumber(randomNumber, bet) ? 'Parabéns você ganhou':'Tente novamente';
};

console.log(lottery(5, betCheck));