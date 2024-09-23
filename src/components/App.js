import React from "react"
import HomePage from "../pages/HomePage"
import Cart from "../pages/Cart"
import Account from "../pages/Account"

function App() {
  
  return (
    <div>
        <HomePage/>
        <Cart/>
        <Account/>
    </div>
  )
}

export default App

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>, document.getElementById("root")
// )