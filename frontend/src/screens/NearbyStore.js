import React, { useState } from 'react'
import '../App.css'
import { Map, TileLayer, Marker as LeafletMarker,Popup } from "react-leaflet";
import L from "leaflet";
import Mark from '../images/mark.png'
import icon from 'leaflet/dist/images/marker-icon.png';
import city from "../citywholsalemaket"



const markerIcon = new L.icon({
    iconUrl: Mark,
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  });


function NearbyStore() {
    const [center, setCenter] = useState([20.5937,78.9629])
    const [zoom, setZoom] = useState(5)

    return (
        <div>
            <h1>WholeSale Markets</h1>
            <form>
            <div className="form-group" style={{display:"flex"}}>
                    
                    <input type="text" className="form-control"  style={{width:"50%"}}  placeholder="Type location or city to get wholesale market details"/>
                    <button className="btn btn-primary" type="submit" style={{marginLeft:"10px",borderRadius:"12px",border:"none"}}><i className="fas fa-search"></i></button>
                    </div>
            </form>
            <ul>
                <li>This map reference is taken from openstreetmap</li>
            </ul>
            <div>
                <Map
                center={center}
                zoom={zoom}
                scrollWheelZoom={true}
                style={{height:"500px", backgroundColor: "white",padding: "1rem",borderRadius: "20px",marginTop: "16px"}}
                >
                 <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> 
                { city.map((i) => {
                    return (
                <LeafletMarker position={[i.lat, i.lng]} icon={markerIcon}>
                    <Popup>
                    {i.city} <br /> WholeSale Market.<br/> population: {i.population}
                    </Popup>
                </LeafletMarker>
                )})}  
                </Map>
            </div>
        </div>
    )
}

export default NearbyStore
