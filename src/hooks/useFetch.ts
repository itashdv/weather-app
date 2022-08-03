import { useEffect, useState } from "react";
import { IWeatherFetch } from "../types";
import { setWeather } from "../utils";

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
          data: setWeather(data),
          loading: false,
        }))
        .catch((error: Error) => setStatus({
          error,
          loading: false,
        }));
    })();
  }, [url]);
  
  return { ...status };
}
