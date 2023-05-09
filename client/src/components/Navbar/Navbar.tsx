import React from 'react'
import logo from '../../assets/logo.png'

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import './navbar.css'

const Navbar :React.FC = () => {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-grid'>
          <div className="header-logo">
            <img className='header-logo__item' src={logo} alt="logotype" />
          </div>
          <nav className='header__nav-block'>
            <ul className={toggleMenu ? "header__nav-list active" : "header__nav-list"}>
              <li><a className="nav-item" href='#'>Wallets</a></li>
              <li><a className="nav-item" href='#'>Exchange</a></li>
              <li><a className="nav-item" href='#'>Currencies</a></li>
            </ul>
            {toggleMenu
              ? <div><AiOutlineClose className='header__burger-close' fontSize={28} onClick={() => setToggleMenu(false)}/></div>
              : <div><HiMenuAlt4 className='header__burger-menu' fontSize={28} onClick={() => setToggleMenu(true)}/></div>
            }
          </nav>
        </div>
      </div>
    </header>
  )
}

export default  Navbar