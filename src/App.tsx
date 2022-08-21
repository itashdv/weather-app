import { AppProvider } from './context';
import * as Styled from './styles';

import {
  CurrentLocation,
  Header,
  Search,
  SelectedLocations
} from './components';

function App() {
  return (
    <AppProvider>
      <Styled.App>
        <Header />
        <Search />
        <CurrentLocation />
        <SelectedLocations />
      </Styled.App>
    </AppProvider>
  );
}

export default App;
