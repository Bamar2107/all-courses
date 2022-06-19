import React, { useState } from 'react'

function Hooks1() {
    //use multiple hooks
    const [state, setSate] = useState({count:0, title:'Increment'});

    //array destructuring of hooks
    const count = state.count;
    const title = state.title;
    
    const increment = () =>{
        setSate(preState =>{
            return{
                count:preState.count+1,
                title:'Increment'
            }
        });
    }

    const decrement = () =>{
        setSate(preState =>{
            return{
                count:preState.count-1,
                title:'Decrement'
            }
        })
    }
  return (
    <div>
    {title}
    <br /><br />
          <button className='btn btn-primary' onClick={increment}>+</button> &nbsp; {count} &nbsp; <button onClick={decrement} className='btn btn-danger'>-</button>
    <br /><br />
    <p><code>To use the state in functional component we used hooks.But there are some limitation of hooks like we can't use useState 
    inside any conditioal statement like if,for etc.</code></p>
    </div>
  )
}

export default Hooks1