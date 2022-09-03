import { useContext } from 'react';

import { AppContext } from '../../../context';
import { useQueryFetch } from '../../../hooks';
import { getSearchQuery, getLocationFields } from '../../../utils';
import { Combobox } from '../../shared';

export const Search = () => {
  const { addLocation } = useContext(AppContext);

  const {
    data,
    error,
    loading,
    input,
    onChange,
    reset,
  } = useQueryFetch(getSearchQuery);

  const onSelect = (listItem: any) => {
    addLocation(listItem);
    reset();
  }

  return (
    <Combobox
      ariaLabel={ 'Searchbox for searching locations' }
      comboboxName={ 'locations' }
      placeholder={ 'Enter the name of the location here..' }
      list={ getLocationFields(data) }
      error={ error }
      loading={ loading }
      input={ input }
      onChange={ onChange }
      onSelect={ onSelect }
    />
  );
}
