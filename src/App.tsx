import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import { tripData } from './data/tripData';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard trip={tripData} />
    </div>
  );
}

export default App;
