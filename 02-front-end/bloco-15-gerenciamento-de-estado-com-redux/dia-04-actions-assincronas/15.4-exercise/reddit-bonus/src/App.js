import React, { Component } from 'react';
import './App.css';

import SelectSubReddit from './store/components/SelectSubReddit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectSubReddit />
      </div>
    );
  }
}

export default App;
