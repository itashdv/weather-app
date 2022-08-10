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

export interface IAppContext {
  locations: ILocation[];
  addLocation: (location: ILocation) => void;
  removeLocation: (id: string) => void;
}

///////////////////////

type CommonProps = {
  description: string;
  temp: number;
}

type SecondCommonProps = {
  feelsLike: number;
  max: number;
  min: number;
  name: string;
  wind: number;
}

type ThirdCommonProps = {
  iconUrl: string;
}

type FourthCommonProps = {
  minimized: boolean;
}

type WeatherProps = {
  description: string;
  feelsLike: number;
  iconUrl: string;
  max: number;
  min: number;
  name: string;
  onRemove?: () => void;
  temp: number;
  wind: number;
}

type InfoBoxProps = {
  description: string;
  feelsLike: number;
  max: number;
  min: number;
  minimized: boolean;
  name: string;
  temp: number;
  wind: number;
}

type IconBoxProps = {
  description: string;
  iconUrl: string;
  minimized: boolean;
  onClick: () => void;
  temp: number;
  text: string;
}
