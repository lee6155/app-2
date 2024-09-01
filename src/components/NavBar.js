import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {

    return(
        <nav id="navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart" id="cartLink">Cart</NavLink>
        </nav>
    )
}

export default NavBar