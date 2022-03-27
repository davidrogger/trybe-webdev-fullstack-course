import React, { Component } from 'react';
import NotLogin from './NotLogin';

import { connect } from 'react-redux'

class CustomersRecord extends Component {
  render() {
    const { login } = this.props;
    return login ? (
      <div>
        Clientes
      </div>
    ) : <NotLogin />;
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
})

export default connect(mapStateToProps, null)(CustomersRecord);