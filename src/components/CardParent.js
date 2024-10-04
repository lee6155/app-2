import React, { useEffect, useState } from "react"
import CardDisplay from "../components/CardDisplay"
import CardForm from "../components/CardForm"

function CardParent () {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cards")
        .then(response => response.json())
        .then(data => setCards(data))
    },[])

    let displayCards = cards.map(function(card) {
        return <CardDisplay key={card.id} type={card.type} owner={card.owner} cardNumber={card.cardNumber} securityCode={card.securityCode} expiration={card.expiration}/>
    })

    function formCardData (card) {
        return setCards([...cards, card])
    }

    return (
        <div>
            <h2 id="cardInfoHeading">Card Information</h2>
            {displayCards}
            <CardForm formCardData={formCardData}/>
        </div>
    )
}

export default CardParent