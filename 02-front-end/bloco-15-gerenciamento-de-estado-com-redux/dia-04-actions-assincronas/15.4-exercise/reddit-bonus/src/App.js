import React, { Component } from 'react';
import './App.css';

import SelectSubReddit from './store/components/SelectSubReddit';
import TitlesSubReddit from './store/components/TitlesSubReddit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectSubReddit />
        <TitlesSubReddit />
      </div>
    );
  }
}

export default App;
