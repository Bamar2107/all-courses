import React, { PureComponent } from 'react'

export default class PureComponentClass extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    changeState = () =>{
        console.log(`changeState clicked`);
        this.setState({
            count:1
        })
    }
  render() {
      console.log(`Render Function called`);
    return (
      <div>
          Count : {this.state.count}
          <br />
          <button className='btn btn-primary' onClick={this.changeState}>Change Count</button>
      </div>
    )
  }
}