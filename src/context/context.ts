import { createContext } from 'react';

type Coords = {
  lat: number;
  lon: number;
}

type City = {
  name: string;
  coords: Coords;
}

interface AppContextData {
  currentLocation: Coords;
  selectedLocation: Coords;
  searchQuery: string;
  queryList: City[];
}

export const AppContext = createContext<AppContextData | null>(null);
