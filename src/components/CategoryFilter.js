import React, { useState } from "react"

function CategoryFilter({ passCategory }) {

    function handleChange(event) {
        return passCategory(event.target.value)   
    }

    return(
        <div id="categoryDropdown">
            <p>Filter By Category:</p>
            <select onChange={handleChange}>
                <option>All</option>
                <option>Appliances</option>
                <option>Food</option>
                <option>Electronics</option>
                <option>Home</option>
            </select>
        </div>
    )
}

export default CategoryFilter
