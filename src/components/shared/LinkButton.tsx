import React from 'react';
import styled from 'styled-components';

type Props = {
  color: string;
  onClick: () => void;
  size: number;
  text?: string;
}

const StyledLinkButton = styled.button<Props>`
  background: none!important;
  border: none;
  color: ${ props => props.color };
  cursor: pointer;
  font-size: ${ props => props.size }px;
  margin: 0!important;
  padding: 4px;
  text-decoration: underline;
`;

export const LinkButton = ({ color, onClick, size, text }: Props) =>
  <StyledLinkButton
    color={ color }
    onClick={ onClick }
    size={ size }
    type="button"
  >
    { text }
  </StyledLinkButton>
