import { useEffect, useRef } from 'react';
import * as Styled from './styles';

import { ILocation } from '../../../types';

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

    return () => {
      document.removeEventListener('click', handleClick, true);
    }
  }, [onClickOutside]);

  return (
    <Styled.List ref={ ref }>
      { list.map((location: ILocation) => (
        <Styled.ListItem
          key={ location.id }
          onClick={ () => onClick(location) }
        >
          { `${ location.name } (${ location.country })` }
        </Styled.ListItem>
      )) }
    </Styled.List>
  );
}
