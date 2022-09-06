import { AppProvider } from './context';
import * as Styled from './styles';

import {
  Header,
  Search,
  Locations,
} from './components';

function App() {
  return (
    <AppProvider>
      <Styled.App>
        <Header />
        <Search />
        <Locations />
      </Styled.App>
    </AppProvider>
  );
}

export default App;
