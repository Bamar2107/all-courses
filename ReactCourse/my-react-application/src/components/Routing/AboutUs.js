import React from 'react'
import {useLocation } from 'react-router-dom'

function AboutUs() {
 const location= useLocation()
  return (
    <div>
      <h2 className='text-success'>This isAbout Us Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquam fugit unde reprehenderit? Molestias explicabo quaerat mollitia nemo accusamus, ipsum temporibus aut, blanditiis cum quasi dignissimos obcaecati libero incidunt tempore!</p>
      <h4 className='text-primary'>Author : {location.state.myname}</h4>
    </div>
  )
}

export default AboutUs