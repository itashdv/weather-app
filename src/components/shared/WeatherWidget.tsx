import React, { useState } from 'react';
import { useFetch } from '../../hooks';

import { Button, LinkButton } from '../shared';

type Props = {
  mode: 'list' | 'full';
  onClose?: (name: string) => void;
  url: string;
}

export const WeatherWidget = ({ mode, onClose, url }: Props) => {
  const { data, error, loading } = useFetch(url);

  const [widgetMode, setWidgetMode] =useState<'list' | 'full'>(mode);

  return (
    <>
      { loading && <p>Loading weather details..</p> }
      { error && <p className='error'>{ error.message }</p> }
      { data && (
        <>
          { widgetMode === 'list' ? (
            <div>
              <LinkButton
                text={`
                  ${ data.name } / 
                  Temp.: ${ data.temp } / 
                  Feels like: ${ data.feels_like }
                `}
                onClick={ () => setWidgetMode('full') }
              />
              { onClose && (
                <Button
                  text={ `remove` }
                  onClick={ () => onClose(data.name) }
                />
              ) }
            </div>
          ) : (
            <>
              <h4>{ data.name }</h4>
              <p>Temperature: { data.temp }</p>
              <p>Max: { data.temp_max }</p>
              <p>Min: { data.temp_min }</p>
              <p>Feels like: { data.feels_like }</p>
              <p>Humidity: { data.humidity }</p>
              <p>Pressure: { data.pressure }</p>
              <LinkButton
                text={ 'Minimize' }
                onClick={ () => setWidgetMode('list') }
              />
            </>
          ) }
        </>
      ) }
    </>
  );
};
