import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { getSearchQuery } from '../../utils';
import { TextInput } from '../shared';
import { QueryList } from './QueryList';

const StyledSearch = styled.nav`
  padding: 4px;
  width: 100%;
`;

export const Search = () => {
  const [value, setValue] = useState<string>('');
  const [query, setQuery] = useState<string>('');

  let searchTimeout: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      setQuery(event.target.value && getSearchQuery(event.target.value));
    }, 1000);
  }

  const reset = useCallback(() => {
    setValue('');
    
    setQuery('');
  }, [setValue, setQuery]);

  return (
    <StyledSearch>
      <TextInput
        name={ 'location' }
        placeholder={ 'Search for location..' }
        value={ value }
        onChange={ handleChange }
      />
      { query && (
        <QueryList
          query={ query }
          reset={ reset }
        />
      ) }
    </StyledSearch>
  );
}
