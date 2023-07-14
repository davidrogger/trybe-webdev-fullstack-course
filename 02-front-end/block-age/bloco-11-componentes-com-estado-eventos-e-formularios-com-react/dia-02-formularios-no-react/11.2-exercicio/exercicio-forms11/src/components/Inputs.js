import React, { Component } from "react";

class Inputs extends Component {
  render() {
    const {inputType, stateHandler, stateValue, firstCaracterNumber} = this.props;
    const caracterLimite = stateValue[`${inputType}Limite`];
    const valueAttention = stateValue[inputType].length > caracterLimite ? `Limite de ${caracterLimite} caracteres`: '';    
    // const blur = firstCaracterNumber ? firstCaracterNumber : none;

    return (
      <div>
        <label htmlFor={`input${inputType}`}> {inputType}: </label>
        <input name={inputType} id={`input${inputType}`} type='text' autoComplete="off"  onChange={stateHandler} value={stateValue[inputType]} onBlur={firstCaracterNumber} /> <span className="warning">{valueAttention}</span>
      </div>
    )
  }
}

export default Inputs;
