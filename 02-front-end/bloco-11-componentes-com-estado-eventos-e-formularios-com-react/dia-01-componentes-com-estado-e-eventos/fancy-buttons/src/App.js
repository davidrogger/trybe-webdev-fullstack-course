import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.firstButton = this.firstButton.bind(this);
    this.secondButton = this.secondButton.bind(this);
    this.thirdButton = this.thirdButton.bind(this);
    this.state = {
      countClick1: 0,
      countClick2: 0,
      countClick3: 0
    }

  }

  firstButton() {    
    this.setState((state, _props) => ({
      countClick1: state.countClick1 +1
    }))
  }
  
  secondButton() {
    this.setState((state, _props) => ({
      countClick2: state.countClick2 +1
    }))
  }

  thirdButton() {
    this.setState((state, _props) => ({
      countClick3: state.countClick3 +1
    }))
  }

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {    
    return (
      <div>
        <button onClick={this.firstButton} style={ {background: this.buttonColor(this.state.countClick1)} }>{this.state.countClick1}</button>
        <button onClick={this.secondButton} style={ {background: this.buttonColor(this.state.countClick2)} }>{this.state.countClick2}</button>
        <button onClick={() => this.setState((state) => ({countClick3: state.countClick3 + 1}))} style={ {background: this.buttonColor(this.state.countClick3)} }>{this.state.countClick3}</button>
      </div>
    )
  }
}

export default App;


// Parte 02
// import React, { Component } from 'react'
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.firstButton = this.firstButton.bind(this);
//     this.secondButton = this.secondButton.bind(this);
//     this.thirdButton = this.thirdButton.bind(this);
//   }

//   firstButton() {
//     console.log(this)
//     console.log('Ha')
//   }
  
//   secondButton() {
//     console.log('du')
//   }
//   thirdButton() {
//     console.log('ken')    
//   }

//   render() {    
//     return (
//       <div>
//         <button onClick={this.firstButton}>Ha</button>
//         <button onClick={this.secondButton}>du</button>
//         <button onClick={this.thirdButton}>ken</button>
//       </div>
//     )
//   }
// }

// export default App;

///////////// Parte 1
// import React, { Component } from 'react'
// import './App.css';

// function firstButton() {
//   console.log('Ha')
// }

// function secondButton() {
//   console.log('du')
// }

// function thirdButton() {
//   console.log('Ha')
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <button onClick={firstButton}>Ha</button>
//         <button onClick={secondButton}>du</button>
//         <button onClick={thirdButton}>ken</button>
//       </div>
//     )
//   }
// }

// export default App;
