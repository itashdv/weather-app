import { useState, useEffect } from 'react';
import { ILocationFetch } from '../types';
import { getLocationFields } from '../utils';

export const useQueryFetch = (url: string) => {
  const [status, setStatus] = useState<ILocationFetch>({
    loading: false,
  });

  useEffect(() => {
    if (!url) return;

    (() => {
      setStatus({ loading: true });

      setTimeout(() => {
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
      }, 3000);
    })();
  }, [url]);

  return { ...status };
}
