import React, { useState, useEffect } from 'react';

import { QueryFetchData } from '../types';

export const useQueryFetch = (url: string | null) => {
  const [status, setStatus] = useState<QueryFetchData>({
    loading: false,
  });

  const fetchQueryData = (url: string) => {
    setStatus({ loading: true });

    fetch(url)
      .then((response: any) => response.json())
      .then((data: any) => setStatus({
        data: data,
        loading: false,
      }))
      .catch((error: Error) => setStatus({ error, loading: false }));
  };

  useEffect(() => {
    if (!url) return;

    fetchQueryData(url);
  }, [url]);

  return { ...status };
}
