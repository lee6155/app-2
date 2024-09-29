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
        return <CartCard key={cartItem.id} image2={cartItem.image2} name2={cartItem.name2} price2={cartItem.price2} quantity2={cartItem.quantity2}/>
    })

    const priceArray = cartData.map(function(cartItem) {
        return cartItem.price2
    })

    const quantityArray = cartData.map(function(cartItem) {
        return Number(cartItem.quantity2)
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