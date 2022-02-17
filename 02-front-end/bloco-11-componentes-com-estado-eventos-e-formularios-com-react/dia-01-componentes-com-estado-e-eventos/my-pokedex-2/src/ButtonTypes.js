import React, { Component } from "react";

class ButtonTypes extends Component {
  render () {
  const type = this.props.buttons
  return (
    <div>
      <button onClick={() => this.props.filterButton(type)}>{type}</button>      
    </div>
  )
}
}

export default ButtonTypes;