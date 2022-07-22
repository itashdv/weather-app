import React from 'react';
import './App.css';

import GetLocation from './components/get-location';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Aitash Weather App!</p>
        <GetLocation />
      </header>
    </div>
  );
}

export default App;
