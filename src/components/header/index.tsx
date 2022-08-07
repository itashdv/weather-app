import React from 'react';
import styled from 'styled-components';

import { Text } from '../shared';

const StyledHeader = styled.header`
  // border: 2px solid red;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Text
        color={ '#000' }
        size={ '24px' }
        textAlign={ 'center' }
      >
        Welcome to Weather App!
      </Text>
    </StyledHeader>
  );
}
