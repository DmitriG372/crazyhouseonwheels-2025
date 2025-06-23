import React, { useMemo } from 'react';
import { Trip } from '../../types/Trip';
import './TripStats.css';

interface TripStatsProps {
  trip: Trip;
}

const TripStats: React.FC<TripStatsProps> = ({ trip }) => {
  const stats = useMemo(() => {
    // Calculate total distance
    const totalDistance = trip.days.reduce((total, day) => {
      const distance = parseInt(day.distance?.replace(/[^\d]/g, '') || '0');
      return total + distance;
    }, 0);

    // Get unique countries based on actual trip data
    const countries = new Set<string>();
    
    // Add countries based on actual locations in trip data
    countries.add('🇪🇪 Eesti'); // Start and end
    countries.add('🇱🇻 Läti'); // Via Baltica route through Latvia
    countries.add('🇱🇹 Leedu'); // Pasvalys
    countries.add('🇵🇱 Poola'); // Poznań
    countries.add('🇩🇪 Saksamaa'); // Nürburgring, Eschwege

    // Count special activities
    const specialActivities = trip.days.reduce((count, day) => {
      return count + (day.specialActivities?.length || 0);
    }, 0);

    // Count total stops
    const totalStops = trip.days.reduce((count, day) => {
      return count + (day.stops?.length || 0);
    }, 0);

    // Calculate total duration
    const startDate = new Date(trip.startDate);
    const endDate = new Date(trip.endDate);
    const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

    // Count camping nights
    const campingNights = trip.days.filter(day => 
      day.accommodation.name.toLowerCase().includes('camping') || 
      day.accommodation.name.toLowerCase().includes('camp')
    ).length;

    return {
      totalDistance,
      countriesCount: countries.size,
      countries: Array.from(countries),
      specialActivities,
      totalStops,
      totalDays,
      campingNights,
      familyMembers: 6 // 4 people + 2 dogs
    };
  }, [trip]);

  const statItems = [
    {
      icon: '🛣️',
      label: 'Kogudistants',
      value: `${stats.totalDistance.toLocaleString()} km`,
      color: 'blue'
    },
    {
      icon: '🌍',
      label: 'Riike',
      value: stats.countriesCount,
      detail: stats.countries.join(', '),
      color: 'green'
    },
    {
      icon: '📅',
      label: 'Päevi',
      value: stats.totalDays,
      color: 'purple'
    },
    {
      icon: '🏕️',
      label: 'Kämpingu ööd',
      value: stats.campingNights,
      color: 'orange'
    },
    {
      icon: '📍',
      label: 'Peatusi',
      value: stats.totalStops,
      color: 'red'
    },
    {
      icon: '⭐',
      label: 'Eriüritusi',
      value: stats.specialActivities,
      color: 'yellow'
    },
    {
      icon: '👨‍👩‍👧‍👧🐕🐕',
      label: 'Reisiseltskond',
      value: `${stats.familyMembers} liiget`,
      color: 'pink'
    },
    {
      icon: '🚐',
      label: 'Sõiduk',
      value: 'Camper',
      detail: 'Elamiseks kohandatud',
      color: 'teal'
    }
  ];

  return (
    <div className="trip-stats">
      <h2 className="stats-title">
        <span className="title-icon">📊</span>
        Reisi põnevad faktid
      </h2>
      <div className="stats-grid">
        {statItems.map((stat, index) => (
          <div 
            key={index} 
            className={`stat-card stat-${stat.color} hover-lift`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              {stat.detail && (
                <div className="stat-detail">{stat.detail}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripStats;