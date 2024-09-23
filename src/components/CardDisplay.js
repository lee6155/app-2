import React from "react"

function CardDisplay ({ type, owner, cardNumber, securityCode, expiration }) {

    return (
        <div id="card">
            <p class="cardInfo"><b>Type:</b> {type}</p>
            <p class="cardInfo"><b>Name on Card:</b> {owner}</p>
            <p class="cardInfo"><b>Card Number:</b> {cardNumber}</p>
            <p class="cardInfo"><b>Security Code:</b> {securityCode}</p>
            <p class="cardInfo"><b>Expiration Date:</b> {expiration}</p>
        </div>
    )
}

export default CardDisplay