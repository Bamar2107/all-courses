import React, { forwardRef, useImperativeHandle, useState } from 'react'

const UseImperativeChild = forwardRef( (props,ref) => {
const [count,setCount] = useState(0)

useImperativeHandle(ref, () =>({
  increment
}))

const increment = () =>{
  setCount(count+1)
}

  return (
    <div>
       Count : {count}
        <br /><br />
        <button className='btn btn-primary' onClick={increment}>Child Clicked</button>
    </div>
  )
})

export default UseImperativeChild