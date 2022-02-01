import React, { Component } from 'react'
import './App.css';

function firstButton() {
  console.log('Ha')
}

function secondButton() {
  console.log('du')
}

function thirdButton() {
  console.log('ken')
}

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={firstButton}>Ha</button>
        <button onClick={secondButton}>du</button>
        <button onClick={thirdButton}>ken</button>
      </div>
    )
  }
}

export default App;
