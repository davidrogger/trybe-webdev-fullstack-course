import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    }
  }

fetchCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character/');
  const data = await response.json();

  this.setState({
    characters: data.results
  });
}

componentDidMount() {
  this.fetchCharacters();
}

  render() {
    const { characters } = this.state;
    return (
      <main className='App'>
        <h1>Ricky and Morty Characters:</h1>
        <section className='body'>
        {characters.map(({name, image, id}) => {
          return (
            <section className='container' key={id}>
              <h3>{name}</h3>
              <img src={image} alt={name} />
            </section>
          )
        })}
        </section>
      </main>
    )
  }
}

export default App;
