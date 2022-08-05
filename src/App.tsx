import React from 'react';
import styled from 'styled-components';
import { AppProvider } from './context';

import {
  CurrentLocation,
  Header,
  Search,
  SelectedLocations
} from './components';

// remove App.css
import './App.css';

const StyledApp = styled.div`
  border: 1px solid blue;
`;

function App() {
  return (
    <AppProvider>
      <StyledApp>
        <Header />
        <Search />
        <CurrentLocation />
        <SelectedLocations />
      </StyledApp>
    </AppProvider>
  );
}

export default App;
