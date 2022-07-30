import React, { useState, useEffect } from 'react';

import { getCityNameUrl } from '../utils';

import { useQueryFetch } from '../hooks/useQueryFetch';

export const SelectedLocation = () => {
  const [city, setCity] = useState<string>('');
  const [url, setUrl] = useState<string | null>(null);

  const { data, error, loading } = useQueryFetch(url);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    if (city === '') return;
    
    setUrl(getCityNameUrl(city));
  }, [city]);

  return (
    <>
      <input
        name="city"
        placeholder="Search for a location.."
        type="text"
        value={ city }
        onChange={ handleChange }
      />
    </>
  );
}
