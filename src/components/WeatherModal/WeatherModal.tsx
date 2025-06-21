import React, { useEffect, useState } from 'react';
import './WeatherModal.css';

interface WeatherModalProps {
  location: [number, number];
  locationName: string;
  onClose: () => void;
}

interface ForecastDay {
  date: string;
  temperatureMin: number;
  temperatureMax: number;
  weatherCode: number;
  windSpeed: number;
  precipitation: number;
}

interface DetailedWeatherData {
  current: {
    temperature: number;
    weatherCode: number;
    windSpeed: number;
    humidity: number;
    pressure: number;
    visibility: number;
    uvIndex: number;
  };
  forecast: ForecastDay[];
}

const weatherDescriptions: { [key: number]: { text: string; icon: string } } = {
  0: { text: 'Selge', icon: '☀️' },
  1: { text: 'Peamiselt selge', icon: '🌤️' },
  2: { text: 'Osaliselt pilves', icon: '⛅' },
  3: { text: 'Pilves', icon: '☁️' },
  45: { text: 'Udu', icon: '🌫️' },
  48: { text: 'Jäine udu', icon: '🌫️' },
  51: { text: 'Kerge vihm', icon: '🌦️' },
  53: { text: 'Mõõdukas vihm', icon: '🌧️' },
  55: { text: 'Tugev vihm', icon: '🌧️' },
  61: { text: 'Kerge vihm', icon: '🌧️' },
  63: { text: 'Vihm', icon: '🌧️' },
  65: { text: 'Tugev vihm', icon: '🌧️' },
  71: { text: 'Kerge lumi', icon: '🌨️' },
  73: { text: 'Lumi', icon: '❄️' },
  75: { text: 'Tugev lumesadu', icon: '❄️' },
  77: { text: 'Lumekruubid', icon: '🌨️' },
  80: { text: 'Kerged vihmavalingud', icon: '🌦️' },
  81: { text: 'Vihmavalingud', icon: '🌧️' },
  82: { text: 'Tugevad vihmavalingud', icon: '⛈️' },
  85: { text: 'Kerged lumevalingud', icon: '🌨️' },
  86: { text: 'Lumevalingud', icon: '❄️' },
  95: { text: 'Äike', icon: '⛈️' },
  96: { text: 'Äike kergete sademetega', icon: '⛈️' },
  99: { text: 'Äike rahe', icon: '⛈️' },
};

