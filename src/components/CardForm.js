import React, { useState } from "react"

function CardForm ({ passCard }) {

    const [type, setType] = useState("")
    const [name2, setName] = useState("")
    const [number, setNumber] = useState("")
    const [code, setCode] = useState("")
    const [expiration, setExpiration] = useState("")

    function handleChangeType (event) {
        setType(event.target.value)
    }

    function handleChangeName (event) {
        setName(event.target.value)
    }

    function handleChangeNumber (event) {
        setNumber(event.target.value)
    }

    function handleChangeCode (event) {
        setCode(event.target.value)
    }

    function handleChangeExpiration(event) {
        setExpiration(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        let cardData = {
            type: type,
            owner: name2,
            cardNumber: number,
            securityCode: code,
            expiration: expiration
        }

        fetch("http://localhost:3000/cards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                "type2": "string",
                "name3": "string",
                "number2": "string",
                "code2": "string",
                "expiration2": "string",
            },
            body: JSON.stringify(cardData)
        })
        .then((response) => response.json())
        .then(function(data) {
            return passCard(data)
        })
    }

    return (
        <div>
            <h2 id="addCardHeading">Add a Card: </h2>
            <form id="cardForm" onSubmit={handleSubmit}>
                <label class="cardFormInfo" value={type} onChange={handleChangeType}>
                    Type:
                    <select class="cardFormInput">
                        <option>Select</option>
                        <option>Credit</option>
                        <option>Debit</option>
                    </select>
                </label>
                <label class="cardFormInfo" value={name2} onChange={handleChangeName}>
                    Name on Card:
                    <input type="text" placeholder="Enter name here" class="cardFormInput"/>
                </label>
                <label class="cardFormInfo" value={number} onChange={handleChangeNumber}>
                    Card Number:
                    <input type="text" placeholder="Enter card number here" class="cardFormInput"/>
                </label>
                <label class="cardFormInfo" value={code} onChange={handleChangeCode}>
                    Security Code:
                    <input type="text" placeholder="Enter code here" class="cardFormInput"/>
                </label>
                <label class="cardFormInfo" value={expiration} onChange={handleChangeExpiration}>
                    Expiration Date:
                    <input type="text" placeholder="MM/YYYY" class="cardFormInput"/>
                </label>
                <button id="cardButton">Add</button>
            </form>
        </div>
    )
}

export default CardForm