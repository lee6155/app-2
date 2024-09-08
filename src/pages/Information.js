import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Information() {
    const [userInfo, setUserInfo] = useState("")

    const params = useParams()
    let id = params.id

    useEffect(() => {
        fetch(`http://localhost:3000/items/${id}`)
        .then(response => response.json())
        .then(data => setUserInfo(data))
    },[])

    return (
        <div class="infoPage">
            {userInfo.image !== undefined ?
                <img src={userInfo.image.slice(1)} alt={userInfo.name} class="infoImg"/> : ""}
            <h4>{userInfo.name}</h4>
            
            <div class="info">
                {userInfo.materials !== undefined ?
                    <li>Materials: {userInfo.materials}</li> : ""}
                {userInfo.capacity !== undefined ?
                    <li>Capacity: {userInfo.capacity}</li> : ""}
                {userInfo.fabric !== undefined ?
                    <li>Fabric: {userInfo.fabric}</li> : ""}
                {userInfo.dimensions !== undefined ?
                    <li>Dimensions: {userInfo.dimensions}</li> : ""}
                {userInfo.color !== undefined ?
                    <li>Color: {userInfo.color}</li> : ""}
                {userInfo.pullOutBed !== undefined ?
                    <li>Pull Out Bed: {userInfo.pullOutBed}</li> : ""}
                {userInfo.diagonalLength !== undefined ?
                    <li>Diagonal Length of Screen: {userInfo.diagonalLength}</li> : ""}
                {userInfo.storage !== undefined ?
                    <li>Storage: {userInfo.storage}</li> : ""}
                {userInfo.display !== undefined ?
                    <li>Display: {userInfo.display}</li> : ""}
                {userInfo.power !== undefined ?
                    <li>Power: {userInfo.power}</li> : ""}
                {userInfo.mountable !== undefined ?
                    <li>Mountable to Wall: {userInfo.mountable}</li> : ""}
                {userInfo.touchScreen !== undefined ?
                    <li>Touch Screen: {userInfo.touchScreen}</li> : ""}
                {userInfo.noiseCancelling !== undefined ?
                    <li>Noise Cancelling: {userInfo.noiseCancelling}</li> : ""}
                {userInfo.bluetooth !== undefined ?
                    <li>Bluetooth: {userInfo.bluetooth}</li> : ""}
                {userInfo.rechargeable !== undefined ?
                    <li>Rechargeable: {userInfo.rechargeable}</li> : ""}
                {userInfo.plugIn !== undefined ?
                    <li>Plug-In: {userInfo.plugIn}</li> : ""}
                {userInfo.warranty !== undefined ?
                    <li>Warranty: {userInfo.warranty}</li> : ""}
                {userInfo.type !== undefined ?
                    <li>Type: {userInfo.type}</li> : ""}
                {userInfo.weight !== undefined ?
                    <li>Weight: {userInfo.weight}</li> : ""}
                {userInfo.organic !== undefined ?
                    <li>Organic: {userInfo.organic}</li> : ""}
            </div>
        </div>
    )
}

export default Information