export interface IWeather {
  feels_like: number;
  humidity: number;
  name: string;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface ILocation {
  country?: string;
  name?: string;
  url: string;
  weather?: IWeather;
}

export interface IFetching {
  error?: Error;
  loading: boolean;
}

export interface IAppContext {
  currentLocation: ILocation;
  updateCurrentLocation: (location: ILocation) => void;
  selectedLocation: ILocation;
  updateSelectedLocation: (location: ILocation) => void;
  searchQuery: string;
  updateSearchQuery: (query: string) => void;
  queryList: ILocation[];
  updateQueryList: (list: ILocation[]) => void;
}




export type LocationData = {
  status: string | null;
  url: string | null;
}

export type LocationUrlData = {
  latitude: number;
  longitude: number;
}

export type FetchData = {
  data?: IWeather;
  error?: Error;
  loading: boolean;
}

export type QueryFetchData = {
  data?: {
    country: string;
    latitude: number;
    longitude: number;
    name: string;
  }[];
  error?: Error;
  loading: boolean;
}