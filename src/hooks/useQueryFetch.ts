import { ChangeEvent, useEffect, useState } from 'react';

import { IQueryFetch } from '../types';
import { QUERY_FETCH_INITIAL_STATE } from '../constants';

import { useDebouncedValue } from './useDebouncedValue';

const initialState = QUERY_FETCH_INITIAL_STATE;

export const useQueryFetch = (getFetchQuery: (value: string) => string) => {
  const [status, setStatus] = useState<IQueryFetch>(initialState);

  const debouncedQuery = useDebouncedValue(status.input, 1000, getFetchQuery);

  const reset = () => setStatus(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setStatus(
    event.target.value
      ? { ...initialState, input: event.target.value, loading: true }
      : initialState
  );

  useEffect(() => {
    if (!debouncedQuery) return setStatus(initialState);

    fetch(debouncedQuery)
      .then((response: any) => response.json())
      .then((data: any) => {
        setStatus(status => ({ ...status, data, loading: false }));
      })
      .catch((error: Error) => {
        setStatus(status => ({ ...status, error, loading: false }));
      });
  }, [debouncedQuery]);

  return { ...status, onChange, reset };
}
