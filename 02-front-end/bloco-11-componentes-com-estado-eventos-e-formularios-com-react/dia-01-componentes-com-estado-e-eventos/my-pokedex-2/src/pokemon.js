import React, { Component } from "react";
import PropsTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;

    return (
      <div className="pokemon-container">
        <div className="info-container">
          <p>Nome: {name}</p>
          <p>Tipo: {type}</p>
          <p>Peso Médio: {`${value} ${measurementUnit}`}</p>
        </div>
        <div className="image-container">
          <img src={image} alt='render pokemon sprite preview' />
        </div>        
      </div>     
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropsTypes.shape({
    name: PropsTypes.string.isRequired,
    type: PropsTypes.string.isRequired,
    averageWeight: PropsTypes.shape({
      value: PropsTypes.number.isRequired,
      measurementUnit: PropsTypes.string.isRequired,
    })
  })
}

export default Pokemon;