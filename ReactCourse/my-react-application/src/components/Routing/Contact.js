import React from 'react'
import {useLocation, useParams} from 'react-router-dom'


function Contact() {
     const params = useParams()
     const location = useLocation()
    return (
    <div>
          <h4 className='text-success'>Contact Number is : {params.id}</h4>
          <h4 className='text-success'>Contact Name: {location.state.name}</h4>
    </div>
  )
}

export default Contact