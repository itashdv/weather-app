import React from 'react';

import { Text } from './shared';

export const Header: React.FC = () => {
  return (
    <Text
      color={ '#000' }
      size={ '24px' }
      textAlign={ 'center' }
    >
      Welcome to Weather App!
    </Text>
  );
}
