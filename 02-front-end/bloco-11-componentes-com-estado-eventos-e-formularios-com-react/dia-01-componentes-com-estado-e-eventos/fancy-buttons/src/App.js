import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.firstButton = this.firstButton.bind(this);
    this.secondButton = this.secondButton.bind(this);
    this.thirdButton = this.thirdButton.bind(this);
    this.state = {
      countClick: 0
    }

  }

  firstButton() {    
    this.setState((state, _props) => ({
      countClick: state.countClick +1
    }))
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
        <button onClick={this.firstButton}>{this.state.countClick}</button>
        <button onClick={this.secondButton}>du</button>
        <button onClick={this.thirdButton}>ken</button>
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
