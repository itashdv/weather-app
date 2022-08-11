import React, { useCallback, useState } from 'react';
import * as Styled from './styles';

import { getSearchQuery } from '../../../utils';
import { TextInput } from '../../shared';
import { QueryList } from './QueryList';

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
    <Styled.Search>
      <TextInput
        name={ 'location' }
        onChange={ handleChange }
        placeholder={ 'Search for location..' }
        value={ value }
      />
      { query && <QueryList query={ query } reset={ reset } /> }
    </Styled.Search>
  );
}
