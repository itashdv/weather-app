import React, { useEffect, useState } from 'react';

export const Search = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => 
    setValue(event.target.value);

  useEffect(() => {
    if (!value) return;

    
  }, [value]);

  return (
    <input
      name="city"
      placeholder="Search for a location.."
      type="text"
      value={ value }
      onChange={ handleChange }
    />
  );
}
