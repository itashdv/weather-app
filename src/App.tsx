import { AppProvider } from './context';
import * as Styled from './styles';

import {
  CurrentLocation,
  Header,
  Search,
  SelectedLocations
} from './components';

import { Combobox } from './components/shared';

function App() {
  return (
    <AppProvider>
      <Styled.App>
        <Combobox />
        <h1>Hello World!</h1>
        {/* <Header />
        <Search />
        <CurrentLocation />
        <SelectedLocations /> */}
      </Styled.App>
    </AppProvider>
  );
}

export default App;
