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
  data?: ILocation[];
  error?: Error;
  loading: boolean;
}

export interface IFetchingSingle {
  data?: IWeather;
  error?: Error;
  loading: boolean;
}

export interface ISearch {
  value: string;
  query: string | null;
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
