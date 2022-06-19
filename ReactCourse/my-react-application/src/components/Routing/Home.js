import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
   const navigate= useNavigate()
  return (
    <div><h2 className='text-danger'>This is Home Page</h2> <br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur sint tenetur perspiciatis ducimus voluptas quos ex accusamus, ipsa dolor necessitatibus natus magnam, quia sunt, debitis unde qui labore aliquid!</p>
    <br />
    <button className='btn btn-primary mt-3' onClick={() => navigate('/contact/7205382178', {state:{name:'Amar'}} ) }>
    Move to Contact</button>
    </div>
  )
}

export default Home