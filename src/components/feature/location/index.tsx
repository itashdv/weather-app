import { useFetch } from '../../../hooks';

import { Loader, Text, Weather } from "../../shared";

type Props = {
  location: {
    id: string;
    name?: string;
    url: string;
  },
  onRemove?: (id: string) => void;
}

export const Location = ({ location, onRemove }: Props) => {
  const { id, name, url } = location;

  const { data, error, loading } = useFetch(url);

  const removeLocation = onRemove ? () => onRemove(id) : undefined;

  const loaderStyle = {
    $height: '6px',
    $margin: '4px',
  }

  const errorTextStyle = {
    $align: 'center',
    $color: 'red',
    $size: '16px',
  }

  return (
    <div role={'contentinfo'}>
      { loading ? (
        <Loader loading={ loading } styleProps={ loaderStyle } />
      ) : error ? (
        <Text styleProps={ errorTextStyle }>{ error.message }</Text>
      ) : data ? (
        <Weather
          description={ data.description }
          feelsLike={ data.feels_like }
          iconUrl={ data.iconUrl }
          max={ data.temp_max }
          min={ data.temp_min }
          name={ name ? name : data.name }
          onRemove={ removeLocation }
          temp={ data.temp }
          wind={ data.wind }
        />
      ) : null }
    </div>
  );
};
