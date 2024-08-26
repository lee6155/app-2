import React from "react"
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"

const routes = [
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/cart",
        element: <Cart/>
    }
]

export default routes