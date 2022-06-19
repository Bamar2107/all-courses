import React from 'react'
import HOCFunctionalCompLogic from './HOCFunctionalCompLogic'
function HOCFunctionalCompA(props) {
    const {countIncrement,count, name}= props
  return (
    <div>
     <button className='btn btn-primary mb-2' onClick={countIncrement}>Component {name} {count} times clicked</button>
    </div>
  )
}

export default HOCFunctionalCompLogic(HOCFunctionalCompA,5)