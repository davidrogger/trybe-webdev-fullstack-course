import React, { Component } from 'react';

import backBtn from '../services/globalHelpers';

import Button from 'react-bootstrap/Button';

class NotLogin extends Component {
  render() {
    return (
      <div className="notFound-container">
        <h1>
          Error
        </h1>
        <em>
          Login não efetuado
        </em>
        <Button
          onClick={ () => backBtn(this.props) }
        >
          Voltar
        
        </Button>
      </div>
    )
  }
}

export default NotLogin;
