import React, { useState, useEffect } from "react";

interface ReturnData {
  loading: boolean;
  error?: Error;
  data?: any;
}

export const useFetch = () => {
  const [status, setStatus] = useState<ReturnData>({
    loading: false,
  });

  const fetchNow = (url: string) => {
    setStatus({ loading: true });

    fetch(url)
      .then((response: any) => response.json())
      .then((data: any) => setStatus({ loading: false, data: data }))
      .catch((error: Error) => setStatus({ loading: false, error }));
  };
  
  return { ...status, fetchNow };
}
