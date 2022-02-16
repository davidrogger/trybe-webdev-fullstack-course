import React, { Component } from 'react';
import Pokemon from './pokemon';
import pokemons from './data';
import ButtonTypes from './ButtonTypes';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokePosition: 0,
      pokeFilter: 'all'
    }

    this.nextPokemon = this.nextPokemon.bind(this);

  }

  filterPokemon() {
    const { pokeFilter } = this.state;
    if (pokeFilter !== 'all') {      
      const pokeFiltered = pokemons.filter(({ type }) => {        
        return type === pokeFilter;
      });
      return pokeFiltered;
    } else {
      return pokemons;
    }    
  }

  nextPokemon(pokelist) {
    if (this.state.pokePosition === pokelist.length - 1) {
      this.setState({ pokePosition: 0 })
    } else {
      console.log(this.state.pokePosition)
      this.setState((state) => ({
        pokePosition: state.pokePosition + 1,
      }))
    }
  }

  render() {
    const pokeFiltered = this.filterPokemon();
    const pokeDisplay = pokeFiltered[this.state.pokePosition];
    const pokeFilter = this.filterPokemon();

    return (
      <main className='pokedex-container'>
        <Pokemon key={pokeDisplay.id} pokemon={pokeDisplay} />
        <div className='button-container'>
          <button onClick={() => this.nextPokemon(pokeFilter)} disabled={ pokeFilter.length <= 1 }>Next Pokemon</button>
          <ButtonTypes />
        </div>
      </main>
    )
  }
}

export default Pokedex;