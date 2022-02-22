import React, { Component } from 'react';

class RadioButtons extends Component {
  render() {
    const { stateHandler, tipoCasa } = this.props;
    console.log(tipoCasa);    

    return (
      <fieldset>
        <legend>Tipo de casa</legend>
        <label htmlFor='casa'>Casa</label>
        <input name='tipoCasa' id='casa' type='radio' value='casa' onChange={stateHandler} checked={tipoCasa === 'casa'} />
        <label htmlFor='Apartamento'>Apartamento</label>
        <input name='tipoCasa' id='Apartamento' type='radio' value='apartamento' onChange={stateHandler} checked={tipoCasa === 'apartamento'} />
      </fieldset>

    )
  }
}

export default RadioButtons;
