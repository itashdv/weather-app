import React from 'react';
import { useFetch } from '../../hooks';

type Props = {
  url: string;
}

export const WeatherWidget = ({ url }: Props) => {
  const { data, error, loading } = useFetch(url);

  return (
    <>
      { loading && <p>Loading weather details..</p> }
      { error && <p className='error'>{ error.message }</p> }
      { data && (
        <>
          <h4>{ data.name }</h4>
          <p>Tempreture: { data.temp }</p>
          <p>Max: { data.temp_max }</p>
          <p>Min: { data.temp_min }</p>
          <p>Feels like: { data.feels_like }</p>
          <p>Humidity: { data.humidity }</p>
          <p>Pressure: { data.pressure }</p>
        </>
      ) }
    </>
  );
};
