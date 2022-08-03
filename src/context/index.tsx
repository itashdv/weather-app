import React, { createContext, useState } from 'react';
import { ILocation, IAppContext } from '../types';

type ProviderProps = {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext | null>(null);

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
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
