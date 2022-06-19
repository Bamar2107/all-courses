import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import buyCake from '../redux/cakeAction'

function NewCakeContainer() {
    const [number, setNumber] =useState(1)
  const cake = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h4 className='text-primary mt-3'>Cakes {cake} </h4>
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
        <button className='btn btn-primary' onClick={() => dispatch(buyCake(number)) }>Buy {number} Cake</button>
    </div>
  )
}

export default NewCakeContainer