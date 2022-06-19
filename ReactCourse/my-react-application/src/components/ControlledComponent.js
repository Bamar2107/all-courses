import React, { Component } from 'react'

export default class ControlledComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:''
      }
    }
    submitForm(e){
        e.preventDefault()
        console.log(this.state.name
            );
    }
  render() {
    return (
      <div>
         <form className='m-3' onSubmit={(e)=>this.submitForm(e)}>
             <input type="text" value={this.state.name} onChange={(event)=> this.setState({name:event.target.value})} />
             <br />
             <input type="submit" />
         </form>
      </div>
    )
  }
}
