import React from 'react'
import TransactionForm from '../TransactionForm/TransactionForm'
import './main.css'
const Main :React.FC = () => {
  return (
    <main className='main'>
      <div className="main__heading-block">
        <h1 className="heading-bloct__title">Send Crypto <br /> across the world</h1>
        <p className="heading-bloct__subtitle">Explore the crypto world. Buy and sell cryptocurrencies easily.</p>
        <button className="heading-block__wallet-btn">Connect Wallet</button>
      </div>
      <div className="main__form-block">
        <div className='eth-card white-glassmorphism card-item'></div>
        <TransactionForm/>
      </div>
    </main>
  )
}

export default Main