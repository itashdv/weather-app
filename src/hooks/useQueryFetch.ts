import { useState, useEffect } from 'react';
import { IFetching } from '../types';
import { getLocationFields } from '../utils';

export const useQueryFetch = (url: string) => {
  const [status, setStatus] = useState<IFetching>({
    loading: false,
  });

  useEffect(() => {
    const fetchQueryData = (url: string) => {
      setStatus({ loading: true });
  
      fetch(url)
        .then((response: any) => response.json())
        .then((data: any) => setStatus({
          data: getLocationFields(data),
          loading: false,
        }))
        .catch((error: Error) => setStatus({
          error,
          loading: false,
        }));
    };

    fetchQueryData(url);
  }, [url]);

  return { ...status };
}
