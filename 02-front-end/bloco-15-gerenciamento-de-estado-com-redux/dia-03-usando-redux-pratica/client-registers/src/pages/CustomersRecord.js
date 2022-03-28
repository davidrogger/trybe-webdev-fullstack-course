import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import Header from '../components/Header';

import CustomerForms from '../components/CustomerForms';

class CustomersRecord extends Component {

  render() {
    const { login } = this.props;
    return login ? (
      <>
        <Header />
        <div className="painel-container">
          <h1>
            New Customer
          </h1>
          <CustomerForms />
        </div>
      </>
    ) : <Redirect to="/please-login" />;
  }
}

const mapStateToProps = (state) => ({
  login: state.loginReducer.login,
  customers: state.recordCustomerReducer.customers,
})

export default connect(mapStateToProps, null)(CustomersRecord);