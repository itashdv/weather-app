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
