import React from 'react'
import { useNavigate } from 'react-router-dom'

function Auth({auth}) {
   const navigate = useNavigate()
    function login (){
        auth()
        navigate('dashboard')
    }
  return (
    <div className='text-danger'><h2>This is Authentication Page.....</h2>
    <button className='btn btn-primary m-3' onClick={login}>Login</button>
    </div>
  )
}

export default Auth