import { AppProvider } from './context';
import * as Styled from './styles';

import {
  CurrentLocation,
  Header,
  Search,
  SelectedLocations
} from './components';

import { NewComponent } from './components/feature/NewComponent';

function App() {
  return (
    <AppProvider>
      <Styled.App>
        <Header />
        <NewComponent />
        {/* <Search />
        <CurrentLocation />
        <SelectedLocations /> */}
      </Styled.App>
    </AppProvider>
  );
}

export default App;
