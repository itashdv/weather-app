import { useLocation } from '../../../hooks';

import { Text, Loader } from '../../shared';
import { Location } from '../location';

export const CurrentLocation = () => {
  const { data, error, loading } = useLocation();

  const loaderStyle = {
    $height: '6px',
    $margin: '4px',
  }

  const errorTextStyle = {
    $align: 'center',
    $color: 'red',
    $size: '16px',
  }

  return loading
    ? <Loader loading={ loading } styleProps={ loaderStyle } />
      : error
    ? <Text role="alert" styleProps={ errorTextStyle }>{ error.message }</Text>
      : data
    ? <Location location={ data[0] } />
      : null;
}
