import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { IQueryFetch } from '../types';
import { fetchData } from '../api';
import { useDebouncedValue } from './useDebouncedValue';

const initialState = {
  data: [],
  input: '',
  loading: false
}

export const useQueryFetch = (getFetchQuery: (value: string) => string) => {
  const [status, setStatus] = useState<IQueryFetch>(initialState);

  const mounted = useRef(true);

  const debouncedQuery = useDebouncedValue(status.input, 1000, getFetchQuery);

  const reset = () => setStatus(initialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setStatus(
    event.target.value
      ? { ...initialState, input: event.target.value, loading: true }
      : initialState
  );

  useEffect(() => {
    mounted.current = true;

    (async () => {
      try {
        if (!debouncedQuery && mounted.current) return setStatus(initialState);

        const data = await fetchData(debouncedQuery);

        if (mounted.current) {
          setStatus(status => ({ ...status, data, loading: false }));
        }
      } catch (error: any) {
        if (mounted.current) {
          setStatus(status => ({ ...status, error, loading: false }));
        }
      }
    })();

    return () => {
      mounted.current = false;
    }
  }, [debouncedQuery]);

  return { ...status, onChange, reset };
}
