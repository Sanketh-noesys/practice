import { MapContainer, TileLayer, useMapEvent, Marker } from "react-leaflet"
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
//import coordinateDTO from './coordinates.model'
import { useState } from "react";

let defaultIcon = L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
    iconAnchor : [16, 37]
});

L.Marker.prototype.options.icon= defaultIcon;

export default function Map(props: mapProps){
    return(
        <MapContainer 
            center={[12.910146, 77.595493]} zoom={14}
            style={{height: props.height}}
        >
            <TileLayer attribution="React Movies" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </MapContainer>
    )

}

interface mapProps{
    height: string;
}

Map.defaultProps = {
    height: '500px'
}