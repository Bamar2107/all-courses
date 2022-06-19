import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftMenu from './LeftMenu'

function BackEnd() {
  return (
    <div>BackEnd Layout
    <LeftMenu/>
    <Outlet/>
    </div>
  )
}

export default BackEnd