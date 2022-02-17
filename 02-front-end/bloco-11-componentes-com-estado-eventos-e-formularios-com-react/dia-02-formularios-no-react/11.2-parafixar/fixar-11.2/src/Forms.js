import React, { Component } from 'react'

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaText: '',
      selectState: 'Selecione',
      checkBox: false,
      radioBox: 'Estado',
    }

    this.formState = this.formState.bind(this);

  }

  formState({ target }) {

    const { name } = target;
    console.log(target.value)
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className='forms'>
        <select name='selectState' onChange={this.formState} value={this.state.selectState}>
          <option value='Selecione' disabled>Selecione</option>
          <option value='React'>React</option>
          <option valeu='DOM'>DOM</option>
        </select>
        <label className='areaText'>
          Qual estado favorito?
          <textarea name='areaText' value={this.state.areaText} onChange={this.formState}></textarea>
        </label>
        <label>
          Gostou de Estado controlado dos componentes?
          <input type='checkbox' name='checkBox' value={this.state.checkBox} onChange={this.formState}></input>
        </label>
        <fieldset>
          <legend>Quais os valores</legend>
          <label> 
            <input type='radio' name='radioBox' value='Estado' onChange={this.formState}></input>
            Estado
          </label>
          <label> 
            <input type='radio' name='radioBox' value='Componentes' onChange={this.formState} ></input>
            Componentes
          </label>
        </fieldset>

      </form>
    )
  }
}

export default Forms;