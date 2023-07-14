import { useState, useEffect } from 'react';

type IJokeResponse = {
  id: string,
  joke: string,
  status: number,
}

function Jokes() {
  const [joke, setJoke] = useState('');

  function fetchJoke() {
    const API_URL = 'https://icanhazdadjoke.com';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    fetch(API_URL, REQUEST_CONFIG)
      .then((response) => response.json())
      .then((data:IJokeResponse) => setJoke(data.joke))
      .catch((e) => {
        console.log(e);
        setJoke('No Jokes was found.');
      });
  }

  useEffect(() => {
    fetchJoke();
  }, []);
  return (
    <div className='joke-container'>
      <p>{ joke }</p>
      <button
        onClick={fetchJoke}
      >
        New Joke
      </button>
    </div>
  )
}

export default Jokes;
