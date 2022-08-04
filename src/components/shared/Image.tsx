import React from 'react';
import styled from 'styled-components';

type StyledProps = {
  height: number;
  width: number;
}

const StyledImage = styled.img<StyledProps>`
  height: ${ props => props.height }px;
  width: ${ props => props.width }px;
  margin: 8px;
`;

type Props = {
  alt: string;
  url: string;
  height: number;
  width: number;
}

export const Image = ({ alt, url, height, width }: Props) => {
  return (
    <StyledImage
      alt={ alt }
      src={ url }
      height={ height }
      width={ width }
    />
  );
}
