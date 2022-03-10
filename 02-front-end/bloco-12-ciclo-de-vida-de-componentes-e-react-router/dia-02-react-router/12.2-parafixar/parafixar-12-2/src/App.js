import React, { Component } from 'react';
import './App.css';

const ComponentPai = (props) => {
  return (
    <div>
      {console.log(props)}
      {props.children}
    </div>
  )
}

class App extends Component {
  render() {
    
    return (
      <div className="App">
      <ComponentPai>
        <p>SUPIMPA</p>
        <h1>BACANA</h1>
        <span>INCRÍVEL</span>
        <p>INCRÍVEL2</p>
      </ComponentPai>
      </div>
    );
  }
}

export default App;
