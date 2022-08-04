import React from 'react';
import { AppProvider } from './context';
import { useLocation } from './hooks';

import { Text } from './components/shared';

import {
  Location,
  Search,
  SelectedLocations
} from './components';

import './App.css';

function App() {
  const { data, error, loading } = useLocation();

  return (
    <AppProvider>
      <div>
        <header className="App-header">
          <p>Current location:</p>

          { loading && (
            <Text color={ '#000' } size={ 16 }>
              Getting your current location..
            </Text>
          ) }

          { error && (
            <Text color={ 'red' } size={ 16 }>
              { error.message }
            </Text>
          ) }

          { data && (
            <Location location={ data[0] } />
          ) }
        </header>

        <Search />

        <SelectedLocations />
      </div>
    </AppProvider>
  );
}

export default App;
