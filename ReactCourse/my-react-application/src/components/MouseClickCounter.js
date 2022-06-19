import React, { Component } from 'react'
import HOCCounterLogic from './HOCCounterLogic'

 class MouseClickCounter extends Component {
    
  render() {
      const {count, increment,name } = this.props
    return (
      <div>
      {name}:
          <button onClick={increment}>Mouse Click Count {count}</button>
      </div>
    )
  }
}

export default HOCCounterLogic( MouseClickCounter,10 )