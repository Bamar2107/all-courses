import React from 'react'
import HOCFunctionalCompLogic from './HOCFunctionalCompLogic'

function HOCFunctionalCompB(props) {
    const {countIncrement, count , name} = props
  return (
    <div>
     <button className='btn btn-primary mb-2' onMouseOver={countIncrement}>Component {name} {count} times Hover</button>
    </div>
  )
}

export default HOCFunctionalCompLogic(HOCFunctionalCompB,2)