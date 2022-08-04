import React from 'react';
import styled from 'styled-components';

import { LinkButton } from '../shared';

type Props = {
  color: string;
  size: number;
  leftText: string;
  rightText?: string;
  onClickLeft: () => void;
  onClickRight?: () => void;
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Footer = ({
    color,
    size,
    leftText,
    rightText,
    onClickLeft,
    onClickRight
}: Props) => {

  return (
    <StyledFooter>
      <LinkButton
        color={ color }
        onClick={ onClickLeft }
        size={ size }
        text={ leftText }
      />
      { rightText && onClickRight && (
        <LinkButton
          color={ color }
          onClick={ onClickRight }
          size={ size }
          text={ rightText }
        />
      ) }
    </StyledFooter>
  );
}
