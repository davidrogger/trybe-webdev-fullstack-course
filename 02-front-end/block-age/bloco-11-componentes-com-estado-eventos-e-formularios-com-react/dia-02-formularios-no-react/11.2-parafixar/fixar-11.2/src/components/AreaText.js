import React, { Component } from 'react';

class AreaText extends Component {
  render() {
    const { formState, value: { areaText } } = this.props;    

    return (
      <label className='areaText'>
          Qual estado favorito?
          <textarea name='areaText' value={areaText} onChange={formState}></textarea>
        </label>
    )
  }
}

export default AreaText;
