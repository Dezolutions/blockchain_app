import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TransactionProvider } from './context/TransactionContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>,
)
