import React from "react";
import { useFetch } from '../hooks';

import { Text, Weather } from "./shared";

type Props = {
  location: {
    id: string;
    url: string;
  },
  onRemove?: (id: string) => void;
}

export const Location = ({ location, onRemove }: Props) => {
  const { id, url } = location;

  const { data, error, loading } = useFetch(url);

  const removeLocation = onRemove ? () => onRemove(id) : undefined;

  return (
    <>
      { loading && (
        <Text color={ '#000' } size={ 16 }>
          Loading current location..
        </Text>
      ) }

      { error && (
        <Text color={ 'red' } size={ 16 }>
          { error.message }
        </Text>
      ) }

      { data && (
        <Weather
          description={ data.description }
          feelsLike={ data.feels_like }
          iconUrl={ data.iconUrl }
          max={ data.temp_max }
          min={ data.temp_min }
          name={ data.name }
          onRemove={ removeLocation }
          temp={ data.temp }
          wind={ data.wind }
        />
      ) }
    </>
  );
};
