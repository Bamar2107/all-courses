import React, { useMemo, useState } from 'react'

function UseMemoHookInClass() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const isEven = useMemo(()=>{
        console.log(countOne);
        return countOne%2===0
    },[countOne])
  return (
    <div>
    <button className='btn btn-primary m-3' onClick={()=> setCountOne(countOne+1)}>count {countOne}</button>
    <br />
    {isEven?'Even':'Odd'}
    <br />
    <button className='btn btn-danger m-3' onClick={() => setCountTwo(countTwo+1)}>count {countTwo}</button>
    </div>
  )
}

export default UseMemoHookInClass