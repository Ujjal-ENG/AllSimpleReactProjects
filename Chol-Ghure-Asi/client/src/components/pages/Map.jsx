/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

function Map({ center, zoom }) {
    const [position, setPosition] = useState(center);

    const handleMapClick = (event) => {
        setPosition([event.latlng.lat, event.latlng.lng]);
    };

    return (
        <MapContainer center={center} zoom={zoom} onClick={handleMapClick}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="Map data &copy; OpenStreetMap contributors" />
            <Marker position={position}>
                <Popup>
                    Latitude: {position[0]} <br /> Longitude: {position[1]}
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;
