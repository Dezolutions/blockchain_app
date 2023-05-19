import React from 'react'
import TransactionForm from '../TransactionForm/TransactionForm'
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import {IoMdDoneAll} from "react-icons/io"
import './main.css'
import { TransactionContext } from '../../context/TransactionContext';
import { TransactionContextInterface } from '../../types/contractTypes';
import { shortenAddress } from '../../utils/shortenAddress';

const Main :React.FC = () => {

  const { connectWallet, currentAccount } = React.useContext<TransactionContextInterface>(TransactionContext)

  const onBtnClick = () => {
    connectWallet?.()
  }

  return (
    <div className='container'>
      <main className='main'>
          <div className="main__heading-block">
            <h1 className="heading-block__title">Send Crypto <br /> across the world</h1>
            <p className="heading-block__subtitle">Explore the crypto world. Buy and sell cryptocurrencies easily.</p>
            { !currentAccount  
              ? <button className="heading-block__wallet-btn" onClick={onBtnClick}>Connect Wallet</button>
              : <div className='heading-block__connected'>
                  <p>Wallet Connected</p> 
                  <IoMdDoneAll fontSize={20} color="#fff"/>
                </div>
            }
          </div>
          <div className="heading-block__items">
            <div className="item">Reliability</div>
            <div className="item">Security</div>
            <div className="item">Ethereum</div>
            <div className="item">Web 3.0</div>
            <div className="item">Blockchain</div>
            <div className="item">Exchange</div>
          </div>
          <div className="main__form-block">
            <div className='eth-card white-glassmorphism card-item'>
              <div className='eth-card__eth-icon'><SiEthereum fontSize={26} color="#fff" /></div>
              <div className='eth-card__info-icon'><BsInfoCircle fontSize={20} color="#fff" /></div>
              <div className='eth-card__info-block'>
                <b className='eth-card__address'>{shortenAddress(currentAccount) || '...'}</b>
                <p className='eth-card__currency'>Ethereum</p>
              </div>
            </div>
            <TransactionForm/>
          </div>
      </main>
    </div>
  )
}

export default Main