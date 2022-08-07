import React, { useState } from 'react';
import styled from 'styled-components';

import { ISearch } from '../../types';
import { getSearchQuery } from '../../utils';
import { TextInput } from '../shared';

const StyledSearch = styled.nav`
  padding: 4px;
  width: 100%;
`;

export const Search = () => {
  const [state, setState] = useState<ISearch>({
    value: '',
    query: null,
  });

  const { value, query } = state;

  const reset = () => setState({
    value: '',
    query: null
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setState({
      value: event.target.value,
      query: event.target.value
        ? getSearchQuery(event.target.value)
        : null,
    });

  return (
    <StyledSearch>
      <TextInput
        name={ 'location' }
        placeholder={ 'Search for location..' }
        value={ value }
        onChange={ handleChange }
      />
    </StyledSearch>
  );
}
