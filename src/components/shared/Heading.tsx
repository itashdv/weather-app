import React from 'react';
import styled from 'styled-components';

type StyledProps = {
  color: string;
  size: number;
}

const StyledHeading = styled.h4<StyledProps>`
  color: ${ props => props.color };
  font-size: ${ props => props.size }px;
  margin: 4px;
`;

type Props = {
  children: React.ReactNode;
  color: string;
  size: number;
}

export const Heading = ({ children, color, size }: Props) => {
  return (
    <StyledHeading color={ color } size={ size }>
      { children }
    </StyledHeading>
  )
}
