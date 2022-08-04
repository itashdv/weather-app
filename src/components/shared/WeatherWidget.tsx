import React, { useState } from 'react';
import { ILocation } from '../../types';
import { useFetch } from '../../hooks';

import { Button, LinkButton } from '../shared';

type Props = {
  mode: 'list' | 'full';
  onClose?: (id: string) => void;
  location: ILocation;
}

export const WeatherWidget = ({ mode, onClose, location }: Props) => {
  const { data, error, loading } = useFetch(location.url);

  const [widgetMode, setWidgetMode] =useState<'list' | 'full'>(mode);

  return (
    <div>
      { loading && <p>Loading weather details..</p> }
      { error && <p className='error'>{ error.message }</p> }
      { data && (
        <>
          { widgetMode === 'list' ? (
            <div>
              <LinkButton
                color={ '#069' }
                onClick={ () => setWidgetMode('full') }
                size={ 16 }
                text={`
                  ${ location.name } / 
                  Temp.: ${ data.temp } / 
                  Feels like: ${ data.feels_like }
                `}
              />
              { onClose && (
                <Button
                  text={ `remove` }
                  onClick={ () => onClose(location.id) }
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
              <p>Description: { data.description }</p>
              <p>Wind: { data.wind } km/h</p>
              <LinkButton
                color={ '#069' }
                onClick={ () => setWidgetMode('list') }
                size={ 16 }
                text={ 'Minimize' }
              />
            </>
          ) }
        </>
      ) }
    </div>
  );
};
