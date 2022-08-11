import React from 'react';
import * as Styled from './styles';

import { Heading } from '../../shared';

export const Header = () => {
  const headingStyle = {
    $color: '#fff',
    $size: '24px',
  }

  return (
    <Styled.Header>
      <Heading styleProps={ headingStyle }>
        Welcome to Weather App!
      </Heading>
    </Styled.Header>
  );
}
