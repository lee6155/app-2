import React, { useEffect, useState } from "react"
import AddressDisplay from "../components/AddressDisplay"
import AddressForm from "../components/AddressForm"

function AddressParent () {
    const [addresses, setAddresses] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/addresses")
        .then(response => response.json())
        .then(data => setAddresses(data))
    },[])

    let displayAddresses = addresses.map(function(address) {
        return <AddressDisplay key={address.id} name={address.name} street={address.street} apartment={address.apartment} city={address.city} state={address.state} zipCode={address.zipCode}/>
    })

    function passAddress (address) {
        setAddresses([...addresses, address])
    }

    return (
        <div>
            <h2 id="addressInfoHeading">Address Information</h2>
            {displayAddresses}
            <AddressForm passAddress={passAddress}/>
        </div>
    )
}

export default AddressParent