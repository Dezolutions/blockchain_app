import React from "react"
import { Navbar, Main,Transactions, Footer } from "./components"

const App :React.FC = () => {

  return (
    <div className="app">
      <Navbar/>
      <Main/>
      <Transactions/>
      <Footer/>
    </div>
  )
}

export default App


