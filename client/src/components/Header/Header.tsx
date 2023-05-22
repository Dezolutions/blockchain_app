import React from 'react'
import { Navbar, Main } from '..'
import './header.css'

const Header : React.FC = () => {
  return (
    <div className='header'>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default Header