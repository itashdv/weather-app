import React, { useState, useEffect } from "react";

import { FetchData } from "../types";

export const useFetch = (url: string | null) => {
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

  useEffect(() => {
    if (!url) return;
    
    fetchWeatherData(url);
  }, [url]);
  
  return { ...status };
};
