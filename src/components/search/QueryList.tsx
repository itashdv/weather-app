import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { ILocation } from '../../types';
import { useQueryFetch } from '../../hooks';

import { LinkButton } from '../shared';

type Props = {
  query: string;
  reset: () => void;
}

export const QueryList = ({ query, reset }: Props) => {
  const context = useContext(AppContext);

  const { data, error, loading } = useQueryFetch(query);

  const handleClick = (location: ILocation) => {
    if (!context?.locations || !context.addLocation) return;
    context.addLocation(location);
    reset();
  }

  return (
    <>
      { loading && <p>Loading list of locations..</p> }
      { error && <p>{ error.message }</p> }
      { data && (
        <ul>
          { data.map((location: ILocation) => (
            <li key={ location.id }>
              <LinkButton
                color={ '#069' }
                onClick={ () => handleClick(location) }
                size={ 16 }
                text={`${location.name} / ${ location.country }`}
              />
            </li>
          )) }
        </ul>
      ) }
    </>
  );
}
