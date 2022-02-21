import React, { Component } from 'react';
import Inputs from './Inputs';

class Fieldset extends Component {
  constructor() {
    super();

    this.stateHandler = this.stateHandler.bind(this);
    this.textUpperCase = this.textUpperCase.bind(this);

    this.state = {
      Nome: '',
      NomeLimite: 40,
      Email: '',
      EmailLimite: 50,
    };
  }

  textUpperCase(text) {
    return text.toUpperCase();
  }

  stateHandler({ target }) {
    const { name } = target;
    const newValue = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: this.textUpperCase(newValue) });
   
  }

  render() {
    return (
      <fieldset>
        <legend>Formulário</legend>
        <Inputs inputType='Nome' stateHandler={this.stateHandler} stateValue={this.state} />
        <Inputs inputType='Email' stateHandler={this.stateHandler} stateValue={this.state} />
      </fieldset>
    )
  }
}

export default Fieldset;