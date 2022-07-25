import React from 'react';
import './App.css';

import CurrentLocation from './components/current-location';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Aitash Weather App!</p>
        <CurrentLocation />
      </header>
    </div>
  );
}

export default App;
