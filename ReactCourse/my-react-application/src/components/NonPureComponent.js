import React, { Component } from 'react'

export default class NonPureComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
     changeCount = () =>{
        this.setState({
            count:1
        })
    }
  render() {
      console.log(`Render Function call`);
    return (
      <div>
          Count : {this.state.count}
          <br />
          <button className='btn btn-primary' onClick={this.changeCount}>Change count</button>
      </div>
    )
  }
}
