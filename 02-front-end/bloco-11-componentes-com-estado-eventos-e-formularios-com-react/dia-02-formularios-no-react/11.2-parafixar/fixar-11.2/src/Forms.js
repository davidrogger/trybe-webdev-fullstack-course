import React, { Component } from 'react'
import SelectState from './components/SelectState';
import AreaText from './components/AreaText';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaText: '',
      selectState: 'Selecione',
      checkBox: false,
      radioBox: 'Estado',
      error: false,
    }

    this.formState = this.formState.bind(this);
    this.caracterLimits = this.caracterLimits.bind(this);
    this.submitSent = this.submitSent.bind(this);

    this.fileInput = React.createRef();

  }

  formState({ target }) {

    const { name } = target;    
    const value = target.type === 'checkbox' ? target.checked : target.value
    if (value.length > 10) this.setState({error: true});
    this.setState({ [name]: value });
  }

  caracterLimits() {
    if (this.state.areaText.length > 10) return this.setState({error: true});
  }

  submitSent(event) {
    event.preventDefault();
    alert(`Arquivo selecionado - ${this.fileInput.current.files[0].name}`)
  }
  
  render() {
    return (
      <form className='forms' onSubmit={this.submitSent}>

        <SelectState formState={this.formState} value={this.state} />

        <AreaText formState={this.formState} value={this.state} caracterLimits={this.caracterLimits} />
        
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
        <input type="file" ref={this.fileInput}/>
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default Forms;