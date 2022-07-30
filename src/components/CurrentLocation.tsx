import React, { useContext, useEffect } from "react";
import { useFetch, useLocation } from '../hooks';
import { AppContext } from "../context";
import { WeatherWidget } from "./shared/WeatherWidget";

export const CurrentLocation = () => {
  const { data, error, loading, getLocation } = useLocation();

  const context = useContext(AppContext);

  useEffect(() => {
    if (data?.url && context?.updateCurrentLocation) {
      context.updateCurrentLocation(data);
    }
  }, [context, data]);

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      { loading && <p>Getting your current location..</p> }
      { context?.currentLocation && <p>{ context.currentLocation.url }</p> }
    </>
  );
};
