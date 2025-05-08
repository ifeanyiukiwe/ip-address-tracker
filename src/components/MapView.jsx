import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MainContext } from "../context/MainContext";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapView = () => {
  const { ipData } = useContext(MainContext);

  if (!ipData || !ipData.location) return null;

  const { lat, lng } = ipData.location;

  return (
    <div className="w-screen h-full flex-grow">
      <MapContainer
        key={`${lat}-${lng}`}
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]}>
          <Popup>
            {ipData.location.city}, {ipData.location.region},{" "}
            {ipData.location.country}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
