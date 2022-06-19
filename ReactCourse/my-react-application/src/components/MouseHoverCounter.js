import React, { Component } from 'react'
import HOCCounterLogic from './HOCCounterLogic'

 class MouseHoverCounter extends Component {
    
  render() {
    const {count, increment,name } = this.props
    return (
      <div>
          {name}:
          <button onMouseOver={increment}>Mouse Hover Count {count} </button>
      </div>
    )
  }
}

export default HOCCounterLogic (MouseHoverCounter,5)