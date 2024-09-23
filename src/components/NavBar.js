import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {

    return(
        <nav id="navBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart" id="cartLink">Cart</NavLink>
            <NavLink to="/account" id="accountLink">Account</NavLink>
        </nav>
    )
}

export default NavBar