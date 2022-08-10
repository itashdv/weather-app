import React from 'react';
import styled from 'styled-components';

import { Heading } from '../shared';

const StyledHeader = styled.header`
  margin: 10px;
`;

export const Header = () => {
  const headingStyle = {
    $color: '#fff',
    $size: '24px',
  }

  return (
    <StyledHeader>
      <Heading styleProps={ headingStyle }>
        Welcome to Weather App!
      </Heading>
    </StyledHeader>
  );
}
