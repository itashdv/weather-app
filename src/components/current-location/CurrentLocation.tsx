import React, { useEffect } from 'react';

import { useFetch } from '../../hooks/useFetch';

import { LocationWeather } from '../shared/LocationWeather';

type Props = { url: string };

export const CurrentLocationWeather = (props: Props) => {

  const { url } = props;

  const { loading, error, data, fetchWeatherData } = useFetch();

  console.log(loading);
  console.log(error);
  console.log(data);

  useEffect(() => {
    fetchWeatherData(url);
  }, [url]);

  return (
    <>
      <p>City Weather component</p>
      { loading && <p>Loading.....</p> }
      { data && <LocationWeather data={ data } /> }
    </>
  )
}
