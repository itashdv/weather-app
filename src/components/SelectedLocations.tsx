import React, { useContext } from 'react';
import { AppContext } from '../context';

import { Location } from './Location';

export const SelectedLocations = () => {
  const context = useContext(AppContext);

  return (
    <>
      { context?.locations && context.locations.map(location => (
        <Location
          key={ location.id }
          location={{
            id: location.id,
            url: location.url
          }}
          onRemove={ context.removeLocation }
        />
      )) }
    </>
  );
}
