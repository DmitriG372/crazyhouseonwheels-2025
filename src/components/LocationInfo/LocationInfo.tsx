import React from 'react';
import './LocationInfo.css';

interface LocationInfoProps {
  currentLocation: [number, number] | undefined;
  locationName: string;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ currentLocation, locationName }) => {
  if (!currentLocation) {
    return (
      <div className="location-info">
        <div className="location-status">
          <span className="status-icon">📍</span>
          <span className="status-text">GPS otsib...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="location-info">
      <div className="location-header">
        <span className="location-icon">📍</span>
        <span className="location-title">Praegune asukoht</span>
      </div>
      
      <div className="location-details">
        <div className="location-name">{locationName}</div>
        <div className="location-coords">
          {currentLocation[0].toFixed(4)}, {currentLocation[1].toFixed(4)}
        </div>
      </div>
      
      <div className="location-accuracy">
        <span className="accuracy-icon">🎯</span>
        <span className="accuracy-text">GPS aktiivselt</span>
      </div>
    </div>
  );
};

export default LocationInfo;