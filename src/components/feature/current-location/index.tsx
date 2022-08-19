import { useLocation } from '../../../hooks';

import { ErrorMessage, Loader } from '../../shared';
import { Location } from '../location';

export const CurrentLocation = () => {
  const { data, error, loading } = useLocation();

  const loaderStyle = {
    $height: '6px',
    $margin: '4px',
  }

  return loading
    ? <Loader loading={ loading } styleProps={ loaderStyle } />
      : error
    ? <ErrorMessage>{ error.message }</ErrorMessage>
      : data
    ? <Location location={ data[0] } />
      : null;
}
