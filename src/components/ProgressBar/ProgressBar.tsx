import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  currentDay: number;
  totalDays: number;
  startDate: string;
  endDate: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentDay, totalDays, startDate, endDate }) => {
  const progress = Math.min(Math.max(0, currentDay / totalDays) * 100, 100);
  
  const getMessage = () => {
    if (currentDay < 1) return "Reis pole veel alanud!";
    if (currentDay > totalDays) return "Reis on lõppenud! 🎉";
    if (progress >= 90) return "Peaaegu kohal!";
    if (progress >= 50) return "Poole peal!";
    if (progress >= 25) return "Hea algus!";
    return "Alles alustame!";
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h3>Reisi edenemine</h3>
        <span className="progress-days">{currentDay}/{totalDays} päeva</span>
      </div>
      
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          >
            <span className="progress-percentage">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
      
      <div className="progress-message">
        {getMessage()}
      </div>
      
      <div className="progress-dates">
        <span>{new Date(startDate).toLocaleDateString('et-EE')}</span>
        <span>{new Date(endDate).toLocaleDateString('et-EE')}</span>
      </div>
    </div>
  );
};

export default ProgressBar;