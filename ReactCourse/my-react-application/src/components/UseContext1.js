import React, { createContext } from 'react'
import UseContext2 from './UseContext2';


const MyFirstName = createContext();
const Lastname = createContext();


export default function UseContext1(props) {
  return (
    <div>
      <MyFirstName.Provider value="Amarendra">
      <Lastname.Provider value="Babu">
          <UseContext2/>
          </Lastname.Provider>
      </MyFirstName.Provider>
    </div>
  )
}

export {MyFirstName,Lastname}
