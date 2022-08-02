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

export interface ILocationFetch {
  data?: ILocation[];
  error?: Error;
  loading: boolean;
}

export interface IWeatherFetch {
  data?: IWeather;
  error?: Error;
  loading: boolean;
}

export interface ISearch {
  value: string;
  query: string | null;
}

export interface IAppContext {
  locations: ILocation[];
  addLocation: (location: ILocation) => void;
  removeLocation: (name: string) => void;
}
