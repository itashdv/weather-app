import React from 'react';
import './App.css';

import { CurrentLocation, SelectedLocation } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Aitash Weather App!</p>
      </header>
      <CurrentLocation />
      <SelectedLocation />
    </div>
  );
}

export default App;
