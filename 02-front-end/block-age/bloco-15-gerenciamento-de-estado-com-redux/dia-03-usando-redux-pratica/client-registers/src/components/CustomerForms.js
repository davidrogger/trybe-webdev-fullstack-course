import React, { Component } from 'react';

import Input from './Input';

import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';

import { recordCustomer } from '../store/actions/recordCustomers';

class CustomerForms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
      btnDisable: true
    }
  }

  allFullFilled = () => {
    const {name, age, email} = this.state;

    const nameTest = name.length > 0 && age.length > 0 && email.length > 0;

    this.setState({
      btnDisable: !nameTest,
    });
  }

  idGenerator = () => Math.random().toString(16).slice(2);

  changeHandler = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.allFullFilled())
  }

  sentForms = () => {
    const { customerRegister } = this.props;
    const { name, age, email } = this.state;
    const id = this.idGenerator();
    const newCustomer = { id, name, age, email };
    customerRegister(newCustomer);
    this.setState({
      name: '',
      age: '',
      email: '',
      btnDisable: true
    })

  }

  render() {
    const { name, age, email, btnDisable } = this.state;
    
    return (
      <div>
        <Input
        id='name'
        type='text'
        placehold='Nome'
        changeHandler={ this.changeHandler }
        value={ name }
        />
        <Input
        id='age'
        type='text'
        placehold='Idade'
        changeHandler={ this.changeHandler }
        value={ age }
        />

        <Input
        id='email'
        type='text'
        placehold='e-mail'
        changeHandler={ this.changeHandler }
        value={ email }
        />


      <Button
        variant="success"
        onClick={ this.sentForms }
        disabled={ btnDisable }
        >
          Register
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  customerRegister: (value) => dispatch(recordCustomer(value)),
})

export default connect(null, mapDispatchToProps)(CustomerForms);
