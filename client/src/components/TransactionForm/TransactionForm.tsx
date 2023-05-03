import React from 'react'

const TransactionForm :React.FC = () => {
  return (
    <div>
      <input placeholder='Address to' type="text" />
      <input placeholder='Amount (ETH)' type="number" />
      <input placeholder='Enter Message' type="text" />
      <button type="button">Send</button>
    </div>
  )
}

export default TransactionForm