import { useState, useEffect } from 'react';

export const useDebouncedValue = (
  value: string,
  wait: number,
  getFetchQuery: (value: string) => string,
) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(
      value ? getFetchQuery(value) : ''
    ), wait);

    return () => clearTimeout(id);
  }, [getFetchQuery, value, wait]);

  return debouncedValue;
}
