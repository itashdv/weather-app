import { useEffect, useRef, useState } from 'react';

import { getPosition } from '../api';
import { ILocationFetch } from '../types';
import { populateCurrentLocation } from '../utils';

export const useLocation = () => {
  const [status, setStatus] = useState<ILocationFetch>({ loading: false });

  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    (async () => {
      try {
        setStatus({ loading: true });

        const { coords: { latitude, longitude } } = await getPosition();

        const data = populateCurrentLocation(latitude, longitude);

        if (mounted.current) setStatus({ data, loading: false });
      } catch (err: any) {
        const error = { name: 'Geolocation error', message: err.message }

        if (mounted.current) setStatus({ error, loading: false });
      }
    })();

    return () => {
      mounted.current = false;
    }
  }, []);

  return { ...status };
}
