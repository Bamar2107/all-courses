import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard({logoutuser}) {
   const navigate= useNavigate()
    function logout () {
        logoutuser()
         navigate('auth')
    }
  return (
    <div><h2 className='text-success'>This is Dashboard Page....</h2>
    <button className='btn btn-primary m-3' onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard