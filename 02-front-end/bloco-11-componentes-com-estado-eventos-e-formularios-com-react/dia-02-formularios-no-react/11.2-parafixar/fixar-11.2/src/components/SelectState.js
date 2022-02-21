import React, { Component } from 'react';

class SelectState extends Component {
  render() {
    const { formState, value: { selectState } } = this.props;
    const errorTest = (selectState === 'Selecione') ? 'error' : '';

    return (
      <select name='selectState' onChange={formState} value={selectState} className={errorTest}>
          <option value='Selecione' disabled>Selecione</option>
          <option value='React'>React</option>
          <option valeu='DOM'>DOM</option>
        </select>
    )
  }
}

export default SelectState;