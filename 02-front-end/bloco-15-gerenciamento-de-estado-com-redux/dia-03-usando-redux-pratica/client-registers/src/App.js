import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import CustomersRecord from './pages/CustomersRecord';
import NotFound from './pages/NotFound';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/" component={ Login }/>
        <Route exact path="/customers-record" component={ CustomersRecord }/>
        <Route path="*" component={ NotFound }/>
      </Switch>
    </div>
  );
}

export default App;
