import React, { Component } from 'react';

import { Form } from 'react-bootstrap';

class Input extends Component {
  render() {
    const { label, id, type, placehold, changeHandler, value } = this.props;
    return (              
      <Form.Control
      type={ type }
      id={ id }
      placeholder={ placehold }
      value={ value }
      onChange={ changeHandler }
      />
      
    )
  }
}

export default Input;