const WeatherModal: React.FC<WeatherModalProps> = ({ location, locationName, onClose }) => {
  const [weatherData, setWeatherData] = useState<DetailedWeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetailedWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [lat, lon] = location;
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,surface_pressure,visibility,uv_index&daily=temperature_2m_min,temperature_2m_max,weather_code,wind_speed_10m_max,precipitation_sum&timezone=auto&forecast_days=5`
        );
        
        if (!response.ok) {
          throw new Error('Ilmaandmete laadimine ebaõnnestus');
        }
        
        const data = await response.json();
        
        const forecastDays: ForecastDay[] = data.daily.time.map((date: string, index: number) => ({
          date,
          temperatureMin: Math.round(data.daily.temperature_2m_min[index]),
          temperatureMax: Math.round(data.daily.temperature_2m_max[index]),
          weatherCode: data.daily.weather_code[index],
          windSpeed: Math.round(data.daily.wind_speed_10m_max[index]),
          precipitation: Math.round(data.daily.precipitation_sum[index] * 10) / 10,
        }));

        setWeatherData({
          current: {
            temperature: Math.round(data.current.temperature_2m),
            weatherCode: data.current.weather_code,
            windSpeed: Math.round(data.current.wind_speed_10m),
            humidity: data.current.relative_humidity_2m,
            pressure: Math.round(data.current.surface_pressure),
            visibility: Math.round(data.current.visibility / 1000),
            uvIndex: data.current.uv_index || 0,
          },
          forecast: forecastDays,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Tekkis viga');
      } finally {
        setLoading(false);
      }
    };

    fetchDetailedWeather();
  }, [location]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Täna';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Homme';
    } else {
      return date.toLocaleDateString('et-EE', { weekday: 'short', day: 'numeric', month: 'short' });
    }
  };

  const getUVIndexLabel = (uv: number) => {
    if (uv <= 2) return { label: 'Madal', color: '#4CAF50' };
    if (uv <= 5) return { label: 'Mõõdukas', color: '#FF9800' };
    if (uv <= 7) return { label: 'Kõrge', color: '#FF5722' };
    if (uv <= 10) return { label: 'Väga kõrge', color: '#9C27B0' };
    return { label: 'Äärmine', color: '#E91E63' };
  };

  if (loading) {
    return (
      <div className="weather-modal-overlay">
        <div className="weather-modal">
          <div className="weather-modal-header">
            <h2>🌤️ Detailne Ilmaprognoosi</h2>
            <button onClick={onClose} className="close-btn">✕</button>
          </div>
          <div className="weather-modal-content">
            <div className="weather-loading">Laadin detailseid ilmaandmeid...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !weatherData) {
    return (
      <div className="weather-modal-overlay">
        <div className="weather-modal">
          <div className="weather-modal-header">
            <h2>🌤️ Detailne Ilmaprognoosi</h2>
            <button onClick={onClose} className="close-btn">✕</button>
          </div>
          <div className="weather-modal-content">
            <div className="weather-error">Ilmaandmete laadimine ebaõnnestus</div>
          </div>
        </div>
      </div>
    );
  }

  const currentWeatherDesc = weatherDescriptions[weatherData.current.weatherCode] || { text: 'Teadmata', icon: '❓' };
  const uvInfo = getUVIndexLabel(weatherData.current.uvIndex);

  return (
    <div className="weather-modal-overlay">
      <div className="weather-modal">
        <div className="weather-modal-header">
          <h2>🌤️ Detailne Ilmaprognoosi</h2>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>
        
        <div className="weather-modal-content">
          {/* Current Weather */}
          <div className="current-weather-section">
            <div className="current-weather-location">
              <h3>{locationName}</h3>
              <div className="current-time">{new Date().toLocaleString('et-EE')}</div>
            </div>
            
            <div className="current-weather-main">
              <div className="current-weather-icon">{currentWeatherDesc.icon}</div>
              <div className="current-weather-temp">{weatherData.current.temperature}°C</div>
              <div className="current-weather-desc">{currentWeatherDesc.text}</div>
            </div>
            
            <div className="current-weather-details">
              <div className="detail-grid">
                <div className="detail-item">
                  <span className="detail-icon">💨</span>
                  <span className="detail-label">Tuul</span>
                  <span className="detail-value">{weatherData.current.windSpeed} km/h</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">💧</span>
                  <span className="detail-label">Niiskus</span>
                  <span className="detail-value">{weatherData.current.humidity}%</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🌡️</span>
                  <span className="detail-label">Õhurõhk</span>
                  <span className="detail-value">{weatherData.current.pressure} hPa</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">👁️</span>
                  <span className="detail-label">Nähtavus</span>
                  <span className="detail-value">{weatherData.current.visibility} km</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">☀️</span>
                  <span className="detail-label">UV indeks</span>
                  <span className="detail-value" style={{ color: uvInfo.color }}>{weatherData.current.uvIndex} ({uvInfo.label})</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="forecast-section">
            <h3>5-päevane prognoos</h3>
            <div className="forecast-list">
              {weatherData.forecast.map((day, index) => {
                const dayWeatherDesc = weatherDescriptions[day.weatherCode] || { text: 'Teadmata', icon: '❓' };
                return (
                  <div key={day.date} className={`forecast-item ${index === 0 ? 'today' : ''}`}>
                    <div className="forecast-date">{formatDate(day.date)}</div>
                    <div className="forecast-icon">{dayWeatherDesc.icon}</div>
                    <div className="forecast-temps">
                      <span className="temp-max">{day.temperatureMax}°</span>
                      <span className="temp-min">{day.temperatureMin}°</span>
                    </div>
                    <div className="forecast-details">
                      <span className="forecast-wind">💨 {day.windSpeed} km/h</span>
                      {day.precipitation > 0 && (
                        <span className="forecast-rain">🌧️ {day.precipitation}mm</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherModal;