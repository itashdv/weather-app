export interface IWeather {
  name: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
  description: string;
  wind: number;
  iconUrl: string;
}

export interface IWeatherFetch {
  data?: IWeather;
  error?: Error;
  loading: boolean;
}

export interface ILocation {
  id: string;
  url: string;
  country?: string;
  name?: string;
  weather?: IWeather;
}

export interface ILocationFetch {
  data?: ILocation[];
  error?: Error;
  loading: boolean;
}

export interface IQueryFetch {
  data: any;
  error?: Error;
  input: string;
  loading: boolean;
}

export interface IAppContext {
  locations: ILocation[];
  addLocation: (location: ILocation) => void;
  removeLocation: (id: string) => void;
}

export type CommonProps = {
  description: string;
  temp: number;
}

export type WeatherProps = {
  feelsLike: number;
  max: number;
  min: number;
  name: string;
  wind: number;
}

export type IconProps = {
  iconUrl: string;
}

export type MinimizedProps = {
  minimized: boolean;
}
