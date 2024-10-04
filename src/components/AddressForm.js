import React, { useState } from "react"

function AddressForm ({ formAddressData }) {

    const [name, setName] = useState("")
    const [street, setStreet] = useState("")
    const [apartment, setApartment] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipCode, setZipCode] = useState("")

    function handleChangeName (event) {
        setName(event.target.value)
    }

    function handleChangeStreet (event) {
        setStreet(event.target.value)
    }

    function handleChangeApartment (event) {
        setApartment(event.target.value)
    }

    function handleChangeCity (event) {
        setCity(event.target.value)
    }

    function handleChangeState(event) {
        setState(event.target.value)
    }

    function handleChangeZipCode(event) {
        setZipCode(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()

        let addressData = {
            name: name,
            street: street,
            apartment: apartment,
            city: city,
            state: state,
            zipCode: zipCode
        }

        fetch("http://localhost:3000/addresses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                "name": "string",
                "street": "string",
                "apartment": "string",
                "city": "string",
                "state": "string",
                "zipCode": "string",
            },
            body: JSON.stringify(addressData)
        })
        .then((response) => response.json())
        .then(function(data) {
            return formAddressData(data)
        })
    }

    return (
        <div>
            <h2 id="addAddressHeading">Add an Address: </h2>
            <form id="addressForm" onSubmit={handleSubmit}>
                <label class="addressFormInfo" value={name} onChange={handleChangeName}>
                    Name of Resident:
                    <input type="text" placeholder="Enter name here" class="addressFormInput"/>
                </label>
                <label class="addressFormInfo" value={street} onChange={handleChangeStreet}>
                    Street:
                    <input type="text" placeholder="Enter street here" class="addressFormInput"/>
                </label>
                <label class="addressFormInfo" value={apartment} onChange={handleChangeApartment}>
                    Apartment or Unit Number:
                    <input type="text" placeholder="Enter number here" class="addressFormInput"/>
                </label>
                <label class="addressFormInfo" value={city} onChange={handleChangeCity}>
                    City:
                    <input type="text" placeholder="Enter city here" class="addressFormInput"/>
                </label>
                <label class="addressFormInfo" value={state} onChange={handleChangeState}>
                    State:
                    <input type="text" placeholder="Enter state here" class="addressFormInput"/>
                </label>
                <label class="addressFormInfo" value={zipCode} onChange={handleChangeZipCode}>
                    Zip Code:
                    <input type="text" placeholder="Enter zip code here" class="addressFormInput"/>
                </label>
                <button id="addressButton">Add</button>
            </form>
        </div>
    )
}

export default AddressForm