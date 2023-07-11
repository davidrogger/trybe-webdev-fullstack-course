import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './pokemon';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='pokedex-container'>
        {console.log(this)}
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;