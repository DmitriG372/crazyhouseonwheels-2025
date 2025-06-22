import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { TripDay } from '../../types/Trip';
import './MapView.css';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React-Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewProps {
  days: TripDay[];
  onDayClick: (day: TripDay) => void;
  currentLocation?: [number, number];
}

// Custom numbered marker
const createNumberedIcon = (number: number) => {
  return L.divIcon({
    className: 'numbered-marker',
    html: `<div class="marker-number">${number}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
};

// Component to handle map centering
const MapCenterHandler: React.FC<{ center: [number, number], zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const MapView: React.FC<MapViewProps> = ({ days, onDayClick, currentLocation }) => {
  const [showCurrentLocation, setShowCurrentLocation] = useState(true);
  const [mapKey, setMapKey] = useState(0);
  
  // Calculate center point of all locations
  const calculateCenter = (): [number, number] => {
    const lats = days.map(day => day.endLocation.coordinates[0]);
    const lngs = days.map(day => day.endLocation.coordinates[1]);
    const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
    const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
    return [centerLat, centerLng];
  };

  // Reset map view to show full route
  const resetMapView = () => {
    setMapKey(prev => prev + 1);
  };

  // Create polyline coordinates
  const routeCoordinates: [number, number][] = [];
  days.forEach(day => {
    if (routeCoordinates.length === 0) {
      routeCoordinates.push([
        day.startLocation.coordinates[0],
        day.startLocation.coordinates[1]
      ]);
    }
    routeCoordinates.push([
      day.endLocation.coordinates[0],
      day.endLocation.coordinates[1]
    ]);
  });

  const center = calculateCenter();

  return (
    <div className="map-view-container">
      <button 
        className="reset-view-btn"
        onClick={resetMapView}
        title="Näita kogu marsruuti"
      >
        🎯 Tsentreeri
      </button>
      
      <MapContainer 
        key={mapKey}
        center={center} 
        zoom={5} 
        className="main-map"
        scrollWheelZoom={true}
      >
        <MapCenterHandler center={center} zoom={5} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Route polyline */}
        <Polyline 
          positions={routeCoordinates} 
          color="#1976d2" 
          weight={3}
          opacity={0.8}
        />
        
        {/* Day markers */}
        {days.map((day) => (
          <Marker
            key={day.id}
            position={[day.endLocation.coordinates[0], day.endLocation.coordinates[1]]}
            icon={createNumberedIcon(day.dayNumber)}
            eventHandlers={{
              click: () => onDayClick(day)
            }}
          >
            <Popup>
              <div className="marker-popup">
                <h4>Päev {day.dayNumber}</h4>
                <p>{day.endLocation.name}</p>
                <p className="date">{new Date(day.date).toLocaleDateString('et-EE')}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Current location mini map */}
      {currentLocation && showCurrentLocation && (
        <div className="current-location-container">
          <button 
            className="toggle-current-location"
            onClick={() => setShowCurrentLocation(!showCurrentLocation)}
          >
            ✕
          </button>
          <MapContainer 
            center={currentLocation} 
            zoom={13} 
            className="current-location-map"
            zoomControl={false}
            dragging={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={currentLocation}>
              <Popup>Praegune asukoht</Popup>
            </Marker>
          </MapContainer>
          <div className="location-label">Praegune asukoht</div>
        </div>
      )}
    </div>
  );
};

export default MapView;