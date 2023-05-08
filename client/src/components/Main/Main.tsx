import React from 'react'
import TransactionForm from '../TransactionForm/TransactionForm'
import './main.css'
const Main :React.FC = () => {
  return (
    <main className='main'>
      <div className="main__heading-block">
        <h1 className="heading-block__title">Send Crypto <br /> across the world</h1>
        <p className="heading-block__subtitle">Explore the crypto world. Buy and sell cryptocurrencies easily.</p>
        <button className="heading-block__wallet-btn">Connect Wallet</button>
        <div className="heading-block__items">
          <div className="item">Reliability</div>
          <div className="item">Security</div>
          <div className="item">Ethereum</div>
          <div className="item">Web 3.0</div>
          <div className="item">Blockchain</div>
          <div className="item">Exchange</div>
        </div>
      </div>
      <div className="main__form-block">
        <div className='eth-card white-glassmorphism card-item'></div>
        <TransactionForm/>
      </div>
    </main>
  )
}

export default Main