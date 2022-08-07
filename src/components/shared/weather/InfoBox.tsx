import React from 'react';
import styled from 'styled-components';

import { Heading, Text } from '../../shared';

const StyledInfoBox = styled.div`
  text-align: left;
  width: 50%;
`;

type Props = {
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
  description,
  feelsLike,
  max,
  min,
  minimized,
  name,
  temp,
  wind,
}: Props) => {
  return (
    <StyledInfoBox>
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
    </StyledInfoBox>
  );
}
