import React from 'react'
import logo from '../../assets/logo.png'
import './navbar.css'

const Navbar :React.FC = () => {
  return (
    <header className='header'>
      <div className="header-logo">
        <img className='header-logo__item' src={logo} alt="logotype" />
      </div>
      <nav>
        <ul className="header__nav-list">
          <li><a className="nav-item" href='#'>Wallets</a></li>
          <li><a className="nav-item" href='#'>Exchange</a></li>
          <li><a className="nav-item" href='#'>Currencies</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default  Navbar