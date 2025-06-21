import React, { useState, useEffect } from 'react';
import Map from '../Map/Map';
import Weather from '../Weather/Weather';
import WeatherModal from '../WeatherModal/WeatherModal';
import ProgressBar from '../ProgressBar/ProgressBar';
import DaySelector from '../DaySelector/DaySelector';
import DayView from '../DayView/DayView';
import AdminPanel from '../Admin/AdminPanel';
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
  const [locationError, setLocationError] = useState<string | null>(null);

  const getCurrentDay = () => {
    const today = new Date();
    const startDate = new Date(trip.startDate);
    const diffTime = today.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, Math.min(diffDays, trip.days.length));
  };

  const currentDay = getCurrentDay();
  const selectedDayData = trip.days[selectedDay - 1];

  useEffect(() => {
    if ('geolocation' in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setCurrentLocation([position.coords.latitude, position.coords.longitude]);
          setLocationError(null);
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

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="container">
          <div className="header-content">
            <div className="header-text">
              <h1>🚐 CrazyHouseOnWheels 2025</h1>
              <p>Pere reisipäevik ja marsruudi jälgija</p>
            </div>
            <button 
              className="admin-btn"
              onClick={() => setShowAdminPanel(true)}
            >
              ⚙️ Admin
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="container">
          <div className="map-section fade-in hover-lift">
            <Map 
              days={trip.days} 
              currentLocation={currentLocation} 
              selectedDay={selectedDay}
            />
            {locationError && (
              <div className="location-error">
                ⚠️ {locationError}
              </div>
            )}
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-left">
              <div className="fade-in" style={{animationDelay: '0.2s'}}>
                <ProgressBar 
                  currentDay={currentDay}
                  totalDays={trip.days.length}
                  startDate={trip.startDate}
                  endDate={trip.endDate}
                />
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
              {currentLocation && (
                <div className="current-weather fade-in hover-lift" style={{animationDelay: '0.6s'}}>
                  <Weather 
                    location={currentLocation} 
                    locationName="Sinu asukoht"
                    onWeatherClick={handleWeatherClick}
                  />
                </div>
              )}
            </div>
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
          locationName="Sinu asukoht"
          onClose={() => setShowWeatherModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;