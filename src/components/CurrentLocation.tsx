import React from 'react';
import { useLocation } from '../hooks';

import { Text } from './shared';
import { Location } from './Location';

export const CurrentLocation: React.FC = () => {
  const { data, error, loading } = useLocation();

  return loading ? (
    <Text color={ '#000' } size={ '16px' } textAlign={ 'center' }>
      Getting your current location..
    </Text>
  ) : error ? (
    <Text color={ 'red' } size={ '16px' } textAlign={ 'center' }>
      { error.message }
    </Text>
  ) : data ? (
    <Location location={ data[0] } />
  ) : null;
}
