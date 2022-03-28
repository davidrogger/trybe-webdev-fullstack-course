import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import CustomerCard from '../components/CustomerCard';

import Header from '../components/Header';

class CustomersRecord extends Component {

  customersList = (customers) => {
    return customers.map(({ id, name, age, email }) => (
      <CustomerCard key={id} id={id} name={name} age={age} email={email} />
    ))
  }

  render() {
    const { login, customers } = this.props;
    const customersDisplay = customers.length === 0;
    const customerEmpty = `Nenhum cliente cadastrado`;
    return login ? (
      <>
        <Header />
        <div className="painel-container">
          <h1>
            Customer Recorded
          </h1>
          {customersDisplay
          ? customerEmpty
          : this.customersList(customers) }
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