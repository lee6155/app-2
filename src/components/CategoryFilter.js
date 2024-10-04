import React from "react"

function CategoryFilter({ categoryFromDropdown }) {

    function handleChange(event) {
        return categoryFromDropdown(event.target.value)   
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
