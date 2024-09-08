import React, { useState } from "react"
import { Link } from "react-router-dom"

function ItemCard({ id, name, image, price }) {
    const [isAdded, setIsAdded] = useState(false)
    
    function handleClick(event) {
        setIsAdded(true)

        const cartData = {
            image2: event.target.parentElement.children[0].attributes[0].value,
            name2: event.target.parentElement.children[1].innerText,
            price2: event.target.parentElement.children[2].innerText,
            quantity2: event.target.parentElement.children[4].value
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
            <ul class="card">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <button onClick={handleClick} disabled={isAdded} id="cartButton">
                    {isAdded ? "Added" : "Add to Cart"}
                </button>
                <select id="cartDropdown">
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