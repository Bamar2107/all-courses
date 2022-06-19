import React, { Component } from 'react'

export default class RefOne extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
    }
// componentDidMount(){
//     console.log(this.inputRef.current);
//     this.inputRef.current.focus();
//     this.inputRef.current.style= 'background-color:lightblue'
//     this.inputRef.current.value='Hi User'

//This function is only used for Refs concept 
// }

changeFocusAndBackGround = () =>{
    
   this.inputRef.current.focus();
   this.inputRef.current.style= 'background-color:lightblue';
   this.inputRef.current.value='Hi User';
}
  render() {
    return (
      <div>
          <input type="text" ref={this.inputRef}/>
          <p>To pass Refs from parent component to child component, we can create a separate class component(parent) then pass the refs.</p>
        <p><code>To see the example of pass the refs from parent to child please uncomment the RefOneParent.js component </code></p>
        <p><code>And if you want to see the only Refs concept then uncomment RefOne.js component from App.js</code></p>
        <p><code>This concept is known as DOM Manipulation from Parent to Child</code></p>
      </div>
    )
  }
}
