import { Link } from 'react-router-dom';

import { CommonProps, MinimizedProps, WeatherProps } from '../../../types';
import { Heading, Text } from '../../shared';

import * as Styled from './styles';

type Props = {
  id: string;
  description: string;
  feelsLike: number;
  max: number;
  min: number;
  minimized: boolean;
  name: string;
  temp: number;
  wind: number;
}

export const InfoBox = ({
  id,
  description,
  feelsLike,
  max,
  min,
  minimized,
  name,
  temp,
  wind,
}: Props & CommonProps & MinimizedProps & WeatherProps) => {
  const descriptionTextStyle = {
    $align: 'left',
    $color: '#fff',
    $size: !minimized ? '20px' : '14px',
  }

  const nameHeadingStyle = {
    $color: '#fff',
    $size: '22px',
  }

  const tempHeadingStyle = {
    $color: '#fff',
    $size: '24px',
  }

  const textStyle = {
    $align: 'left',
    $color: '#fff',
    $size: '16px',
  }

  return (
    <Styled.InfoBox>
      <Heading styleProps={ nameHeadingStyle }>
        <Link
          style={{ color: '#fff' }}
          to={ `/locations/${ id }` }
        >
          { name }
        </Link>
      </Heading>

      { !minimized && (
        <Heading styleProps={ tempHeadingStyle }>
          { temp }&deg;C
        </Heading>
      ) }

      <Text styleProps={ descriptionTextStyle }>
        { description }
      </Text>

      { !minimized && (
        <>
          <Text styleProps={ textStyle }>
            Feels like: { feelsLike }&deg;C
          </Text>
          <Text styleProps={ textStyle }>
            Min. temp: { min }&deg;C
          </Text>
          <Text styleProps={ textStyle }>
            Max. temp: { max }&deg;C
          </Text>
          <Text styleProps={ textStyle }>
            Wind: { wind } km/h
          </Text>
        </>
      ) }
    </Styled.InfoBox>
  );
}
