import React from "react";
import { useLocation } from '../hooks';
import { WeatherWidget } from "./shared";

export const CurrentLocation = () => {
  const { data, error, loading } = useLocation();

  return (
    <>
      { loading && <p>Getting your current location..</p> }
      { error && <p className="error">{ error.message }</p> }
      { data && (
        <WeatherWidget
          mode={ 'full' }
          location={ data[0] }
        />
      ) }
    </>
  );
};
