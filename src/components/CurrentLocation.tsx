import React, { useEffect } from "react";

import { useFetch, useLocation } from '../hooks';

import { WeatherWidget } from "./shared/WeatherWidget";

export const CurrentLocation = () => {
  const { getLocation, status, url } = useLocation();
  const { loading, error, data } = useFetch(url);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      { status ? (
        <p>{ status }</p>
      ) : (
        <WeatherWidget
          data={ data }
          error={ error }
          loading={ loading }
        />
      ) }
    </>
  )
};
