import React, { useState } from 'react'
import UseLoggerOutput from './UseLoggerOutput';

function UseLoggerInput() {
    const [name, setName] = useState('');
    UseLoggerOutput(name)
  return (
    <div className='m-3'>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
        <br />
        {name}
    </div>
  )
}

export default UseLoggerInput