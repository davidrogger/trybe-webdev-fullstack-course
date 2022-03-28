import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Login from './pages/Login';
import NotLogin from './pages/NotLogin';
import CustomersRecord from './pages/CustomersRecord';
import Customers from './pages/Customers';
import NotFound from './pages/NotFound';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/customers-record" component={ CustomersRecord }/>
        <Route exact path="/customers" component={ Customers }/>
        <Route exact path="/please-login" component={ NotLogin }/>
        <Route exact path="/login" component={ Login }/>
        <Route exact path="/" component={ Home }/>
        <Route path="*" component={ NotFound }/>
      </Switch>
    </div>
  );
}

export default App;
