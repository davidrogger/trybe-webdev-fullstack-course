import { useState, useEffect } from 'react';
import '../App.css';

export default function Counter() {
  const [ countdown, setcountdown ] = useState(0);
  const [counterId, setCounterId] = useState(null);
  const [randomNumber, setRandomNumber] = useState(0);
  const [correct, setCorrect] = useState(false);

  const counterStyle = {
    width: '125px',
    display: 'flex',
    flexDirection: 'columm',
  }

  const numberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    setRandomNumber(randomNumber);
  }

  const startCounting = () => {
    const counterId = setInterval( () => 
      setcountdown((prevState) => prevState + 1), 1000);
    setCounterId(counterId);
  }

  useEffect(() => startCounting , []);

  useEffect(() => {
    if ( countdown % 10 === 0 && countdown !== 0 ) numberGenerator();
    if ( correct ) setTimeout(() => setCorrect(false), 4000)
  }, [countdown, correct])
  
  useEffect(() => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setCorrect(true);
    } 
  },[randomNumber])

  return (
    <div className="timer-container">
      <p>counter: {countdown}</p>
      <p>Number:  {randomNumber}</p>
      { correct && <p>Acertou!</p>}
    </div>
  )
}