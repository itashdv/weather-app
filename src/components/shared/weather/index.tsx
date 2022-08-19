import { useState } from 'react';
import * as Styled from './styles';
import { CommonProps, IconProps, WeatherProps } from '../../../types';

import { Footer } from './Footer';
import { InfoBox } from './InfoBox';
import { IconBox } from './IconBox';

type Props = {
  onRemove?: () => void;
}

export const Weather = ({
  description,
  feelsLike,
  iconUrl,
  max,
  min,
  name,
  onRemove,
  temp,
  wind,
}: Props & CommonProps & IconProps & WeatherProps) => {
  const [minimized, setMinimized] = useState<boolean>(true);

  const maximize = () => setMinimized(false);

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
          onClick={ maximize }
          temp={ temp }
          text={ 'Details' }
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
