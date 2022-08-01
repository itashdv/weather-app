import { useEffect, useState } from 'react';
import { IFetching } from '../types';
import { getLocationUrlByCoords } from '../utils';

export const useLocation = () => {
  const [status, setStatus] = useState<IFetching>({
    loading: false,
  });

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setStatus(status => ({
          ...status,
          error: {
            name: 'Not supported',
            message: 'Geolocation is not supported by your browser!',
          }
        }));
      } else {
        setStatus({ loading: true });
  
        setTimeout(() => {
          navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
  
            setStatus({
              data: [{ url: getLocationUrlByCoords(latitude, longitude) }],
              loading: false,
            });
          }, error => {
            setStatus({
              error: {
                name: 'Geolocation error',
                message: error.message,
              },
              loading: false,
            });
          });
        }, 1000);
      }
    };

    getLocation();
  }, []);

  return { ...status };
}
