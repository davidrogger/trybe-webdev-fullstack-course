import React, { Component } from 'react';

class CustomerCard extends Component {
  render() {
    const { name, age, email, removeCustomer } = this.props;
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
        <button>X</button>
      </div>
    )
  }
}

export default CustomerCard;
