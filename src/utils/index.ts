import { API_KEY, CITY_LIMIT } from "../constants";

import { LocationUrlData } from "../types";

const getLocationUrl = ({ latitude, longitude }: LocationUrlData) => 
  `https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${ API_KEY }`;

const getCityNameUrl = (name: string) => 
  `http://api.openweathermap.org/geo/1.0/direct?q=${ name }&limit=${ CITY_LIMIT }&appid=${ API_KEY }`;

export { getLocationUrl, getCityNameUrl }
