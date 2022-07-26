import { API_KEY } from "../constants";

import { LocationUrlData } from "../types";

export const getLocationUrl = (props: LocationUrlData) => {
  const { latitude, longitude } = props;

  return `
    https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${ API_KEY }
  `;
}
