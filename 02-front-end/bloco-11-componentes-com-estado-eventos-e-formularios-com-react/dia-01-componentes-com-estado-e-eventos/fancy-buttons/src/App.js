import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.firstButton = this.firstButton.bind(this);
    this.secondButton = this.secondButton.bind(this);
    this.thirdButton = this.thirdButton.bind(this);
  }

  firstButton() {
    console.log(this)
    console.log('Ha')
  }
  
  secondButton() {
    console.log('du')
  }
  thirdButton() {
    console.log('ken')    
  }

  render() {    
    return (
      <div>
        <button onClick={this.firstButton}>Ha</button>
        <button onClick={this.secondButton}>du</button>
        <button onClick={this.thirdButton}>ken</button>
      </div>
    )
  }
}

export default App;
