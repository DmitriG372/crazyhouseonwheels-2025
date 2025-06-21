import React from 'react';
import { TripDay } from '../../types/Trip';
import Weather from '../Weather/Weather';
import './DayView.css';

interface DayViewProps {
  day: TripDay;
  onClose: () => void;
}

const DayView: React.FC<DayViewProps> = ({ day, onClose }) => {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="day-view-overlay" onClick={onClose}>
      <div className="day-view-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        
        <div className="day-view-header">
          <h2>Päev {day.dayNumber} - {new Date(day.date).toLocaleDateString('et-EE', { weekday: 'long', day: 'numeric', month: 'long' })}</h2>
          <div className="route-info">
            <span>{day.startLocation.name} → {day.endLocation.name}</span>
            {day.distance && <span className="distance">{day.distance}</span>}
            {day.duration && <span className="duration">⏱️ {day.duration}</span>}
          </div>
          {day.googleMapsUrl && (
            <button 
              className="maps-button" 
              onClick={() => openLink(day.googleMapsUrl!)}
            >
              🗺️ Ava marsruut Google Maps'is
            </button>
          )}
        </div>

        <div className="day-view-grid">
          <div className="day-view-main">
            <div className="schedule-section">
              <h3>📅 Päevakava</h3>
              <div className="schedule-timeline">
                {day.activities.map((activity, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-time">{activity.time}</div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">{activity.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {day.stops.length > 0 && (
              <div className="stops-section">
                <h3>📍 Peatused</h3>
                <div className="stops-list">
                  {day.stops.map((stop, index) => (
                    <div key={index} className="stop-item">
                      <div className="stop-info">
                        <strong>{stop.name}</strong>
                        <span className="stop-type">{stop.type}</span>
                      </div>
                      {stop.googleMapsUrl && (
                        <button 
                          className="link-button small"
                          onClick={() => openLink(stop.googleMapsUrl!)}
                        >
                          🗺️
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {day.specialActivities && day.specialActivities.length > 0 && (
              <div className="special-activities-section">
                <h3>⭐ Eriüritused</h3>
                <div className="special-activities-list">
                  {day.specialActivities.map((activity, index) => (
                    <div key={index} className="special-activity-item">
                      {activity.imageUrl && (
                        <img 
                          src={activity.imageUrl} 
                          alt={activity.name}
                          className="activity-image"
                        />
                      )}
                      <h4>{activity.name}</h4>
                      {activity.address && <p>📍 {activity.address}</p>}
                      {activity.time && <p>🕒 {activity.time}</p>}
                      {activity.description && <p>{activity.description}</p>}
                      {activity.bookingReference && (
                        <p><strong>Broneeringu kood:</strong> {activity.bookingReference}</p>
                      )}
                      {activity.website && (
                        <button 
                          className="link-button"
                          onClick={() => openLink(activity.website!)}
                        >
                          🌐 Külasta veebilehte
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {day.notes && day.notes.length > 0 && (
              <div className="day-notes-section">
                <h3>📝 Märkused</h3>
                <div className="day-notes">
                  {day.notes.map((note, index) => (
                    <p key={index}>• {note}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="day-view-sidebar">
            <Weather 
              location={day.endLocation.coordinates} 
              locationName={day.endLocation.name} 
            />

            <div className="accommodation-section">
              <h3>🏕️ Ööbimine</h3>
              <div className="accommodation-details">
                {day.accommodation.imageUrl && (
                  <img 
                    src={day.accommodation.imageUrl} 
                    alt={day.accommodation.name}
                    className="accommodation-image"
                  />
                )}
                <h4>{day.accommodation.name}</h4>
                <p>{day.accommodation.address}</p>
                
                {day.accommodation.contact && (
                  <div className="contact-info">
                    {day.accommodation.contact.phone && (
                      <div>📞 {day.accommodation.contact.phone}</div>
                    )}
                    {day.accommodation.contact.email && (
                      <div>📧 {day.accommodation.contact.email}</div>
                    )}
                    {day.accommodation.contact.website && (
                      <button 
                        className="link-button"
                        onClick={() => openLink(day.accommodation.contact!.website!)}
                      >
                        🌐 Veebileht
                      </button>
                    )}
                  </div>
                )}
                
                {day.accommodation.price && (
                  <div className="price-info">💰 {day.accommodation.price}</div>
                )}
                
                {day.accommodation.amenities && day.accommodation.amenities.length > 0 && (
                  <div className="amenities">
                    {day.accommodation.amenities.map((amenity, index) => (
                      <span key={index} className="amenity-tag">{amenity}</span>
                    ))}
                  </div>
                )}
                
                {day.accommodation.notes && day.accommodation.notes.length > 0 && (
                  <div className="accommodation-notes">
                    {day.accommodation.notes.map((note, index) => (
                      <p key={index}>• {note}</p>
                    ))}
                  </div>
                )}

                {day.accommodation.googleMapsUrl && (
                  <button 
                    className="link-button"
                    onClick={() => openLink(day.accommodation.googleMapsUrl!)}
                  >
                    🗺️ Ava kaardil
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayView;