import React, {useRef} from 'react'
import UseImperativeChild from './UseImperativeChild'

function UseImperativeParent() {
    const ref = useRef()
  return (
    <div className='m-3'>
        <UseImperativeChild ref={ref}/>
        <button className='btn btn-primary'  onClick={()=>ref.current.increment()}>Parent clicked</button>
    </div>
  )
}

export default UseImperativeParent