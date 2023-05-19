import React from 'react'
import { TransactionContext } from '../../context/TransactionContext'
import { StructuredTransaction, TransactionContextInterface } from '../../types/contractTypes'
import { shortenAddress } from '../../utils/shortenAddress'
import './transactions.css'

const Transactions :React.FC = () => {
  const {transactions, currentAccount} :TransactionContextInterface = React.useContext(TransactionContext)

  return (
    <>
      {currentAccount &&
      <section className='transacitons'>
        <div className='container'>
          <h1>Recent Transactions</h1>
          <ul className='transactions-block'>
            {transactions.length
              ? transactions.map((transaction: StructuredTransaction) => 
              <div key={transaction.timestamp} className='transaction-card'>
                <p className='transaction-card__line'><b>From:</b> <a className='adress-link' target="_blank" href={`https://sepolia.etherscan.io/address/${transaction.addressFrom}`}>{shortenAddress(transaction.addressFrom)}</a></p>
                <p className='transaction-card__line'><b>To:</b> {shortenAddress(transaction.addressTo)}</p>
                <p className='transaction-card__line'><b>Amount:</b> {transaction.amount}ETH</p>
                <p className='transaction-card__line'><b>Message:</b> {transaction.message}</p>
                <p className='transaction-card__date'>{transaction.timestamp}</p>
              </div>)
              : <p>No recent transactions for now</p>
            }
          </ul>
        </div>
      </section>}
    </>
  )
}

export default Transactions