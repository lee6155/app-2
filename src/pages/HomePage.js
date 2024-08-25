import React, { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard"
import CategoryFilter from "../components/CategoryFilter"

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
            {displayItems}
            <CategoryFilter items={items} passCategoryItems={passCategoryItems}/>
        </div>
    )
}

export default HomePage