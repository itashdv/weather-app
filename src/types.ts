export type LocationData = {
  status: string | null;
  url: string | null;
}

export type LocationUrlData = {
  latitude: number;
  longitude: number;
}

export interface Weather {
  feels_like: number;
  humidity: number;
  name: string;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export type FetchData = {
  data?: Weather;
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