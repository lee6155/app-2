import React, { useEffect, useState } from "react"
import ItemCard from "../components/ItemCard"
import CategoryFilter from "../components/CategoryFilter"
import NavBar from "../components/NavBar"

function HomePage() {
    const [items, setItemsState] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/items")
        .then(response => response.json())
        .then(function(data) {
            setItemsState(data)
            setFiltered(data)
        })
    },[])

    let displayItems = filtered.map(function(item){
        return <ItemCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price}/>
    })

    function passCategoryItems(newState) {
        return setFiltered(newState)
    }

    return(
        <div>
            <NavBar/>
            <CategoryFilter items={items} passCategoryItems={passCategoryItems}/>
            {displayItems}
        </div>
    )
}

export default HomePage