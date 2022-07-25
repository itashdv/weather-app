import React from 'react';

import { useFetch } from '../../hooks/useFetch';

type Props = { url: string };

export const CityWeather = (props: Props) => {

  const { url } = props;

  const { loading, error, data, fetchNow } = useFetch();

  console.log(loading);
  console.log(error);
  console.log(data);

  return (
    <>
      <p>City Weather component</p>
      <button onClick={ () => fetchNow(url) }>Fetch Weather</button>
      { loading && <p>Loading.....</p> }
    </>
  )
}
