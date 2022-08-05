import React, { useState } from 'react';
import styled from 'styled-components';

import { Heading, Image, LinkButton, Text } from '../../shared';

import { Content } from './Content';
import { Footer } from './Footer';
import { InfoBox } from './InfoBox';
import { IconBox } from './IconBox';

const StyledWeather = styled.div`
  background-color: #37B3FB;
  margin-bottom: 6px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px;
  width: 300px;
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
        <InfoBox>
          <Heading color={ '#FFF' } size={ 22 }>
            { name }
          </Heading>

          { !minimized && (
            <Heading color={ '#FFF' } size={ 24 }>
              { temp }&deg;C
            </Heading>
          ) }

          <Text color={ '#FFF' } size={ !minimized ? '20px' : '14px' }>
            { description }
          </Text>

          { !minimized && (
            <>
              <Text color={ '#FFF' } size={ '16px' }>
                Feels like: { feelsLike }&deg;C
              </Text>
              <Text color={ '#FFF' } size={ '16px' }>
                Min. temp: { min }&deg;C
              </Text>
              <Text color={ '#FFF' } size={ '16px' }>
                Max. temp: { max }&deg;C
              </Text>
              <Text color={ '#FFF' } size={ '16px' }>
                Wind: { wind } km/h
              </Text>
            </>
          ) }
        </InfoBox>
        <IconBox>
          { minimized ? (
            <>
              <Heading color={ '#FFF' } size={ 24 }>
                { temp }&deg;C
              </Heading>
              <LinkButton
                color={ '#FFF' }
                onClick={ maximize }
                size={ 14 }
                text={ 'Details' }
              />
            </>
          ) : (
            <Image
              alt={ description }
              height={ 100 }
              url={ iconUrl }
              width={ 100 }
            />
          ) }
        </IconBox>
      </Content>
      { !minimized && (
        <Footer
          color={ '#FFF' }
          leftText={ 'Minimize' }
          onClickLeft={ minimize }
          onClickRight={ onRemove && onRemove }
          rightText={ onRemove ? 'Remove' : undefined }
          size={ 14 }
        />
      ) }
    </StyledWeather>
  );
}
