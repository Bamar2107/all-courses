import React, { Component } from 'react'
import { MyName,LastName } from './ContextAPIOne'

export default class ContextAPIFour extends Component {
  render() {
    return (
      <div>
         <MyName.Consumer>
             {
                 (firstname) =>{
                        return (
                           <LastName.Consumer>
                               {
                                   (lastname) =>{
                                       return(
                                        <div>
                                        <h5>{firstname} {lastname}</h5>
                                        <p><code>Context API in react is used to solve the Props Drilling, means, If a Parent component has nested Child components, then to show the props value which is send through the Parent Component will be visible/send value to it's inner-most child component without sharing props value with any other child component.</code></p>
                                        <p><code> But sometimes Context API can leads to function hell, means if we want to send multiple props value then we have to create multiple call back function which may leads to performance decrease.</code></p>
                                        </div>
                                       )
                                   }
                               }
                           </LastName.Consumer>     
                        )
                 }
             }
         </MyName.Consumer>
      </div>
    )
  }
}
