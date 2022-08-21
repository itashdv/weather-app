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
    name: `${ location.name } (${ location.country })`,
    url: getLocationUrlByCoords(location.lat, location.lon),
  }));

const populateCurrentLocation = (lat: number, lon: number) => (
  [{ id: uuidv4(), url: getLocationUrlByCoords(lat, lon) }]
);

const setWeatherData = (data: any) => ({
  name: data.name,
  temp: Math.round(data.main.temp),
  temp_max: Math.round(data.main.temp_max),
  temp_min: Math.round(data.main.temp_min),
  feels_like: Math.round(data.main.feels_like),
  description: data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1),
  wind: Math.round(data.wind.speed * 10) / 10,
  iconUrl: `http://openweathermap.org/img/wn/${ data.weather[0].icon }@2x.png`,
});

export {
  getLocationUrlByCoords,
  getSearchQuery,
  getLocationFields,
  populateCurrentLocation,
  setWeatherData,
}
