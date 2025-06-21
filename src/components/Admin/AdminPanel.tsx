import React, { useState } from 'react';
import { Trip, TripDay } from '../../types/Trip';
import { tripData } from '../../data/tripData';
import './AdminPanel.css';

interface AdminPanelProps {
  onClose: () => void;
  onSave: (updatedTrip: Trip) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose, onSave }) => {
  const [editedTrip, setEditedTrip] = useState<Trip>(JSON.parse(JSON.stringify(tripData)));
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'accommodation' | 'stops' | 'activities'>('accommodation');
  const [password, setPassword] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const currentDay = editedTrip.days.find(day => day.dayNumber === selectedDay);

  const updateDay = (updatedDay: TripDay) => {
    setEditedTrip(prev => ({
      ...prev,
      days: prev.days.map(day => 
        day.dayNumber === selectedDay ? updatedDay : day
      )
    }));
  };

  const updateAccommodation = (field: string, value: string) => {
    if (!currentDay) return;
    
    const updatedDay = { ...currentDay };
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      if (parent === 'contact') {
        updatedDay.accommodation = {
          ...updatedDay.accommodation,
          contact: {
            ...updatedDay.accommodation.contact,
            [child]: value
          }
        };
      }
    } else {
      updatedDay.accommodation = {
        ...updatedDay.accommodation,
        [field]: value
      };
    }
    updateDay(updatedDay);
  };

  const addStop = () => {
    if (!currentDay) return;
    const newStop = {
      name: 'Uus peatus',
      type: 'paus',
      googleMapsUrl: ''
    };
    updateDay({
      ...currentDay,
      stops: [...currentDay.stops, newStop]
    });
  };

  const updateStop = (index: number, field: string, value: string) => {
    if (!currentDay) return;
    const updatedStops = [...currentDay.stops];
    updatedStops[index] = { ...updatedStops[index], [field]: value };
    updateDay({ ...currentDay, stops: updatedStops });
  };

  const removeStop = (index: number) => {
    if (!currentDay) return;
    updateDay({
      ...currentDay,
      stops: currentDay.stops.filter((_, i) => i !== index)
    });
  };

  const addSpecialActivity = () => {
    if (!currentDay) return;
    const newActivity = {
      name: 'Uus tegevus',
      description: '',
      time: '',
      website: ''
    };
    updateDay({
      ...currentDay,
      specialActivities: [...(currentDay.specialActivities || []), newActivity]
    });
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Hvost3') {
      setIsAuthenticated(true);
    } else {
      alert('Vale parool!');
      setPassword('');
    }
  };

  const handleSave = () => {
    onSave(editedTrip);
    onClose();
  };

  if (!currentDay) return null;

  if (!isAuthenticated) {
    return (
      <div className="admin-overlay">
        <div className="admin-panel">
          <div className="admin-header">
            <h2>🔒 Administraatori sisenemine</h2>
            <button onClick={onClose} className="close-btn">✕</button>
          </div>
          <div className="admin-content">
            <div className="password-form">
              <form onSubmit={handlePasswordSubmit}>
                <div className="form-group">
                  <label>Sisesta parool:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Parool"
                    autoFocus
                  />
                </div>
                <button type="submit" className="save-btn">
                  🔓 Sisene
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-overlay">
      <div className="admin-panel">
        <div className="admin-header">
          <h2>📝 Marsruudi Administreerimine</h2>
          <div className="admin-actions">
            <button onClick={handleSave} className="save-btn">💾 Salvesta</button>
            <button onClick={onClose} className="close-btn">✕</button>
          </div>
        </div>

        <div className="admin-content">
          <div className="admin-sidebar">
            <h3>Päevad</h3>
            <div className="day-list">
              {editedTrip.days.map(day => (
                <button
                  key={day.id}
                  className={`day-item ${selectedDay === day.dayNumber ? 'active' : ''}`}
                  onClick={() => setSelectedDay(day.dayNumber)}
                >
                  Päev {day.dayNumber}
                  <small>{day.endLocation.name}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="admin-main">
            <div className="admin-tabs">
              <button 
                className={activeTab === 'accommodation' ? 'active' : ''}
                onClick={() => setActiveTab('accommodation')}
              >
                🏕️ Majutus
              </button>
              <button 
                className={activeTab === 'stops' ? 'active' : ''}
                onClick={() => setActiveTab('stops')}
              >
                📍 Peatused
              </button>
              <button 
                className={activeTab === 'activities' ? 'active' : ''}
                onClick={() => setActiveTab('activities')}
              >
                ⭐ Tegevused
              </button>
            </div>

            <div className="admin-form">
              {activeTab === 'accommodation' && (
                <div className="form-section">
                  <h3>Majutus - Päev {selectedDay}</h3>
                  
                  <div className="form-group">
                    <label>Nimi:</label>
                    <input
                      type="text"
                      value={currentDay.accommodation.name}
                      onChange={(e) => updateAccommodation('name', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Aadress:</label>
                    <input
                      type="text"
                      value={currentDay.accommodation.address}
                      onChange={(e) => updateAccommodation('address', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Telefon:</label>
                    <input
                      type="text"
                      value={currentDay.accommodation.contact?.phone || ''}
                      onChange={(e) => updateAccommodation('contact.phone', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={currentDay.accommodation.contact?.email || ''}
                      onChange={(e) => updateAccommodation('contact.email', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Veebileht:</label>
                    <input
                      type="url"
                      value={currentDay.accommodation.contact?.website || ''}
                      onChange={(e) => updateAccommodation('contact.website', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Google Maps URL:</label>
                    <input
                      type="url"
                      value={currentDay.accommodation.googleMapsUrl || ''}
                      onChange={(e) => updateAccommodation('googleMapsUrl', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Hind:</label>
                    <input
                      type="text"
                      value={currentDay.accommodation.price || ''}
                      onChange={(e) => updateAccommodation('price', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {activeTab === 'stops' && (
                <div className="form-section">
                  <div className="section-header">
                    <h3>Peatused - Päev {selectedDay}</h3>
                    <button onClick={addStop} className="add-btn">+ Lisa peatus</button>
                  </div>

                  {currentDay.stops.map((stop, index) => (
                    <div key={index} className="stop-item">
                      <div className="form-row">
                        <div className="form-group">
                          <label>Nimi:</label>
                          <input
                            type="text"
                            value={stop.name}
                            onChange={(e) => updateStop(index, 'name', e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label>Tüüp:</label>
                          <input
                            type="text"
                            value={stop.type}
                            onChange={(e) => updateStop(index, 'type', e.target.value)}
                          />
                        </div>
                        <button 
                          onClick={() => removeStop(index)}
                          className="remove-btn"
                        >
                          🗑️
                        </button>
                      </div>
                      <div className="form-group">
                        <label>Google Maps URL:</label>
                        <input
                          type="url"
                          value={stop.googleMapsUrl || ''}
                          onChange={(e) => updateStop(index, 'googleMapsUrl', e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'activities' && (
                <div className="form-section">
                  <div className="section-header">
                    <h3>Eriüritused - Päev {selectedDay}</h3>
                    <button onClick={addSpecialActivity} className="add-btn">+ Lisa tegevus</button>
                  </div>

                  {(currentDay.specialActivities || []).map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="form-group">
                        <label>Nimi:</label>
                        <input
                          type="text"
                          value={activity.name}
                          onChange={(e) => {
                            const updatedActivities = [...(currentDay.specialActivities || [])];
                            updatedActivities[index] = { ...updatedActivities[index], name: e.target.value };
                            updateDay({ ...currentDay, specialActivities: updatedActivities });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label>Kirjeldus:</label>
                        <textarea
                          value={activity.description || ''}
                          onChange={(e) => {
                            const updatedActivities = [...(currentDay.specialActivities || [])];
                            updatedActivities[index] = { ...updatedActivities[index], description: e.target.value };
                            updateDay({ ...currentDay, specialActivities: updatedActivities });
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label>Veebileht:</label>
                        <input
                          type="url"
                          value={activity.website || ''}
                          onChange={(e) => {
                            const updatedActivities = [...(currentDay.specialActivities || [])];
                            updatedActivities[index] = { ...updatedActivities[index], website: e.target.value };
                            updateDay({ ...currentDay, specialActivities: updatedActivities });
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;