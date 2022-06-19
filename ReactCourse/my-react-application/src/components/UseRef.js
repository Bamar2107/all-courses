import React, { useRef } from 'react'

function UseRef() {
    const inputRef = useRef();
    const handleRef = () =>{
          console.log(inputRef)
          inputRef.current.focus()
          inputRef.current.style.background='black'
          inputRef.current.style.color='white'
    }

    const handleBlur = () =>{
        inputRef.current.blur()
        inputRef.current.style.background=''
        inputRef.current.value=''
    }
    const getTextHandler = () =>
        console.log(inputRef.current.value)
    
  return (
    <div>
        <input className='m-3' type="text" ref={inputRef}/> <br />
        <button className='btn btn-primary' onClick={handleRef}>Focus</button> &nbsp;
        <button className='btn btn-primary' onClick={handleBlur}>Clear</button> &nbsp;
        <button className='btn btn-primary' onClick={getTextHandler}>Get Text</button>
        <p>useRef is used for DOM manipulation in functional component, it is just like Ref in class component</p>
    </div>
  )
}

export default UseRef