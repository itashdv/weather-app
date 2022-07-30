import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { useFetch } from '../../hooks';

type WeatherWidgetProps = {
  url: string;
}

export const WeatherWidget = ({ url }: WeatherWidgetProps) => {
  const context = useContext(AppContext);

  const { error, loading } = useFetch(url);

  return (
    <>
      { loading && <p>Loading weather details..</p> }
      { error && <p className='error'>{ error.message }</p> }
      { context?.currentLocation.weather && (
        <>
          <h4>{ context.currentLocation.weather.name }</h4>
          <p>Tempreture: { context.currentLocation.weather.temp }</p>
          <p>Max: { context.currentLocation.weather.temp_max }</p>
          <p>Min: { context.currentLocation.weather.temp_min }</p>
          <p>Feels like: { context.currentLocation.weather.feels_like }</p>
          <p>Humidity: { context.currentLocation.weather.humidity }</p>
          <p>Pressure: { context.currentLocation.weather.pressure }</p>
        </>
      ) }
    </>
  );
};
