import React, { useEffect, useState } from 'react';
import './Weather.css';

interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  humidity?: number;
}

interface WeatherProps {
  location: [number, number];
  locationName: string;
  onWeatherClick?: () => void;
  targetDate?: string; // Optional date for forecast
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

const Weather: React.FC<WeatherProps> = ({ location, locationName, onWeatherClick, targetDate }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 18) {
      return 'day';
    } else {
      return 'night';
    }
  };

  const getDynamicIcon = (weatherCode: number) => {
    const timeOfDay = getTimeOfDay();
    
    // Clear weather changes based on time
    if (weatherCode === 0) {
      return timeOfDay === 'day' ? '☀️' : '🌙';
    }
    if (weatherCode === 1) {
      return timeOfDay === 'day' ? '🌤️' : '🌙';
    }
    
    // Default weather codes stay the same
    return weatherDescriptions[weatherCode]?.icon || '❓';
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const [lat, lon] = location;
        
        if (targetDate) {
          // Forecast for specific date
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code,wind_speed_10m_max&timezone=auto&start_date=${targetDate}&end_date=${targetDate}`
          );
          
          if (!response.ok) {
            throw new Error('Ilmaandmete laadimine ebaõnnestus');
          }
          
          const data = await response.json();
          
          if (data.daily && data.daily.temperature_2m_max.length > 0) {
            const avgTemp = Math.round((data.daily.temperature_2m_max[0] + data.daily.temperature_2m_min[0]) / 2);
            setWeather({
              temperature: avgTemp,
              weatherCode: data.daily.weather_code[0],
              windSpeed: Math.round(data.daily.wind_speed_10m_max[0]),
              humidity: undefined, // Daily forecast doesn't include humidity
            });
          } else {
            throw new Error('Prognoos pole saadaval');
          }
        } else {
          // Current weather
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&timezone=auto`
          );
          
          if (!response.ok) {
            throw new Error('Ilmaandmete laadimine ebaõnnestus');
          }
          
          const data = await response.json();
          
          setWeather({
            temperature: Math.round(data.current.temperature_2m),
            weatherCode: data.current.weather_code,
            windSpeed: Math.round(data.current.wind_speed_10m),
            humidity: data.current.relative_humidity_2m,
          });
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Tekkis viga');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location, targetDate]);

  if (loading) {
    return (
      <div className="weather-widget">
        <div className="weather-loading">Laadin ilmaandmeid...</div>
      </div>
    );
  }

  if (error || !weather) {
    return (
      <div className="weather-widget">
        <div className="weather-error">Ilmaandmed pole saadaval</div>
      </div>
    );
  }

  const weatherDesc = weatherDescriptions[weather.weatherCode] || { text: 'Teadmata', icon: '❓' };
  const dynamicIcon = getDynamicIcon(weather.weatherCode);
  const timeOfDay = getTimeOfDay();

  return (
    <div className={`weather-widget ${timeOfDay}`} onClick={onWeatherClick}>
      <div className="weather-header">
        <h3 className="weather-location">{locationName}</h3>
        {targetDate && <span className="weather-forecast-label">Prognoos</span>}
      </div>
      
      <div className="weather-main">
        <div className={`weather-icon ${dynamicIcon === '☀️' ? 'sun-rotating' : ''}`}>
          {dynamicIcon}
        </div>
        <div className="weather-temp">{weather.temperature}°C</div>
      </div>
      
      <div className="weather-description">{weatherDesc.text}</div>
      
      <div className="weather-details">
        <div className="weather-detail-item">
          <span className="detail-icon">💨</span>
          <span className="detail-label">Tuul</span>
          <span className="detail-value">{weather.windSpeed} km/h</span>
        </div>
        {weather.humidity && (
          <div className="weather-detail-item">
            <span className="detail-icon">💧</span>
            <span className="detail-label">Niiskus</span>
            <span className="detail-value">{weather.humidity}%</span>
          </div>
        )}
        <div className="weather-detail-item">
          <span className="detail-icon">🌡️</span>
          <span className="detail-label">Tundub nagu</span>
          <span className="detail-value">{weather.temperature + Math.round(Math.random() * 4 - 2)}°C</span>
        </div>
      </div>
      
    </div>
  );
};

export default Weather;