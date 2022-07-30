import { API_KEY, CITY_LIMIT } from "../constants";

const getLocationUrlByCoords = (lat: number, lon: number) => 
  `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=${ API_KEY }`;

const getLocationUrlByName = (name: string) => 
  `http://api.openweathermap.org/geo/1.0/direct?q=${ name }&limit=${ CITY_LIMIT }&appid=${ API_KEY }`;

const getCityNameUrl = (name: string) => 
  `http://api.openweathermap.org/geo/1.0/direct?q=${ name }&limit=${ CITY_LIMIT }&appid=${ API_KEY }`;

export { getCityNameUrl, getLocationUrlByCoords, getLocationUrlByName }
