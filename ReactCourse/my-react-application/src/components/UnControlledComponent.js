import React, { Component } from 'react'

export default class UnControlledComponent extends Component {
    constructor(props) {
      super(props)
        this.inputRef= React.createRef()
    }

    submitForm(event) {
       event.preventDefault()
       console.log(this.inputRef.current.value)
   }

  render() {
    return (
      <div>
          <form className='m-3' onSubmit={(event)=>this.submitForm(event)}>
              <input type="text" ref={this.inputRef} /><br />
              <input type="submit"/>
          </form>
      </div>
    )
  }
}
