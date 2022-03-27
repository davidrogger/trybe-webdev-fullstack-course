import React, { Component } from 'react';

import backBtn from '../services/globalHelpers';

import Button from 'react-bootstrap/Button';

class NotFound extends Component {

  render() {
    return (
      <div className="notFound-container">
        <h1>
        Error 404
        </h1>
        <em>
        Page Not Found
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

export default NotFound;
