import { useEffect, useRef, useState } from "react";

import { IWeatherFetch } from "../types";
import { setWeatherData } from "../utils";
import { fetchData } from '../api';

export const useFetch = (url: string) => {
  const [status, setStatus] = useState<IWeatherFetch>({ loading: false });

  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    (async () => {
      try {
        setStatus({ loading: true });

        const response = await fetchData(url);

        const data = setWeatherData(response);
        
        if (mounted.current) setStatus({ data, loading: false });
      } catch (error: any) {
        if (mounted.current) setStatus({ error, loading: false });
      }
    })();

    return () => {
      mounted.current = false;
    }
  }, [url]);
  
  return { ...status };
}
