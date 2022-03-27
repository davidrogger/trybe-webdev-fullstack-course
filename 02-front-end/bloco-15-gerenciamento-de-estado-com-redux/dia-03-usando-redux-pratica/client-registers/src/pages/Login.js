import React, { Component } from 'react';

import Input from '../components/Input';

import { connect } from 'react-redux';
import changeLogin from '../store/actions/changeLogin';

import { Button } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      fullfilled: false,
    };
  }

  allFullFilled = () => {
    const {email, password} = this.state;

    const emailTest = email.length > 0;
    const passwordTest = password.length > 0;

    this.setState({
      fullfilled: emailTest && passwordTest,
    });


  }

  changeHandler = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.allFullFilled());
  }

  loginBtn = () => {
    const { changeLogin, history } = this.props;
    changeLogin();
    history.push('/customers-record');
  }

  render() {
    const { email, password, fullfilled } = this.state;
    return (
      <div className="login-main-container">
        <div className="login-input-container d-grid">
          <h1>Login:</h1>
        <Input
          id='email'
          type='text'
          placehold='user@e-mail'
          changeHandler={ this.changeHandler }
          value={ email }
        />
        <Input
          id='password'
          type='password'
          placehold='password'
          changeHandler={ this.changeHandler }
          value={ password }
        />
        <Button
        variant="success"
        onClick={ this.loginBtn }
        disabled={ !fullfilled }
        >
          Login
        </Button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeLogin: () => dispatch(changeLogin()),
})

export default  connect(null, mapDispatchToProps)(Login);