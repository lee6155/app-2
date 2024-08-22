import React, { useEffect, useState } from "react"

function App() {
  const [items, setItemsState] = useState([])

  useEffect(() => {
    fetch("http://localhost:3002/items")
    .then(response => response.json())
    .then(data => setItemsState(data))
  },[])

  console.log(items)

  return (
    <div>
      <img src={items[0].image} alt="alt" />
    </div>
  )
}

export default App