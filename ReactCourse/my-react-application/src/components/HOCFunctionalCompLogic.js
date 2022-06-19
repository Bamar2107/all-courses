import React, { useState } from 'react'
const HOCFunctionalCompLogic = (WrappedComponent, num) =>{
function HOCFunctionalCompLogic(props) {
    const [count, setCount] = useState(0)

    const countIncrement = () =>{
        setCount(count+num)
    }
  return (
    <div>
          <WrappedComponent countIncrement={countIncrement} count={count} {...props}/>
    </div>
  )
}
return HOCFunctionalCompLogic
}

export default HOCFunctionalCompLogic