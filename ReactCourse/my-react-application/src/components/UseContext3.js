import React, { useContext } from 'react'
import {MyFirstName, Lastname} from './UseContext1'

function UseContext3(props) {
    const firstname = useContext(MyFirstName)
    const lastname = useContext(Lastname)
  return (
    <div>
            My Full Name : {firstname}  {lastname}
            <p><code>
              creation of context i.e, createContext() must be at the top level of the function, but use of context i.e, useContext()
              must be inside of the function.
            </code></p>
    </div>
  )
}

export default UseContext3