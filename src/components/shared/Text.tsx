import React from 'react';
import styled from 'styled-components';

type StyledProps = {
  color: string;
  size: number;
}

const StyledText = styled.p<StyledProps>`
  color: ${ props => props.color };
  font-size: ${ props => props.size }px;
  margin: 4px;
`;

type Props = {
  children: React.ReactNode;
  color: string;
  size: number;
}

export const Text = ({ children, color, size }: Props) => {
  return (
    <StyledText color={ color } size={ size }>
      { children }
    </StyledText>
  )
}
