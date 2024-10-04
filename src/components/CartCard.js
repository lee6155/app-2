import React from "react"

function CartCard({ image, name, price, quantity }) {
    
    return(
        <div>
            <ul class="cartItem">
                <img src={image} alt={name} class="cartImg"/>
                <h4>{name}</h4>
                <p class="cartPrice">${price}</p>
                <p class="cartQuantity">Quantity: {quantity}</p>
            </ul>
        </div>
    )
}

export default CartCard