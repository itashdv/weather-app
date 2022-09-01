import { useContext } from 'react';

import { AppContext } from '../../../context';

import { Location } from '../location';

export const SelectedLocations = () => {
  const { locations, removeLocation } = useContext(AppContext);

  return (
    <>
      { locations.map(location => (
        <Location
          key={ location.id }
          location={{
            id: location.id,
            name: location.name,
            url: location.url
          }}
          onRemove={ removeLocation }
        />
      )) }
    </>
  );
}
