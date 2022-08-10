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
  const headingStyle = {
    $color: '#fff',
    $size: '24px',
  }
  const linkButtonStyle = {
    $color: '#fff',
    $size: '14px',
  }
  const imageStyle = {
    $height: '100px',
    $width: '100px',
  }

  return (
    <StyledIconBox>
      { minimized ? (
        <>
          <Heading styleProps={ headingStyle }>
            { temp }&deg;C
          </Heading>
          <LinkButton
            text={ text }
            onClick={ onClick }
            styleProps={ linkButtonStyle }
          />
        </>
      ) : (
        <Image
          alt={ description }
          src={ iconUrl }
          styleProps={ imageStyle }
        />
      ) }
    </StyledIconBox>
  );
}
