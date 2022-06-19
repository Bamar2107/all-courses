import React, { Component } from 'react'

export default class Second extends Component {
    componentWillUnmount(){
        console.log(`Second Component Unmount`);
    }
  render() {
    return (
      <div>Second Component</div>
    )
  }
}
