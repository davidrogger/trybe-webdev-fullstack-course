import React, { Component } from "react";

class Inputs extends Component {
  render() {
    const {inputType, stateHandler, stateValue} = this.props;
    const caracterLimite = stateValue[`${inputType}Limite`];
    const valueAttention = stateValue[inputType].length >= caracterLimite ? `Limite de ${caracterLimite} caracteres`: '';
    
    return (
      <div>
        <label htmlFor={`input${inputType}`}> {inputType}: </label>
        <input name={inputType} id={`input${inputType}`} type='text' onChange={stateHandler} value={stateValue[inputType]} /> <span className="warning">{valueAttention}</span>
      </div>
    )
  }
}

export default Inputs;
