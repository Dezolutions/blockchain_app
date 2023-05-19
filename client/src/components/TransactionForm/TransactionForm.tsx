import React from 'react'
import './transactionForm.css'
import { TransactionContext } from '../../context/TransactionContext'
import { TransactionContextInterface, FormData, InputData } from '../../types/contractTypes'
import Loader from '../Loader/Loader';

const Input = ({ placeholder, name, type, value, handleChange, disabled }: InputData) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className='form-input'
    disabled={disabled}
  />
);
const TransactionForm :React.FC = () => {
  const {sendTransaction, handleChange, formData, isLoading} = React.useContext<TransactionContextInterface>(TransactionContext)

  const handleSubmit = (e: any) => {
    const {addressTo, amount, message }: FormData = formData
    e.preventDefault();

    if (!addressTo || !amount  || !message) return;
    sendTransaction()
  }
  return (
    <fieldset className='form-block'>
      <Input placeholder='Address to' disabled={isLoading} name="addressTo" type="text" handleChange={handleChange} />
      <Input placeholder='Amount (ETH)' disabled={isLoading} name="amount" type="number" handleChange={handleChange} />
      <Input placeholder='Enter Message' disabled={isLoading} name="message" type="text" handleChange={handleChange} />
      {isLoading 
        ? <Loader/>
        :<button className='transaction-btn' onClick={handleSubmit} type="button">Send</button>
      }
      
    </fieldset>
  )
}

export default TransactionForm