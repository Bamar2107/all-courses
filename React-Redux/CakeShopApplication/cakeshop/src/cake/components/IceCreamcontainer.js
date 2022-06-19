import React from 'react'
import {buyIceCreams, addIceCreams} from '../redux/iceCreamAction'
import {useSelector, useDispatch} from 'react-redux'

function IceCreamcontainer() {
  const iceCream = useSelector( state => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div className='mt-3'>
        
        <button className='btn btn-danger' onClick={() => dispatch(buyIceCreams())}>Buy Icecream</button>&nbsp;
        <span className='text-primary mt-3' style={{'fontSize':'25px'}}><b>Icecreams {iceCream} </b></span>
        &nbsp;<button className='btn btn-primary' onClick={() => dispatch(addIceCreams())}>Add Icecream</button>
    </div>
  )
}

export default IceCreamcontainer