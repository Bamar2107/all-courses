import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [countone, setcountOne] = useState(0);
    const [counttwo, setcountTwo] = useState(0);

    const increment = () =>{
        setcountOne( countone+1)
    }
    const decrement = () =>{
        setcountTwo( counttwo-1)
    }

    const isEven = useMemo(() =>{
        for(let i=0;i<1000000000;i++){}
         return countone%2===0
    },[countone])

     

  return (
    <div>
        <button className='btn btn-primary' onClick={increment}>Count One button Value {countone}</button> {isEven?'Even':'Odd'}
        <br /><br />
        <button className='btn btn-primary' onClick={decrement}>Count Two button Value {counttwo}</button>
        <p>useMemo will only recompute the memoized value when one of the dependencies has changed.
        This optimization helps to avoid expensive calculations on every render</p>
    </div>
  )
}

export default UseMemo