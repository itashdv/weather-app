import React from 'react';
import styled from 'styled-components';
import { AppProvider } from './context';

import {
  CurrentLocation,
  Header,
  Search,
  SelectedLocations
} from './components';

const StyledApp = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 380px;
  // border: 1px solid blue;
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
