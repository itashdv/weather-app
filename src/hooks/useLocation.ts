import React, { useState, useContext } from 'react';
import { AppContext } from '../context';
import { IFetching } from '../types';
import { getLocationUrlByCoords } from '../utils';

export const useLocation = () => {
  const context = useContext(AppContext);

  const [status, setStatus] = useState<IFetching>({
    loading: false,
  });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus({
        ...status,
        error: {
          name: 'Not supported',
          message: 'Geolocation is not supported by your browser!',
        }
      });
    } else {
      setStatus({ loading: true });

      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;

          context?.updateCurrentLocation({
            url: getLocationUrlByCoords(latitude, longitude),
          });

          setStatus({ loading: false });
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

  return { ...status, getLocation };
}
