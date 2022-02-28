import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      jokeList: [],
    }
    console.log('constructure');
  }

  async fetchJoke() {
    const fetchHeader = { headers: { Accept: 'application/json' } };
    const fetchResponse = await fetch('https://icanhazdadjoke.com/', fetchHeader);
    const fetchData = await fetchResponse.json();

    this.setState({
      jokeObj: fetchData,
    }, () => console.log('state update'));
  }

  componentDidMount() {
    this.fetchJoke();
    console.log('did mount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  saveJoke() {

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
    const { jokeList } = this.state;
    const loadingElement = <span>Loading...</span>
    console.log('render');

    return (
      <main className='joke-container'>
        <span>
          {jokeList.map(({ id, joke}) => <p key={id}> {joke} </p>)}
        </span>

        <span> Renderização condicional</span>
      </main>
    );
  }
}

export default App;
