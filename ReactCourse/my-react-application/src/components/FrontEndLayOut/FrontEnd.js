import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function FrontEnd() {
  return (
    <div>FrontEnd LayOut
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default FrontEnd