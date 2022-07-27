import React from 'react';

import { FetchData } from '../../types';

export const WeatherWidget = ({ data, error, loading }: FetchData) => {

  return (
    <>
      { loading && <p>Loading..</p> }
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
