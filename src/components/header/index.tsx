import React from 'react';
import styled from 'styled-components';

import { Text } from '../shared';

const StyledHeader = styled.header`
  margin: 10px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Text
        color={ '#fff' }
        size={ '24px' }
        textAlign={ 'center' }
      >
        Welcome to Weather App!
      </Text>
    </StyledHeader>
  );
}
