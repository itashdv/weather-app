import React, { useContext } from 'react';
import { AppContext } from '../context';

import { WeatherWidget } from './shared';

export const SelectedLocations = () => {
  const context = useContext(AppContext);

  return (
    <>
      { context?.locations && context.locations.map(location => (
        <WeatherWidget
          key={ location.url }
          mode={ 'list' }
          onClose={ context.removeLocation }
          url={ location.url }
        />
      )) }
    </>
  );
}
