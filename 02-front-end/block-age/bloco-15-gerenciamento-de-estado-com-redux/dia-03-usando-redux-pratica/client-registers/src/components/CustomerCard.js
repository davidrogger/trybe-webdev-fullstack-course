import React, { Component } from 'react';

import { connect } from 'react-redux';

import { deleteCustomer } from '../store/actions/recordCustomers';

class CustomerCard extends Component {
  render() {
    const { name, age, email, id, deleteCustomer } = this.props;
    return (
      <div className="customer-card-container">
        <p>
          nome: {name}
        </p>
        <p>
          age: {age}
        </p>
        <p>
          email: {email}
        </p>
        <button
        onClick={ () => deleteCustomer(id) }
        >
          X
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteCustomer: (id) => dispatch(deleteCustomer(id)),
})

export default connect(null, mapDispatchToProps)(CustomerCard);
