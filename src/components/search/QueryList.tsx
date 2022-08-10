import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from '../../context';
import { ILocation } from '../../types';
import { useQueryFetch } from '../../hooks';

import { List, Loader, Text } from '../shared';

const StyledQueryList = styled.div`
  position: relative;
`;

const StyledListHolder = styled.div`
  position: absolute;
  width: 100%;
  background: #fff;
`;

type Props = {
  query: string;
  reset: () => void;
}

export const QueryList = React.memo(({ query, reset }: Props) => {
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
    <StyledQueryList>
      { loading && (
        <Loader
          loading={ loading }
          styleProps={ loaderStyle }
        />
      ) }
      { error && (
        <Text styleProps={ errorTextStyle }>
          { error.message }
        </Text>
      ) }
      { data && (
        <StyledListHolder>
          <List
            list={ data }
            onClick={ onClick }
            onClickOutside={ reset }
          />
        </StyledListHolder>
      ) }
    </StyledQueryList>
  );
});