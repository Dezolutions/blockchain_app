import React from "react"
import { Navbar, TransactionForm } from "./components"

const App :React.FC = () => {

  return (
    <div className="app">
      <Navbar/>
      <TransactionForm/>
    </div>
  )
}

export default App


