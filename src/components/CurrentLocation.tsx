import React from 'react';
import { useLocation } from '../hooks';

import { Text, Loader } from './shared';
import { Location } from './Location';

export const CurrentLocation: React.FC = () => {
  const { data, error, loading } = useLocation();

  return loading ? (
    <Loader
      height={ '6px' }
      loading={ loading }
      margin={ '4px' }
    />
  ) : error ? (
    <Text color={ 'red' } size={ '16px' } textAlign={ 'center' }>
      { error.message }
    </Text>
  ) : data ? (
    <Location location={ data[0] } />
  ) : null;
}
