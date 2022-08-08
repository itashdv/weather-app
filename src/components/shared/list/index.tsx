import React, { useEffect, useRef } from 'react';
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
  onClickOutside: () => void;
}

export const List = ({ list, onClick, onClickOutside }: Props) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }

    document.addEventListener('click', handleClick, true);

    return () => document.removeEventListener('click', handleClick, true);
  }, [onClickOutside]);

  return (
    <StyledList ref={ ref }>
      { list.map((location: ILocation) => (
        <ListItem key={ location.id } onClick={ () => onClick(location) }>
          { `${ location.name } (${ location.country })` }
        </ListItem>
      )) }
    </StyledList>
  );
}
