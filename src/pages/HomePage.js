import React, { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard"
import CategoryFilter from "../components/CategoryFilter"
import NavBar from "../components/NavBar"

function HomePage() {
    const [items, setItemsState] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/items")
        .then(response => response.json())
        .then(data => setItemsState(data))  
    },[])

    let displayItems = items.map(function(item){
        return <ItemCard key={item.id} name={item.name} image={item.image} price={item.price}/>
    })

    function passCategoryItems(newState) {
        return setItemsState(newState)
    }

    return(
        <div>
            <NavBar/>
            <CategoryFilter passCategoryItems={passCategoryItems}/>
            {displayItems}
        </div>
    )
}

export default HomePage