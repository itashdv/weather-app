import { useFetch } from '../../../hooks';
import { ErrorMessage, Loader, Weather } from "../../shared";
import { ILocation } from '../../../types';

type Props = {
  location: ILocation;
  onRemove?: (id: string) => void;
}

export const Location = ({ location, onRemove }: Props) => {
  const { id, name, url } = location;

  const { data, error, loading } = useFetch(url);

  const removeLocation = onRemove ? () => onRemove(id) : undefined;

  const loaderStyle = {
    $borderRadius: '4px',
    $height: '6px',
    $margin: '4px',
  }

  return (
    <div role={'contentinfo'}>
      { loading ? (
        <Loader styleProps={ loaderStyle } />
      ) : error ? (
        <ErrorMessage>{ error.message }</ErrorMessage>
      ) : data ? (
        <Weather
          id={ id }
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