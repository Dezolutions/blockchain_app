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
                <div className="transaction-card__title">Transaction</div>
                <div className='transaction-card__line'><b>From:</b><a className='adress-link' target="_blank" href={`https://sepolia.etherscan.io/address/${transaction.addressFrom}`}>{shortenAddress(transaction.addressFrom)}</a></div>
                <div className='transaction-card__line'><b>To:</b><a className='adress-link' target="_blank" href={`https://sepolia.etherscan.io/address/${transaction.addressTo}`}>{shortenAddress(transaction.addressTo)}</a></div>
                <div className='transaction-card__line'><b>Amount:</b><p>{transaction.amount}ETH</p></div>
                <div className='transaction-card__line'><b>Message:</b><p>{transaction.message}</p></div>
                <div className='transaction-card__date'>{transaction.timestamp}</div>
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