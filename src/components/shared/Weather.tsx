import React, { useState } from 'react';
import styled from 'styled-components';

import { Text, Heading, Image, LinkButton, Footer } from '../shared';

const StyledWeather = styled.div`
  background-color: #37B3FB;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 14px;
`;

type StyledColumnProps = {
  right: boolean;
}

const WeatherRow = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
`;

const WeatherColumn = styled.div<StyledColumnProps>`
  display: ${ props => props.right ? 'flex' : undefined };
  align-items: ${ props => props.right ? 'center' : undefined };
  justify-content: ${ props => props.right ? 'space-around' : undefined };
  text-align: left;
  width: 50%;
`;

export const Weather: React.FC = () => {
  const [minimized, setMinimized] = useState<boolean>(true);

  const minimize = (value: boolean) => setMinimized(value);

  return (
    <StyledWeather>
      <WeatherRow>
        <WeatherColumn right={ false }>
          <Heading color={ '#FFF' } size={ 22 }>
            Pertopavlovks-Kamchatsky
          </Heading>
          { !minimized && (
            <Heading color={ '#FFF' } size={ 24 }>
              13&deg;C
            </Heading>
          ) }
          <Text color={ '#FFF' } size={ !minimized ? 20 : 14 }>
            Broken clouds
          </Text>
          { !minimized && (
            <>
              <Text color={ '#FFF' } size={ 16 }>
                Feels like: 12&deg;C
              </Text>
              <Text color={ '#FFF' } size={ 16 }>
                Min. temp: 9&deg;C
              </Text>
              <Text color={ '#FFF' } size={ 16 }>
                Max. temp: 15&deg;C
              </Text>
              <Text color={ '#FFF' } size={ 16 }>
                Wind: 1.8 km/h
              </Text>
            </>
          ) }
        </WeatherColumn>
        <WeatherColumn right={ true }>
          { !minimized ? (
            <Image
              alt={ 'alt' }
              url={ 'http://openweathermap.org/img/wn/04n@2x.png' }
              height={ 100 }
              width={ 100 }
            />
          ) : (
            <>
              <Heading color={ '#FFF' } size={ 24 }>
                13&deg;C
              </Heading>
              <LinkButton
                color={ '#FFF' }
                onClick={ () => minimize(false) }
                size={ 14 }
                text={ 'Details' }
              />
            </>
          ) }
        </WeatherColumn>
      </WeatherRow>
      { !minimized && (
        <Footer
          color={ '#FFF' }
          size={ 14 }
          leftText={ 'Minimize' }
          rightText={ 'Remove' }
          onClickLeft={ () => minimize(true) }
          onClickRight={ () => console.log('Right click') }
        />
      ) }
    </StyledWeather>
  );
}
