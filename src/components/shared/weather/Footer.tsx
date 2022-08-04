import React from 'react';
import styled from 'styled-components';

import { LinkButton } from '../../shared';

type Props = {
  color: string;
  leftText: string;
  onClickLeft: () => void;
  onClickRight?: () => void;
  rightText?: string;
  size: number;
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Footer = ({
  color,
  leftText,
  onClickLeft,
  onClickRight,
  rightText,
  size,
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
