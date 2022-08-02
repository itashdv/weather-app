import { useEffect, useState } from "react";
import { IWeatherFetch } from "../types";

export const useFetch = (url: string) => {
  const [status, setStatus] = useState<IWeatherFetch>({
    loading: false,
  });

  useEffect(() => {
    (() => {
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
        .catch((error: Error) => setStatus({
          error,
          loading: false,
        }));
    })();
  }, [url]);
  
  return { ...status };
};
