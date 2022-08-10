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
  const nameHeadingStyle = {
    $color: '#fff',
    $size: '22px',
  }

  const tempHeadingStyle = {
    $color: '#fff',
    $size: '24px',
  }

  const descriptionTextStyle = {
    $align: 'left',
    $color: '#fff',
    $size: !minimized ? '20px' : '14px',
  }

  const textStyle = {
    $align: 'left',
    $color: '#fff',
    $size: '16px',
  }

  return (
    <StyledInfoBox>
      <Heading styleProps={ nameHeadingStyle }>
        { name }
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
    </StyledInfoBox>
  );
}
