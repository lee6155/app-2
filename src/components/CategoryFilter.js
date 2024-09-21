import React, { useState } from "react"

function CategoryFilter({ passCategoryItems, items }) {
    // const [forFilter, setForFilter] = useState([])

    // fetch("http://localhost:3000/items")
    // .then(response => response.json())
    // .then(data => setForFilter(data))
         
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
                <option>Appliances</option>
                <option>Food</option>
                <option>Electronics</option>
                <option>Home</option>
            </select>
        </div>
    )
}

export default CategoryFilter


// controlled form should result in post, change in item state
// itemcard should be a controlled form
