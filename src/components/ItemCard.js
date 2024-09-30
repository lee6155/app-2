import React, { useState } from "react"
import { Link } from "react-router-dom"

function ItemCard({ id, name, image, price }) {
    const [quantity, setQuantity] = useState(1)

    function handleChange (event) {
        setQuantity(event.target.value)
    }

    function handleClick(event) {
        const cartData = {
            image2: image,
            name2: name,
            price2: price,
            quantity2: quantity
        }

        fetch("http://localhost:3000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                "image2": "string",
                "name2": "string",
                "price2": "string",
                "quantity2": "integer",
            },
            body: JSON.stringify(cartData)
        })
        .then((response) => response.json())
    }

    return (
        <div>
            <ul class="itemCard">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button onClick={handleClick} id="cartButton">Add to Cart</button>
                <select onChange={handleChange} id="cartDropdown">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <div>
                    <Link to={`/information/${id}`}>More Information</Link>
                </div>
            </ul>
        </div>
    )
}

export default ItemCard