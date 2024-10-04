import React, { useEffect, useState } from "react"
import NavBar from "../components/NavBar"
import CartCard from "../components/CartCard"

function Cart() {
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cart")
        .then(response => response.json())
        .then(data => setCartData(data))
    },[]) 

    const renderCart = cartData.map(function(cartItem) {
        return <CartCard key={cartItem.id} image={cartItem.image} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity}/>
    })

    const priceArray = cartData.map(function(cartItem) {
        return cartItem.price
    })

    const quantityArray = cartData.map(function(cartItem) {
        return Number(cartItem.quantity)
    })

    let total = 0

    for (let i = 0; i < priceArray.length; i++) {
        total+= priceArray[i] * quantityArray[i]
    }

    return(
        <div>
            <NavBar/>
            {renderCart}
            <h4 style={{clear: "both"}} id="cartTotal">Total: ${total}</h4>
        </div>
    )
}

export default Cart