import React, { createContext, useState } from 'react';
import { ILocation, IAppContext } from '../types';

type ProviderProps = {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext | null>(null);

export const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState<ILocation>({ url: '' });
  const [selectedLocation, setSelectedLocation] = useState<ILocation>({ url: '' });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [queryList, setQueryList] = useState<ILocation[]>([]);

  const updateCurrentLocation = (location: ILocation) => setCurrentLocation(location);
  const updateSelectedLocation = (location: ILocation) => setSelectedLocation(location);
  const updateSearchQuery = (query: string) => setSearchQuery(query);
  const updateQueryList = (list: ILocation[]) => setQueryList(list);

  return (
    <AppContext.Provider value={{
      currentLocation,
      updateCurrentLocation,
      selectedLocation,
      updateSelectedLocation,
      searchQuery,
      updateSearchQuery,
      queryList,
      updateQueryList,
    }}>
      { children }
    </AppContext.Provider>
  );
}
