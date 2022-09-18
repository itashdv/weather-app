import { useState } from 'react';

import { CommonProps, IconProps, WeatherProps } from '../../../types';
import { Footer } from './Footer';
import { IconBox } from './IconBox';
import { InfoBox } from './InfoBox';

import * as Styled from './styles';

type Props = {
  onRemove?: () => void;
  id: string;
}

export const Weather = ({
  description,
  feelsLike,
  iconUrl,
  max,
  min,
  name,
  onRemove,
  id,
  temp,
  wind,
}: Props & CommonProps & IconProps & WeatherProps) => {
  const [minimized, setMinimized] = useState<boolean>(true);

  const minimize = () => setMinimized(true);

  return (
    <Styled.Weather role="article">
      <Styled.Content>
        <InfoBox
          description={ description }
          feelsLike={ feelsLike }
          max={ max }
          min={ min }
          minimized={ minimized }
          name={ name }
          temp={ temp }
          wind={ wind }
        />
        <IconBox
          description={ description }
          iconUrl={ iconUrl }
          minimized={ minimized }
          temp={ temp }
          text={ 'Details' }
          id={ id }
        />
      </Styled.Content>
      { !minimized && (
        <Footer
          leftText={ 'Minimize' }
          onClickLeft={ minimize }
          rightText={ onRemove ? 'Remove' : undefined }
          onClickRight={ onRemove && onRemove }
        />
      ) }
    </Styled.Weather>
  );
}
