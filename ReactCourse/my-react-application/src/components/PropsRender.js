import React, { Component } from 'react'

export default class PropsRender extends Component {
  render() {
    return (
      <div>
           {this.props.render('Hi, I am props render function parameter')}
           <p><code>Render Props in React is a technique to deliver common code to multiple components through props which value is a function</code></p>
      </div>
    )
  }
}
 