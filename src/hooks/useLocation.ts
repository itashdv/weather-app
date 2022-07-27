import React, { useState } from 'react';

import { LocationData } from '../types';

import { getLocationUrl } from '../utils';

export const useLocation = () => {
  const [locationStatus, setLocationStatus] = useState<LocationData>({
    status: null,
    url: null,
  });

  const getLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus({
        ...locationStatus,
        status: "Geolocation is not supported by your browser!",
      });
    } else {
      setLocationStatus({ ...locationStatus, status: "Getting current location.." });
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          setLocationStatus({
            status: null,
            url: getLocationUrl({ latitude, longitude }),
          });
        }, error => {
          setLocationStatus({
            ...locationStatus,
            status: error.message,
          });
        });
      }, 1000);
    }
  };

  return { ...locationStatus, getLocation };
}
