import { Outlet } from 'react-router-dom';

import { AppProvider } from './context';
import * as Styled from './styles';

import {
  Header,
  Search,
} from './components';

function App() {
  return (
    <AppProvider>
      <Styled.App>
        <Header />
        <Search />
        <Outlet />
      </Styled.App>
    </AppProvider>
  );
}

export default App;
