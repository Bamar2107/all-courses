import React, { Component } from 'react'
const HOCCounterLogic = (WrappedComponent, incrementValue) =>{
 class HOCCounterLogic extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      incrementCount = () =>{
          this.setState({
              count: this.state.count+incrementValue
          })
      }
  render() {
    return (
      <div>
           <WrappedComponent count={this.state.count} increment={this.incrementCount} {...this.props}/>
      </div>
    )
  }
}
return HOCCounterLogic
}

export default HOCCounterLogic;