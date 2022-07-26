import React, { useState } from "react";

import { Weather } from '../types';

type FetchData = {
  data?: Weather;
  error?: Error;
  loading: boolean;
};

export const useFetch = () => {
  const [status, setStatus] = useState<FetchData>({
    loading: false,
  });

  const fetchWeatherData = (url: string) => {
    setStatus({ loading: true });
    fetch(url)
      .then((response: any) => response.json())
      .then((data: any) => setStatus({
        data: {
          feels_like: data.main.feels_like,
          humidity: data.main.humidity,
          name: data.name,
          pressure: data.main.pressure,
          temp: data.main.temp,
          temp_max: data.main.temp_max,
          temp_min: data.main.temp_min,
        },
        loading: false,
      }))
      .catch((error: Error) => setStatus({ error, loading: false }));
  };
  
  return { ...status, fetchWeatherData };
};
