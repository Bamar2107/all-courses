import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import buyCake from '../redux/cakeAction'

function CakeContainer() {
  const cake = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h2 className='text-success m-3'>Cake & Icecreams Shop Application</h2>
        <h4 className='text-primary mt-3'>Cakes {cake} </h4>
        <button className='btn btn-primary' onClick={() => dispatch(buyCake()) }>Buy Cake</button>
    </div>
  )
}

export default CakeContainer