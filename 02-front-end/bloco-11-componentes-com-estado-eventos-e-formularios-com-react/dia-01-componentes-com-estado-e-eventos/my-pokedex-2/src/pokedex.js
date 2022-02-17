import React, { Component } from 'react';
import Pokemon from './pokemon';
import pokemons from './data';
import ButtonTypes from './ButtonTypes';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokePosition: 0,
      pokeFilter: 'All'
    }

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterButton = this.filterButton.bind(this);

  }

  filterButton(type) {
    this.setState({ pokePosition: 0 })
    this.setState({ pokeFilter: type });
  }

  filterPokemon() {
    const { pokeFilter } = this.state;
    if (pokeFilter !== 'All') {
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
      this.setState((state) => ({
        pokePosition: state.pokePosition + 1,
      }))
    }
  }

  allPokeTypes() {
    const allTypes = pokemons.map((pokemon) => pokemon.type);
    allTypes.push('All');
    return allTypes.filter((type, index) => allTypes.indexOf(type) === index);
  }

  render() {
    const pokeFiltered = this.filterPokemon();
    const pokeDisplay = pokeFiltered[this.state.pokePosition];
    const pokeFilter = this.filterPokemon();
    const typeButtons = this.allPokeTypes();

    return (
      <main className='pokedex-container'>
        <Pokemon key={pokeDisplay.id} pokemon={pokeDisplay} />
        <div className='button-container'>
          <button onClick={() => this.nextPokemon(pokeFilter)} disabled={pokeFilter.length <= 1}>Next Pokemon</button>
          <div className='type-buttons'>
            {typeButtons.map((type) => <ButtonTypes key={type} filterButton={this.filterButton} buttons={type} />)}
          </div>
        </div>
      </main>
    )
  }
}

export default Pokedex;