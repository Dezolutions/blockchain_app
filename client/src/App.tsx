import React from "react"
import { Navbar, Main,Transactions } from "./components"

const App :React.FC = () => {

  return (
    <div className="app">
      <Navbar/>
      <Main/>
      <Transactions/>
    </div>
  )
}

export default App


