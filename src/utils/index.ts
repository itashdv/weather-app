import { API_KEY, CITY_LIMIT } from "../constants";

const getLocationUrlByCoords = (lat: number, lon: number) => 
  `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ API_KEY }`;

const getSearchQuery = (query: string) => 
  `http://api.openweathermap.org/geo/1.0/direct?q=${ query }&limit=${ CITY_LIMIT }&appid=${ API_KEY }`;

const getLocationFields = (locations: any) => {
  return locations.map((location: any) => ({
    country: location.country,
    name: location.name,
    url: getLocationUrlByCoords(location.lat, location.lon),
  }));
};

export {
  getLocationUrlByCoords,
  getSearchQuery,
  getLocationFields
}
