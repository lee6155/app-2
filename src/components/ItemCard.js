import React from "react"

function ItemCard({ name, image, price }) {
    return (
        <div>
            <ul class="card">
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
            </ul>
        </div>
    )
}

export default ItemCard