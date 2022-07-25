import React, { useState, useEffect } from "react";

import { CityWeather } from "./CityWeather";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

type LocationStatus = {
  url: null | string;
  status: null | string;
};

const CurrentLocation = () => {
  const [locationStatus, setLocationStatus] = useState<LocationStatus>({
    url: null,
    status: null,
  });

  const { url, status } = locationStatus;

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus({
        ...locationStatus,
        status: "Geolocation is not supported by your browser!",
      });
    } else {
      setLocationStatus({ ...locationStatus, status: "Locating..." });
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          setLocationStatus({
            ...locationStatus,
            url: `https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${ API_KEY }`,
            status: null,
          });
        }, error => {
          setLocationStatus({
            ...locationStatus,
            status: error.message,
          });
        });
      }, 1000);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      { status && <p>{ status }</p> }
      { url && <CityWeather url={ url } /> }
    </>
  )
}

export default CurrentLocation;