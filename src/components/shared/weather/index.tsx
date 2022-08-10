import React, { useState } from 'react';
import styled from 'styled-components';

import { Content } from './Content';
import { Footer } from './Footer';
import { InfoBox } from './InfoBox';
import { IconBox } from './IconBox';

const StyledWeather = styled.div`
  background-color: #206993;
  margin: 6px auto;
  padding: 14px;
`;

type Props = {
  description: string;
  feelsLike: number;
  iconUrl: string;
  max: number;
  min: number;
  name: string;
  onRemove?: () => void;
  temp: number;
  wind: number;
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
}: Props) => {
  const [minimized, setMinimized] = useState<boolean>(true);

  const maximize = () => setMinimized(false);

  const minimize = () => setMinimized(true);

  return (
    <StyledWeather>
      <Content>
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
      </Content>
      { !minimized && (
        <Footer
          color={ '#fff' }
          fontSize={ '14px' }
          leftText={ 'Minimize' }
          onClickLeft={ minimize }
          rightText={ onRemove ? 'Remove' : undefined }
          onClickRight={ onRemove && onRemove }
        />
      ) }
    </StyledWeather>
  );
}
