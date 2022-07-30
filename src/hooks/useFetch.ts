import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context";
import { IFetching } from "../types";

export const useFetch = (url: string) => {
  const context = useContext(AppContext);

  const [status, setStatus] = useState<IFetching>({
    loading: false,
  });

  const fetchWeatherData = (url: string) => {
    setStatus({ loading: true });

    fetch(url)
      .then((response: any) => response.json())
      .then((data: any) => {
        context?.updateCurrentLocation({
          ...context.currentLocation,
          weather: {
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            name: data.name,
            pressure: data.main.pressure,
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
          },
        });

        setStatus({ loading: false });
      })
      .catch((error: Error) => setStatus({ error, loading: false }));
  };

  useEffect(() => {
    fetchWeatherData(url);
  }, [url]);
  
  return { ...status };
};
