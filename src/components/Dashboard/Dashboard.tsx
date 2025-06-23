import React, { useState, useEffect } from 'react';
import MapView from '../MapView/MapView';
import Weather from '../Weather/Weather';
import WeatherModal from '../WeatherModal/WeatherModal';
import ProgressBar from '../ProgressBar/ProgressBar';
import DaySelector from '../DaySelector/DaySelector';
import DayView from '../DayView/DayView';
import AdminPanel from '../Admin/AdminPanel';
import TripStats from '../TripStats/TripStats';
import LocationInfo from '../LocationInfo/LocationInfo';
import InfoModal from '../InfoModal/InfoModal';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import OfflineIndicator from '../OfflineIndicator/OfflineIndicator';
import { Trip } from '../../types/Trip';
import './Dashboard.css';

interface DashboardProps {
  trip: Trip;
}

const Dashboard: React.FC<DashboardProps> = ({ trip: initialTrip }) => {
  const [trip, setTrip] = useState<Trip>(initialTrip);
  const [currentLocation, setCurrentLocation] = useState<[number, number] | undefined>();
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [showDayView, setShowDayView] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showWeatherModal, setShowWeatherModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [locationName, setLocationName] = useState<string>('Sinu asukoht');
  const [showFamilyPhoto, setShowFamilyPhoto] = useState(false);

  const getCurrentDay = () => {
    const today = new Date();
    const startDate = new Date(trip.startDate);
    const diffTime = today.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, Math.min(diffDays, trip.days.length));
  };

  const isTripStarted = () => {
    const today = new Date();
    const startDate = new Date(trip.startDate);
    return today >= startDate;
  };

  const currentDay = getCurrentDay();
  const selectedDayData = trip.days[selectedDay - 1];

  useEffect(() => {
    if ('geolocation' in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setCurrentLocation([lat, lng]);
          setLocationError(null);
          
          // Get location name
          const name = await getLocationName(lat, lng);
          setLocationName(name);
        },
        (error) => {
          console.error('Location error:', error);
          setLocationError('Asukoha määramine ebaõnnestus');
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setLocationError('Brauser ei toeta asukohateenuseid');
    }
  }, []);

  const handleDaySelect = (dayNumber: number) => {
    setSelectedDay(dayNumber);
    setShowDayView(true);
  };

  const handleAdminSave = (updatedTrip: Trip) => {
    setTrip(updatedTrip);
    // Võimalik salvestada localStorage või serverisse
    localStorage.setItem('tripData', JSON.stringify(updatedTrip));
  };

  const handleWeatherClick = () => {
    setShowWeatherModal(true);
  };

  const getLocationName = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=et,en`
      );
      
      if (!response.ok) {
        throw new Error('Reverse geocoding failed');
      }
      
      const data = await response.json();
      
      // Try to get the most relevant location name
      const city = data.address?.city || 
                   data.address?.town || 
                   data.address?.village || 
                   data.address?.municipality ||
                   data.address?.county;
      
      const country = data.address?.country;
      
      if (city && country) {
        return `${city}, ${country}`;
      } else if (city) {
        return city;
      } else if (country) {
        return country;
      } else {
        return 'Sinu asukoht';
      }
    } catch (error) {
      console.error('Error getting location name:', error);
      return 'Sinu asukoht';
    }
  };

  return (
    <div className="dashboard">
      <OfflineIndicator />
      <div 
        className="dashboard-background" 
        style={{ backgroundImage: 'url(/pilt.jpg)' }}
      ></div>
      <div className={`dashboard-overlay ${showFamilyPhoto ? 'hidden' : ''}`}></div>
      
      {/* Hidden family photo button */}
      <button 
        className="family-photo-btn"
        onMouseDown={() => setShowFamilyPhoto(true)}
        onMouseUp={() => setShowFamilyPhoto(false)}
        onMouseLeave={() => setShowFamilyPhoto(false)}
        onTouchStart={() => setShowFamilyPhoto(true)}
        onTouchEnd={() => setShowFamilyPhoto(false)}
      >
        👨‍👩‍👧‍👧
      </button>
      <header className={`dashboard-header ${showFamilyPhoto ? 'hidden' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>🚐 CrazyHouseOnWheels 2025</h1>
              <p>Pere reisipäevik ja marsruudi jälgija</p>
              <div className="family-list">
                <span>👨‍💻 Dima</span>
                <span>😈 Maria</span>
                <span>🎾 Ariana</span>
                <span>📹 Gloria</span>
                <span>🐶 Sanja</span>
                <span>🐕 Vaflja</span>
              </div>
            </div>
            <div className="header-buttons">
              <button 
                className="info-btn"
                onClick={() => setShowInfoModal(true)}
              >
                ℹ️ Info
              </button>
              <button 
                className="admin-btn"
                onClick={() => setShowAdminPanel(true)}
              >
                ⚙️ Admin
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className={`dashboard-main ${showFamilyPhoto ? 'hidden' : ''}`}>
        <div className="container">
          <div className="map-section fade-in hover-lift">
            <MapView 
              days={trip.days} 
              currentLocation={currentLocation} 
              onDayClick={(day) => {
                setSelectedDay(day.dayNumber);
                setShowDayView(true);
              }}
            />
            {locationError && (
              <div className="location-error">
                ⚠️ {locationError}
              </div>
            )}
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-left">
              <div className={`progress-timers ${isTripStarted() ? 'trip-active' : ''}`}>
                {!isTripStarted() && (
                  <div className="fade-in" style={{animationDelay: '0.2s'}}>
                    <CountdownTimer targetDate={trip.startDate} />
                  </div>
                )}
                
                <div className={`fade-in ${isTripStarted() ? 'progress-expanded' : ''}`} style={{animationDelay: '0.3s'}}>
                  <ProgressBar 
                    currentDay={currentDay}
                    totalDays={trip.days.length}
                    startDate={trip.startDate}
                    endDate={trip.endDate}
                  />
                </div>
              </div>
              
              <div className="fade-in" style={{animationDelay: '0.4s'}}>
                <DaySelector 
                  days={trip.days}
                  selectedDay={selectedDay}
                  onDaySelect={handleDaySelect}
                  currentDay={currentDay}
                />
              </div>
            </div>

            <div className="dashboard-right">
              <div className="fade-in" style={{animationDelay: '0.6s'}}>
                <LocationInfo 
                  currentLocation={currentLocation}
                  locationName={locationName}
                />
              </div>
              
              {currentLocation && (
                <div className="current-weather fade-in hover-lift" style={{animationDelay: '0.7s'}}>
                  <Weather 
                    location={currentLocation} 
                    locationName={locationName}
                    onWeatherClick={handleWeatherClick}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="fade-in" style={{animationDelay: '0.8s'}}>
            <TripStats trip={trip} />
          </div>
        </div>
      </main>

      {showDayView && selectedDayData && (
        <DayView 
          day={selectedDayData} 
          onClose={() => setShowDayView(false)} 
        />
      )}

      {showAdminPanel && (
        <AdminPanel 
          onClose={() => setShowAdminPanel(false)}
          onSave={handleAdminSave}
        />
      )}

      {showWeatherModal && currentLocation && (
        <WeatherModal 
          location={currentLocation}
          locationName={locationName}
          onClose={() => setShowWeatherModal(false)}
        />
      )}

      {showInfoModal && (
        <InfoModal 
          onClose={() => setShowInfoModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;