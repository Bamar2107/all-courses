import React, { useReducer } from 'react'

const initialState = {count:0}

const reducer = (state,action) =>{
    switch(action.type){
        case 'increment':
        return {count: state.count+1}
        case 'decrement':
        return {count:state.count-1}

        default:
        return state    
    }

}


function UseReducer() {
    const [state,dispatch] =   useReducer(reducer, initialState);
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>dispatch({type:'increment'})}>+</button>
        &nbsp;{state.count} &nbsp;
        <button className='btn btn-danger' onClick={()=>dispatch({type:'decrement'})}>-</button>
        <br />
        <p>An alternative to useState.

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.</p>
    </div>
  )
}

export default UseReducer