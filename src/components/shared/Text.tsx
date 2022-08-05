import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
  color: string;
  size: string;
  textAlign?: string;
}

const StyledText = styled.p<Props>`
  color: ${ props => props.color };
  font-size: ${ props => props.size };
  margin: 4px;
  text-align: ${ props => props.textAlign }
`;

export const Text = ({
  children,
  color,
  size,
  textAlign
}: Props) => {
  return (
    <StyledText
      color={ color }
      size={ size }
      textAlign={ textAlign }
    >
      { children }
    </StyledText>
  )
}
