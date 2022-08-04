import React from 'react';
import styled from 'styled-components';

type Props = {
  color: string;
  onClick: () => void;
  size: number;
  text?: string;
}

const StyledLinkButton = styled.button<Props>`
  color: ${ props => props.color };
  font-size: ${ props => props.size }px;
  background: none!important;
  border: none;
  padding: 4px;
  margin: 0!important;
  text-decoration: underline;
  cursor: pointer;
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
