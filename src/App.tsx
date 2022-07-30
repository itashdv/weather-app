import React from 'react';
import './App.css';

import { AppContext } from './context/context';

import { CurrentLocation, SelectedLocation } from './components';

function App() {
  return (
    <AppContext.Provider value={ null }>
      <div className="App">
        <header className="App-header">
          <p>Welcome to Aitash Weather App!</p>
        </header>
        <CurrentLocation />
        <SelectedLocation />
      </div>
    </AppContext.Provider>
  );
}

export default App;
