import React from 'react';
import './App.css';
import { AppProvider } from './context';
import { CurrentLocation, SelectedLocation } from './components';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <p>Welcome to Aitash Weather App!</p>
        </header>
        <CurrentLocation />
        <SelectedLocation />
      </div>
    </AppProvider>
  );
}

export default App;
