import React, { useCallback, useState } from 'react'
import UsecallbackChild from './UsecallbackChild'

function UsecallbackParent() {
    const [countone, setCountone] = useState(0)
    const [counttwo, setCounttwo] = useState(0)

    const getItems =  useCallback(() =>{
        for (let i=0;i<1000000000;i++){}
        console.log(`getItems`);
        console.log(counttwo+1, counttwo-1);
        return [counttwo+1, counttwo-1]
    },[counttwo])

     

  return (
    <div>
          <button onClick={()=>setCountone(countone+1)}>Count One : {countone}</button> <br /><br />
          <button onClick={()=>setCounttwo(counttwo+1)}>Count Two : {counttwo}</button>
          <UsecallbackChild getItems={getItems}/>
          <p>Difference between useMemo & useCallback is useMemo returns a value where as useCallback returns a function</p>
    </div>
  )
}

export default UsecallbackParent