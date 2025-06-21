import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { TripDay } from '../../types/Trip';
import './Map.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface MapProps {
  days: TripDay[];
  currentLocation?: [number, number];
  selectedDay?: number;
}

const LocationMarker: React.FC<{ position: [number, number] }> = ({ position }) => {
  const map = useMap();
  
  useEffect(() => {
    if (position) {
      map.flyTo(position, 13);
    }
  }, [position, map]);

  const icon = L.divIcon({
    className: 'current-location-marker',
    html: '<div class="pulse"></div>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  return position ? <Marker position={position} icon={icon} /> : null;
};

const Map: React.FC<MapProps> = ({ days, currentLocation, selectedDay }) => {
  const [route, setRoute] = useState<[number, number][]>([]);
  const [carPosition, setCarPosition] = useState<[number, number] | null>(null);
  const [carAngle, setCarAngle] = useState<number>(0);

  useEffect(() => {
    const routePoints: [number, number][] = [];
    days.forEach((day) => {
      if (day.startLocation.coordinates) {
        routePoints.push(day.startLocation.coordinates);
      }
      if (day.endLocation.coordinates) {
        routePoints.push(day.endLocation.coordinates);
      }
    });
    setRoute(routePoints);

    // Set car position animation
    if (routePoints.length > 1) {
      let currentIndex = 0;
      
      const animateCar = () => {
        if (currentIndex < routePoints.length - 1) {
          const start = routePoints[currentIndex];
          const end = routePoints[currentIndex + 1];
          
          // Calculate angle between points
          const deltaLat = end[0] - start[0];
          const deltaLng = end[1] - start[1];
          const angle = Math.atan2(deltaLng, deltaLat) * (180 / Math.PI);
          setCarAngle(angle);
          
          let progress = 0;
          const duration = 3000; // 3 seconds per segment
          const startTime = Date.now();
          
          const updatePosition = () => {
            const elapsed = Date.now() - startTime;
            progress = Math.min(elapsed / duration, 1);
            
            const lat = start[0] + (end[0] - start[0]) * progress;
            const lng = start[1] + (end[1] - start[1]) * progress;
            setCarPosition([lat, lng]);
            
            if (progress < 1) {
              requestAnimationFrame(updatePosition);
            } else {
              currentIndex++;
              setTimeout(animateCar, 500); // Pause between segments
            }
          };
          
          updatePosition();
        } else {
          // Reset to start
          setTimeout(() => {
            currentIndex = 0;
            animateCar();
          }, 2000);
        }
      };
      
      setTimeout(animateCar, 1000); // Start after 1 second
    }
  }, [days]);

  const center: [number, number] = currentLocation || 
    (selectedDay && days[selectedDay - 1]?.endLocation.coordinates) || 
    [54.5, 18.5];

  const getMarkerIcon = (isStart: boolean, isSelected: boolean) => {
    return L.divIcon({
      className: `custom-marker ${isStart ? 'start' : 'end'} ${isSelected ? 'selected' : ''}`,
      html: `<div class="marker-content">${isStart ? 'S' : 'F'}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });
  };

  const getCarIcon = () => {
    return L.divIcon({
      className: 'car-marker',
      html: `<div class="car-icon" style="transform: rotate(${carAngle}deg);">🚐</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  };

  return (
    <div className="map-container">
      <MapContainer center={center} zoom={6} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        {route.length > 1 && (
          <Polyline 
            positions={route} 
            color="#708238" 
            weight={3} 
            opacity={0.7}
          />
        )}

        {days.map((day) => (
          <React.Fragment key={day.id}>
            <Marker 
              position={day.startLocation.coordinates}
              icon={getMarkerIcon(true, selectedDay === day.dayNumber)}
            >
              <Popup>
                <strong>Päev {day.dayNumber} - Start</strong><br />
                {day.startLocation.name}<br />
                {day.date}
              </Popup>
            </Marker>
            <Marker 
              position={day.endLocation.coordinates}
              icon={getMarkerIcon(false, selectedDay === day.dayNumber)}
            >
              <Popup>
                <strong>Päev {day.dayNumber} - Lõpp</strong><br />
                {day.endLocation.name}<br />
                {day.accommodation.name}
              </Popup>
            </Marker>
          </React.Fragment>
        ))}

        {currentLocation && <LocationMarker position={currentLocation} />}
        
        {carPosition && (
          <Marker position={carPosition} icon={getCarIcon()}>
            <Popup>
              <strong>🚐 CrazyHouseOnWheels</strong><br />
              Reis käimas!
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;