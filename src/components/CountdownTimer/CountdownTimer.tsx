import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
    percentage: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const startOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
        const totalTime = target - startOfYear;
        const elapsed = now - startOfYear;
        const percentage = Math.min((elapsed / totalTime) * 100, 100);

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          totalDays: days,
          percentage
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalDays: 0,
          percentage: 100
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const isStarted = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div className="countdown-container glass-card">
      <div className="countdown-header">
        <h3>⏰ {isStarted ? 'Reis on alanud!' : 'Reisini jäänud'}</h3>
        {!isStarted && (
          <div className="countdown-date">
            27. juuni 2025
          </div>
        )}
      </div>

      {!isStarted && (
        <>
          <div className="countdown-display">
            <div className="time-unit">
              <span className="time-value">{timeLeft.days}</span>
              <span className="time-label">päeva</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="time-label">tundi</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="time-label">minutit</span>
            </div>
            <div className="time-separator">:</div>
            <div className="time-unit">
              <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="time-label">sekundit</span>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default CountdownTimer;