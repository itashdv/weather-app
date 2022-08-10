import React from 'react';
import styled from 'styled-components';

import { LinkButton } from '../../shared';

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
`;

type Props = {
  color: string;
  fontSize: string;
  leftText: string;
  onClickLeft: () => void;
  rightText?: string;
  onClickRight?: () => void;
}

export const Footer = ({
  color,
  fontSize,
  leftText,
  onClickLeft,
  rightText,
  onClickRight,
}: Props) => {
  const linkButtonStyle = {
    $color: color,
    $size: fontSize,
  }

  return (
    <StyledFooter>
      <LinkButton
        onClick={ onClickLeft }
        text={ leftText }
        styleProps={ linkButtonStyle }
      />
      { rightText && onClickRight && (
        <LinkButton
          onClick={ onClickRight }
          text={ rightText }
          styleProps={ linkButtonStyle }
        />
      ) }
    </StyledFooter>
  );
}
