import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      jokeList: [],
    }
  }

  async fetchJoke() {
    const fetchHeader = { headers: { Accept: 'application/json' } };
    const fetchResponse = await fetch('https://icanhazdadjoke.com/', fetchHeader);
    const fetchData = await fetchResponse.json();

    this.setState({
      jokeObj: fetchData,
    });
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    const { jokeObj } = this.state;
    this.setState((prevState) => ({
      jokeList: [...prevState.jokeList, jokeObj],
      jokeObj: undefined,
    }));
    this.fetchJoke();
  }

  renderJokeElement() {
    const { jokeObj: { joke } } = this.state;
    return (
      <div>
        <p>{joke}</p>
        <button type="button" onClick={this.saveJoke}>Salvar Piada!</button>
      </div>
    )
  }

  render() {    
    const { jokeList, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>

    return (
      <main className='joke-container'>
        <span>
          { jokeList.map(({ id, joke}) => <p key={id}> {joke} </p>)}
        </span>
        <span>
          { !jokeObj ? loadingElement : this.renderJokeElement() }
        </span>

      </main>
    );
  }
}

export default App;
