import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom"
import "./index.css";
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/cart",
        element: <Cart/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router}/>)
