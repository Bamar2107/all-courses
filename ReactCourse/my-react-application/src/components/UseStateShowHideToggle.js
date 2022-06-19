import React, { useState } from 'react'

function UseStateShowHideToggle() {

    const [show, setShow] = useState(false)

  return (
    <div className='m-3'>
        <button className='btn btn-primary' onClick={() => setShow(true)}>Show</button>&nbsp;&nbsp;
        <button className='btn btn-primary' onClick={() => setShow(false)}>Hide</button>&nbsp;&nbsp;
        <button className='btn btn-primary' onClick={() =>setShow(!show)}>Toggle</button> <br />
       {show && <h1>Show, Hide, Toggle</h1> } 
    </div>
  )
}

export default UseStateShowHideToggle