import React, { Component } from 'react'

 class MemoExample extends Component {
  render() {
      console.log(this.props.data);
    return (
      <div>
           Data : {this.props.data}
           <p className='text-danger'><strong>
               <code>React.memo</code> is a higher order component.
               <br /><br />
               if your componentrenders the same result given the same props, you can wrap it in a call to React.memo for performance
               boost in some cases by memorizing the result. This means that React will skip rendering the component, and reuse 
               the last rendering result.
               <br /><br />
               React.memo only checks for props changes, if your function component wrapped in React.memo has a useState, useReducer or
               useContext Hook in its implementation. it will still render when state or context change.
               <br /><br />
               in class component, you can use PureComponent for not render the same props, it works same as the React.memo
           </strong></p>
      </div>
    )
  }
}



export default React.memo(MemoExample)