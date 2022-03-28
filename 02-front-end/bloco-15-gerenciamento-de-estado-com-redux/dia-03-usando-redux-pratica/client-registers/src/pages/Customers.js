import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import CustomerCard from '../components/CustomerCard';

import Header from '../components/Header';

class CustomersRecord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      organize: false,
    }
  }

  customersList = (customers) => {
    const { organize } = this.state;
    const customersList = [...customers];
    if( organize ) {
      // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
      // muasif80
      customersList.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
    }
    return customersList.map(({ id, name, age, email }) => (
      <CustomerCard key={id} id={id} name={name} age={age} email={email} />
    ))
  }

  render() {
    const { login, customers } = this.props;
    const { organize } = this.state;
    const customersDisplay = customers.length === 0;
    const customerEmpty = `Nenhum cliente cadastrado`;
    return login ? (
      <>
        <Header />
        <div className="painel-container">
        <button
          type="button"
          onClick={ () => this.setState((prevState) => ({ organize: !prevState.organize }))}
          >
            Ordem Alfabetica: { organize ? 'Ligado' : 'Desligado' }
          </button>
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