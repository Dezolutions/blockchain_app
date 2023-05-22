import React from "react"
import { Transactions, Footer, Header } from "./components"

const App :React.FC = () => {

  return (
    <div className="app">
      <Header/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App


