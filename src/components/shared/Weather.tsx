import React from 'react';
import styled from 'styled-components';

import { Text, Heading } from '../shared';

const StyledWeather = styled.div`
  background-color: #37B3FB;
  display: flex;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;

const WeatherColumn = styled.div`
  text-align: left;
  width: 50%;
`;

export const Weather = () => {
  return (
    <StyledWeather>
      <WeatherColumn>
        <Heading color={ '#FFF' } size={ 24 }>
          20&deg;C
        </Heading>
        <Text color={ '#FFF' } size={ 20 }>
          Mostly cloudly
        </Text>
        <Text color={ '#FFF' } size={ 16 }>
          Precipitation: 25%
        </Text>
        <Text color={ '#FFF' } size={ 16 }>
          Wind: 6kph
        </Text>
      </WeatherColumn>
      <WeatherColumn>
        Image here
      </WeatherColumn>
    </StyledWeather>
  );
}
