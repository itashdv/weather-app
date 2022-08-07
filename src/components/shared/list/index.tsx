import React from 'react';
import styled from 'styled-components';

import { ILocation } from '../../../types';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  cursor: pointer;
  margin: 6px 0;
  padding: 4px;
  width: 100%;
  &:hover {
    border: 1px solid #c3c3c3;
  }
  border-radius: 2px;
`;

type Props = {
  list: ILocation[];
  onClick: (location: ILocation) => void;
}

export const List = ({ list, onClick }: Props) => {
  return (
    <StyledList>
      { list.map((location: ILocation) => (
        <ListItem key={ location.id } onClick={ () => onClick(location) }>
          { `${ location.name } (${ location.country })` }
        </ListItem>
      )) }
    </StyledList>
  );
}
