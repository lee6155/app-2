import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css";
import HomePage from "./pages/HomePage"
import Cart from "./pages/Cart"
import Information from "./pages/Information"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/cart",
        element: <Cart/>
    },
    {
        path: "/information/:id",
        element: <Information/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={router}/>)
