import React from 'react';
import { AppProvider } from './context';
import { CurrentLocation, Search } from './components';

import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header className="App-header">
          <p>Welcome to Aitash Weather App!</p>
        </header>
        <CurrentLocation />
        <Search />
      </div>
    </AppProvider>
  );
}

export default App;
