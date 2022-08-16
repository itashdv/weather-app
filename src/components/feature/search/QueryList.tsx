import { memo, useContext } from 'react';
import * as Styled from './styles';

import { AppContext } from '../../../context';
import { ILocation } from '../../../types';
import { useQueryFetch } from '../../../hooks';

import { List, Loader, Text } from '../../shared';

type Props = {
  query: string;
  reset: () => void;
}

export const QueryList = memo(({ query, reset }: Props) => {
  const { addLocation } = useContext(AppContext);

  const { data, error, loading } = useQueryFetch(query);

  const onClick = (location: ILocation) => {
    addLocation(location);
    reset();
  }

  const loaderStyle = {
    $height: '6px',
    $margin: '4px',
  }

  const errorTextStyle = {
    $align: 'center',
    $color: 'red',
    $size: '16px',
  }

  return (
    <Styled.QueryList>
      { loading ? (
        <Loader loading={ loading } styleProps={ loaderStyle } />
      ) : error ? (
        <Text styleProps={ errorTextStyle }>{ error.message }</Text>
      ) : data ? (
        <Styled.ListHolder>
          <List list={ data } onClick={ onClick } onClickOutside={ reset } />
        </Styled.ListHolder>
      ) : null }
    </Styled.QueryList>
  );
});