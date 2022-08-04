import React from 'react';
import { AppProvider } from './context';
import { CurrentLocation, Search, SelectedLocations } from './components';

import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <p>Current location:</p>
        </header>
        <CurrentLocation />
        <Search />
        <SelectedLocations />
      </div>
    </AppProvider>
  );
}

export default App;
