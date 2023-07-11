import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h2>Exercise 15.3</h2>
          <nav className="nav-container">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/customers-record">Register Customer</Link>
            </li>
          </nav>
      </div>
    )
  }
}

export default Header;
