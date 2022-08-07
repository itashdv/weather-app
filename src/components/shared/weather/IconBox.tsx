import React from 'react';
import styled from 'styled-components';

import { Heading, Image, LinkButton } from '../../shared';

const StyledIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: left;
  width: 50%;
`;

type Props = {
  description: string;
  iconUrl: string;
  minimized: boolean;
  onClick: () => void;
  temp: number;
  text: string;
}

export const IconBox = ({
  description,
  iconUrl,
  minimized,
  onClick,
  temp,
  text,
}: Props) => {
  return (
    <StyledIconBox>
      { minimized ? (
        <>
          <Heading color={ '#FFF' } size={ 24 }>
            { temp }&deg;C
          </Heading>
          <LinkButton
            color={ '#FFF' }
            onClick={ onClick }
            size={ 14 }
            text={ text }
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
    </StyledIconBox>
  );
}
