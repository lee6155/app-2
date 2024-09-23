import React from "react"

function AddressDisplay ({ name, street, apartment, city, state, zipCode }) {

    return (
        <div id="address">
            <p class="addressInfo"><b>Name of Resident:</b> {name}</p>
            <p class="addressInfo"><b>Street:</b> {street}</p>
            <p class="addressInfo"><b>Apartment or Unit Number:</b> {apartment}</p>
            <p class="addressInfo"><b>City:</b> {city}</p>
            <p class="addressInfo"><b>State:</b> {state}</p>
            <p class="addressInfo"><b>Zip Code:</b> {zipCode}</p>
        </div>
    )
}

export default AddressDisplay