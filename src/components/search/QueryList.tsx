import React from 'react';
import { useQueryFetch } from '../../hooks';

type Props = {
  query: string;
}

export const QueryList = ({ query }: Props) => {
  const { data, error, loading } = useQueryFetch(query);

  return (
    <>
      { loading && <p>Loading list of locations..</p> }
      { error && <p className="error">{ error.message }</p> }
      { data && (
        <ul>
          { data.map((location: any) => (
            <li key={ location.url }>
              <button className="linkButton" type="button">
                {location.name} / { location.country }
              </button>
            </li>
          )) }
        </ul>
      ) }
    </>
  )
}
