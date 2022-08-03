import { v4 as uuidv4 } from 'uuid';
import { API_KEY, CITY_LIMIT } from "../constants";

const getLocationUrlByCoords = (lat: number, lon: number) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ API_KEY }&units=metric`;

const getSearchQuery = (query: string) =>
  `http://api.openweathermap.org/geo/1.0/direct?q=${ query }&limit=${ CITY_LIMIT }&appid=${ API_KEY }`;

const getLocationFields = (locations: any) =>
  locations.map((location: any) => ({
    id: uuidv4(),
    country: location.country,
    name: location.name,
    url: getLocationUrlByCoords(location.lat, location.lon),
  }));

const populateCurrentLocation = (lat: number, lon: number) => (
  [{ id: uuidv4(), url: getLocationUrlByCoords(lat, lon) }]
);

const setWeather = (data: any) => ({
  feels_like: data.main.feels_like,
  humidity: data.main.humidity,
  name: data.name,
  pressure: data.main.pressure,
  temp: data.main.temp,
  temp_max: data.main.temp_max,
  temp_min: data.main.temp_min,
});

export {
  getLocationUrlByCoords,
  getSearchQuery,
  getLocationFields,
  populateCurrentLocation,
  setWeather,
}
