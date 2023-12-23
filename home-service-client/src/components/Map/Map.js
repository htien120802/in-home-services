import React from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';

import { Icon } from 'leaflet';

import 'leaflet/dist/leaflet.css';

const iconRetinaUrl = '/assets/icons/marker-icon-2x.png';
const iconUrl = '/assets/icons/marker-icon.png';
const shadowUrl = '/assets/icons/marker-shadow.png';
const iconDefault = new Icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

const INITIAL_LATITUDE = 10.85076289371416; // Example: SPKT
const INITIAL_LONGITUDE = 106.77181478052408; // Example: SPKT
const INITIAL_ZOOM_LEVEL = 15;

function Map() {
  return (
    <MapContainer center={[INITIAL_LATITUDE, INITIAL_LONGITUDE]} zoom={INITIAL_ZOOM_LEVEL} style={{ width: '100%', height: '500px' }}>
      <TileLayer
        url={`https://api.tomtom.com/map/1/tile/basic/main/{z}/{x}/{y}.png?view=Unified&key=${process.env.REACT_APP_TOMTOM_KEY}`}
        attribution="&copy; TomTom"
      />
      <Marker position={[INITIAL_LATITUDE, INITIAL_LONGITUDE]} icon={iconDefault}>
        <Popup>1 Võ Văn Ngân, TP Thủ Đức, Việt Nam</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
