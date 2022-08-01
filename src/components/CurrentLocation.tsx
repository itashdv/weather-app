import React, { useContext, useEffect } from "react";
import { AppContext } from "../context";
import { useLocation } from '../hooks';
import { WeatherWidget } from "./shared/WeatherWidget";

export const CurrentLocation = () => {
  const context = useContext(AppContext);

  const { error, loading, getLocation } = useLocation();

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      { loading && <p>Getting your current location..</p> }
      { error && <p className="error">{ error.message }</p> }
      { context?.currentLocation.url && (
        <WeatherWidget url={ context.currentLocation.url } />
      ) }
    </>
  );
};
