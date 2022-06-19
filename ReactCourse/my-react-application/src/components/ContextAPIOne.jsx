import React, { Component } from 'react'
import ContextAPITwo from './ContextAPITwo'

const MyName = React.createContext();
const LastName = React.createContext();
export default class ContextAPIOne extends Component {
  render() {
    return (
      <div>
      <MyName.Provider value='Hi My Name is Amarendra'>
           <LastName.Provider value='Kumar Babu'>
              <ContextAPITwo/>
           </LastName.Provider>
       </MyName.Provider>
      </div>
    )
  }
}

export {MyName, LastName};