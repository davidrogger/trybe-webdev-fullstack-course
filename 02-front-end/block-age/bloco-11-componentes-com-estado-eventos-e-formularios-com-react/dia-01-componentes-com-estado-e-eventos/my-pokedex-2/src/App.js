import './App.css';
import Pokedex from './pokedex';
import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <main className='main-container'>
        <header className='head-container'>
          <h1>Pokedex</h1>
        </header>
        <Pokedex />
      </main>
    );
  }
}

export default App;
