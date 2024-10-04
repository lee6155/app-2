import React, { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard"
import CategoryFilter from "../components/CategoryFilter"
import NavBar from "../components/NavBar"

function HomePage() {
    const [items, setItemsState] = useState([])
    const [category, setCategory] = useState("All")

    useEffect(() => {
        fetch("http://localhost:3000/items")
        .then(response => response.json())
        .then(data => setItemsState(data))
    },[])

    let filteredItems
    category !== "All"?
        filteredItems = items.filter(function(item) {
            return item.category === category
        }) : 
        filteredItems = items
    
    let displayItems = filteredItems.map(function(item) {
        return <ItemCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price}/>
    })

    function categoryFromDropdown(selected) {
        return setCategory(selected)
    }

    return(
        <div>
            <NavBar/>
            <CategoryFilter categoryFromDropdown={categoryFromDropdown}/>
            {displayItems}
        </div>
    )
}

export default HomePage