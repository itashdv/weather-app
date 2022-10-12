import { useParams } from 'react-router-dom';
import { useContext } from 'react';

import { AppContext } from '../../../context';

import * as Styled from './styles';

export const City = () => {
  const { locationId } = useParams();

  const { locations } = useContext(AppContext);

  console.log(locations);

  const location = locations.find(location => location.id === locationId);

  console.log(location);

  return (
    <Styled.City>
      { locationId }
    </Styled.City>
  );
}
