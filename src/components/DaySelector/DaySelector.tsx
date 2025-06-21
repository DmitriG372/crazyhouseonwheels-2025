import React from 'react';
import { TripDay } from '../../types/Trip';
import './DaySelector.css';

interface DaySelectorProps {
  days: TripDay[];
  selectedDay: number;
  onDaySelect: (dayNumber: number) => void;
  currentDay: number;
}

const DaySelector: React.FC<DaySelectorProps> = ({ days, selectedDay, onDaySelect, currentDay }) => {
  return (
    <div className="day-selector-container">
      <h3>Vali päev</h3>
      <div className="day-selector-grid">
        {days.map((day) => {
          const isSelected = selectedDay === day.dayNumber;
          const isCurrent = currentDay === day.dayNumber;
          const isPast = currentDay > day.dayNumber;
          
          return (
            <button
              key={day.id}
              className={`day-button ${isSelected ? 'selected' : ''} ${isCurrent ? 'current' : ''} ${isPast ? 'past' : ''}`}
              onClick={() => onDaySelect(day.dayNumber)}
            >
              <div className="day-number">Päev {day.dayNumber}</div>
              <div className="day-date">{new Date(day.date).toLocaleDateString('et-EE', { day: 'numeric', month: 'short' })}</div>
              <div className="day-location">{day.endLocation.name}</div>
              {isCurrent && <div className="current-badge">Täna</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DaySelector;