import React, { useState } from 'react';

import { IFetching } from '../types';

import { getLocationUrlByCoords } from '../utils';

export const useLocation = () => {
  const [location, setLocation] = useState<IFetching>({
    loading: false,
  });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocation({
        ...location,
        error: {
          name: 'Not supported',
          message: 'Geolocation is not supported by your browser!',
        }
      });
    } else {
      setLocation({ loading: true });

      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;

          setLocation({
            data: {
              url: getLocationUrlByCoords(latitude, longitude),
            },
            loading: false,
          });
        }, error => {
          setLocation({
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

  return { ...location, getLocation };
}
