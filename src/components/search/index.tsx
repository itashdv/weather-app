import React, { useState } from 'react';
import { ISearch } from '../../types';
import { getSearchQuery } from '../../utils';

import { QueryList } from './QueryList';

export const Search = () => {
  const [state, setState] = useState<ISearch>({
    value: '',
    query: null,
  });

  const { value, query } = state;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setState({
      value: event.target.value,
      query: event.target.value
        ? getSearchQuery(event.target.value)
        : null,
    });

  return (
    <>
      <input
        name="location"
        placeholder="Search for a location.."
        type="text"
        value={ value }
        onChange={ handleChange }
      />
      { query && <QueryList query={ query } /> }
    </>
  );
}
