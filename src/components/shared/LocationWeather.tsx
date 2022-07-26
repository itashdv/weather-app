import React from 'react';

import { Weather } from '../../types';

type Props = {
  data: Weather
}

export const LocationWeather = ({ data }: Props) => {
  const {
    feels_like,
    humidity,
    name,
    pressure,
    temp,
    temp_max,
    temp_min,
  } = data;

  return (
    <>
      <h4>{ name }</h4>
      <p>Tempreture: { temp }</p>
      <p>Max: { temp_max }</p>
      <p>Min: { temp_min }</p>
      <p>Feels like: { feels_like }</p>
      <p>Humidity: { humidity }</p>
      <p>Pressure: { pressure }</p>
    </>
  );
};
