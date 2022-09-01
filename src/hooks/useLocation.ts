import { useEffect, useState } from 'react';

import { getPosition } from '../api';
import { ILocationFetch } from '../types';
import { populateCurrentLocation } from '../utils';

export const useLocation = () => {
  const [status, setStatus] = useState<ILocationFetch>({ loading: false });

  useEffect(() => {
    (async () => {
      try {
        setStatus({ loading: true });

        const { coords: { latitude, longitude } } = await getPosition();

        const data = populateCurrentLocation(latitude, longitude);

        setStatus({ data, loading: false });
      } catch (err: any) {
        const error = { name: 'Geolocation error', message: err.message }

        setStatus({ error, loading: false });
      }
    })();
  }, []);

  return { ...status };
}
