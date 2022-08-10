import React from 'react';
import * as Styled from './styles';

import { LinkButton } from '../../shared';

type Props = {
  leftText: string;
  onClickLeft: () => void;
  rightText?: string;
  onClickRight?: () => void;
}

export const Footer = ({
  leftText,
  onClickLeft,
  rightText,
  onClickRight,
}: Props) => {
  const linkButtonStyle = {
    $color: '#fff',
    $size: '14px',
  }

  return (
    <Styled.Footer>
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
    </Styled.Footer>
  );
}
