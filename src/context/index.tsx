import { createContext, useState, ReactNode, FC } from 'react';

import { ILocation, IAppContext } from '../types';

type ProviderProps = {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext>({
  locations: [],
  addLocation: () => {},
  removeLocation: () => {},
});

export const AppProvider: FC<ProviderProps> = ({ children }) => {
  const [locations, setLocations] = useState<ILocation[]>([]);

  const addLocation = (location: ILocation) =>
    setLocations((locations) => ([...locations, location]));

  const removeLocation = (id: string) =>
    setLocations((locations) => locations.filter(l => l.id !== id));

  return (
    <AppContext.Provider value={{
      locations,
      addLocation,
      removeLocation
    }}>
      { children }
    </AppContext.Provider>
  );
}
