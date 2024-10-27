import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import erromap from '../hinh/dang-ky-ban-quyen-o-dau.jpg'

const userIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const UserLocationMap = () => {
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          
          try {
            // Fetch address from Nominatim API
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`);
            const data = await response.json();
            setAddress(data.display_name); // Lưu địa chỉ từ kết quả API
          } catch (err) {
            console.error("Error fetching address:", err);
          }
        },
        (err) => {
          console.error("Error getting location:", err);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      alert("Your browser does not support Geolocation!");
    }
  }, []);
  

  return (
    <div style={{ paddingLeft: "5%" }}>
      {position ? (
        <div>
          <MapContainer center={position} zoom={13} style={{ height: '380px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={userIcon}>
            <Popup>{address || 'Loading address...'}</Popup>
          </Marker>
        </MapContainer>
        {address}
        </div>
        
      ) : (
        <div>
          <img src={erromap} style={{width:"300px",height:'auto'}}/>
          <h4><i>Please choose your location</i></h4>
        </div>
      )}
    </div>
  );
};

export default UserLocationMap;

