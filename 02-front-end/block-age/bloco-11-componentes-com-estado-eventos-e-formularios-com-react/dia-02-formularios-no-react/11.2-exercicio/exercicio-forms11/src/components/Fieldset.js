import React, { Component } from 'react';
import Inputs from './Inputs';
import EstadosBrasil from './EstadosBrasil';
import RadioButtons from './RadioButtons';

class Fieldset extends Component {
  constructor() {
    super();

    this.stateHandler = this.stateHandler.bind(this);
    this.textUpperCase = this.textUpperCase.bind(this);
    this.firstCaracterNumber = this.firstCaracterNumber.bind(this);

    this.state = {
      Nome: '',
      NomeLimite: 40,
      NomeCallBack: this.textUpperCase,
      Email: '',
      EmailLimite: 50,
      CPF: '',
      CPFLimite: 11,
      Endereco: '',
      EnderecoLimite: 200,
      EnderecoCallBack: this.specialCaracter,
      Cidade: '',
      CidadeLimite: 28,
      EstadosBrasil: 'Escolha um Estado',
      tipoCasa: '',
    };
  }

  firstCaracterNumber() {
    const regex = /^[0-9]/g;
    if (regex.test(this.state.Cidade)) {
      this.setState({Cidade: ''});
    }  
}

specialCaracter(text, backup) {
  const regexSpace = /[!-/:-@[-`{-~]/g;

  if (!regexSpace.test(text)) {
    return text;
  } else {
    return backup;
  }
}

textUpperCase(text) {
  return text.toUpperCase();
}

stateHandler({ target }) {
  const { name } = target;
  const newValue = target.type === 'checkbox' ? target.checked : target.value;
  if (this.state[name + 'CallBack']) {
    this.setState({ [name]: this.state[name + 'CallBack'](newValue, this.state[name]) });
  } else {
    this.setState({ [name]: newValue });
  }
}

render() {
  return (
    <fieldset className='input-container'>
      <legend>Formulário</legend>
      <Inputs inputType='Nome' stateHandler={this.stateHandler} stateValue={this.state} />
      <Inputs inputType='Email' stateHandler={this.stateHandler} stateValue={this.state} />
      <Inputs inputType='CPF' stateHandler={this.stateHandler} stateValue={this.state} />
      <Inputs inputType='Endereco' stateHandler={this.stateHandler} stateValue={this.state} />
      <Inputs inputType='Cidade' stateHandler={this.stateHandler} stateValue={this.state} firstCaracterNumber={this.firstCaracterNumber} />
      <EstadosBrasil value={this.state.EstadosBrasil} stateHandler={this.stateHandler}/>
      <RadioButtons stateHandler={this.stateHandler} tipoCasa={this.state.tipoCasa} />
    </fieldset>
  )
}
}

export default Fieldset;