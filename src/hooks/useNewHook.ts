import { ChangeEvent, useState, useEffect } from 'react';

import { useDebouncedValue } from './useDebouncedValue';

interface State {
  data: any;
  error?: Error;
  input: string;
  loading: boolean;
}

const initialState = {
  data: [],
  input: '',
  loading: false
}

export const useNewHook = (getFetchQuery: (value: string) => string) => {
  const [status, setStatus] = useState<State>(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setStatus(
    event.target.value
      ? { ...initialState, input: event.target.value, loading: true }
      : initialState
  );

  const debouncedQuery = useDebouncedValue(status.input, 1000, getFetchQuery);

  useEffect(() => {
    if (!debouncedQuery) {
      setStatus(initialState);
    } else {
      fetch(debouncedQuery)
        .then((response: any) => response.json())
        .then((data: any) => {
          setStatus(status => ({ ...status, data, loading: false }));
        })
        .catch((error: Error) => {
          setStatus(status => ({ ...status, error, loading: false }));
        });
    }
  }, [debouncedQuery]);

  return { ...status, onChange };
}
