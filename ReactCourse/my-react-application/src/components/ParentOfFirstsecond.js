import React, { Component } from 'react'
import First from './First'
import Second from './Second'

export default class ParentOfFirstsecond extends Component {
       constructor(props) {
         super(props)
       
         this.state = {
            flag:true
         }
       }

    changeToggle = () =>{
          this.setState({
              flag: !this.state.flag
          })
    }
  render() {
    return (
      <div className='container mt-5'>
         {(this.state.flag)?<First/>:<Second/>}
          <button onClick={this.changeToggle} className='btn btn-primary'>Toggle</button>
      </div>
    )
  }
}
