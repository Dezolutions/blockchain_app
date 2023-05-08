import React from 'react'
import './transactionForm.css'

const TransactionForm :React.FC = () => {
  return (
    <fieldset className='form-block'>
      <input placeholder='Address to' type="text" />
      <input placeholder='Amount (ETH)' type="number" />
      <input placeholder='Enter Message' type="text" />
      <button className='transaction-btn' type="button">Send</button>
    </fieldset>
  )
}

export default TransactionForm