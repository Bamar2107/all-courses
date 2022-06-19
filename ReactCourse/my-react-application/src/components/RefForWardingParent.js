import React, { Component } from 'react'
import RefForWardingChild from './RefForWardingChild';

export default class RefForWardingParent extends Component {
    constructor(props) {
      super(props)
    
      this.parent = React.createRef(); 
    }
    changeDemo = () =>{
               this.parent.current.focus();
               this.parent.current.style = 'background-color:lightgreen'
            }
  render() {
    return (
      <div>
      <h4>Ref Forwarding Concept</h4>
         <RefForWardingChild ref={this.parent}/>
         <button className='btn btn-primary' onClick={this.changeDemo}>Click Here</button>
         <p><code>Ref forwarding is a technique for automatically parsing a ref through a component to one of its children.</code></p>
      </div>
    )
  }
}
