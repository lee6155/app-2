import React from "react"

function CartCard({ image2, name2, price2, quantity2 }) {
    
    return(
        <div>
            <ul class="cartItem">
                <img src={image2} alt={name2} class="cartImg"/>
                <h4>{name2}</h4>
                <p class="cartPrice">${price2}</p>
                <p class="cartQuantity">Quantity: {quantity2}</p>
            </ul>
        </div>
    )
}

export default CartCard