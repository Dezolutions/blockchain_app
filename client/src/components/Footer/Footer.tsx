import React from 'react'
import logo from '../../assets/logo.png'
import './footer.css'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className='footer__top-block'>
          <img className='header-logo__item' src={logo} alt="logo" />
          <ul className="footer__nav-list">
            <li><a className="nav-item" href='#'>Wallets</a></li>
            <li><a className="nav-item" href='#'>Exchange</a></li>
            <li><a className="nav-item" href='#'>Currencies</a></li>
          </ul>
        </div>
        <div className="footer__bottom-block">
          <p>Contact us if you have any guestions:</p>
          <b className='footer__email'>kryptcompany@gmail.com</b>
        </div>
      </div>
    </footer>
  )
}

export default Footer