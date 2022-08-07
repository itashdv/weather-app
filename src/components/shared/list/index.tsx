import React from 'react';
import styled from 'styled-components'

import { ILocation } from '../../../types';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

type Props = {
  list: ILocation[];
}

export const List = ({ list }: Props) => {
  return (
    <StyledList>
      { list.map((location: ILocation) => (
        <li key={ location.id }>
          { location.name }
        </li>
      )) }
    </StyledList>
  );
}
