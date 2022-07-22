import React, { useState, useEffect } from "react";

interface ReturnData {
  loading: boolean;
  error: null | string;
  data: any;
}

export async function fetchData(url: string): Promise<ReturnData> {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await fetch(url);
      if (!response.ok) {
        setError("Something went wrong during the request!");
      } else {
        const responseData = await response.json();
        setData(responseData);
      }
      setLoading(false);
    })();
  }, [url]);

  return { loading, error, data };
}
