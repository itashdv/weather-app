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

  const removeLocation = (name: string) => {
    console.log(name);
    setLocations((locations) => locations.filter(l => l.name !== name));
  }

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
