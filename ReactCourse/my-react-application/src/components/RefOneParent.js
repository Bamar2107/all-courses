import React, { Component } from 'react'
import RefOne from './RefOne';

export default class RefOneParent extends Component {
      constructor(props) {
        super(props)
      
        this.parentInput = React.createRef();
      }
      assignRef = () =>{
          console.log(this.parentInput.current);
          this.parentInput.current.changeFocusAndBackGround();
      }
    render() {
    return (
      <div>
           <RefOne ref={this.parentInput}/>
           <button className='btn btn-primary' onClick={this.assignRef}>Click</button>
      </div>
    )
  }
}
