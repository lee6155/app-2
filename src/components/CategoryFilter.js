import React from "react"

function CategoryFilter({ items, passCategoryItems }) {
    function handleChange(event) {
        if(event.target.value !== "All") {
            const categoryItems = items.filter(function(item){
                return item.category === event.target.value                
            })
            return passCategoryItems(categoryItems)
        } else {
            const categoryItems = items
            return passCategoryItems(categoryItems)
        }
        
    }

    return(
        <div id="categoryDropdown">
            <p>Filter By Category:</p>
            <select onChange={handleChange}>
                <option>All</option>
                <option>Clothes</option>
                <option>Food</option>
                <option>Electronics</option>
                <option>Home</option>
            </select>
        </div>
    )
}

export default CategoryFilter