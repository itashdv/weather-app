import { useContext, useEffect, useRef } from 'react';

import { useLocation } from '../../../hooks';
import { AppContext } from '../../../context';
import { ErrorMessage, Text } from '../../shared';
import { Location } from '../location';

export const Locations = () => {
  const context = useRef(useContext(AppContext));

  const { locations, removeLocation } = useContext(AppContext);

  const { data, error, loading } = useLocation();

  useEffect(() => {
    if (!data || !data[0].id) return;

    context.current.addLocation(data[0]);
  }, [data]);

  const textStyle = {
    $align: 'center',
    $color: '#000',
    $size: '16px',
  }

  return (
    <div>
      { loading && (
        <Text styleProps={ textStyle }>
          Getting your current location..
        </Text>
      ) }

      { error && <ErrorMessage>{ error.message }</ErrorMessage> }

      { locations.map(location => (
        <Location
          key={ location.id }
          location={{
            id: location.id,
            name: location.name,
            url: location.url
          }}
          onRemove={
            location.current
              ? undefined
              : removeLocation
          }
        />
      )) }
    </div>
  );
}
