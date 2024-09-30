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

    let displayItems
    category !== "All"?
        displayItems = items.filter(function(item) {
            return item.category === category
        }) : 
        displayItems = items
    
    let displayItems2 = displayItems.map(function(item) {
        return <ItemCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price}/>
    })

    function passCategory(newState) {
        return setCategory(newState)
    }

    return(
        <div>
            <NavBar/>
            <CategoryFilter passCategory={passCategory}/>
            {displayItems2}
        </div>
    )
}

export default HomePage