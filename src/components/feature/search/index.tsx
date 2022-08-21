import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../context';

import { ILocation } from '../../../types';
import { getLocationFields, getSearchQuery } from '../../../utils';
import { Combobox } from '../../shared';

export const Search = () => {
  const [input, setInput] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<ILocation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const { addLocation } = useContext(AppContext);

  let searchTimeout: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setInput('');
      setQuery('');
      setData([]);
      setLoading(false);
      setError(undefined);
    } else {
      setLoading(true);
      setInput(event.target.value);
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        setQuery(event.target.value && getSearchQuery(event.target.value));
      }, 1000);
    }
  }

  useEffect(() => {
    if (!query) return;

    (() => {
      fetch(query)
        .then((response: any) => response.json())
        .then((data: any) => {
          setData(getLocationFields(data));
          setLoading(false);
        })
        .catch((error: Error) => {
          setError(error);
          setLoading(false);
        });
    })();
  }, [query]);

  const reset = () => {
    setInput('');
    setQuery('');
    setData([]);
    setLoading(false);
    setError(undefined);
  }

  const setLocation = (location: any) => {
    addLocation(location);
    reset();
  }

  return (
    <Combobox
      ariaLabel={ 'Searchbox for searching locations' }
      comboboxName={ 'locations' }
      error={ error }
      handleChange={ handleChange }
      input={ input }
      list={ data }
      loading={ loading }
      onClick={ setLocation }
      onClickOutside={ reset }
      placeholder={ 'Enter the name of the location here..' }
    />
  );
}
