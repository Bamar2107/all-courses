import React, { Component } from 'react'

export default class First extends Component {
    componentWillUnmount(){
        console.log(`First Component Unmount`);
    }
  render() {
    return (
      <div>First Component</div>
    )
  }
}
