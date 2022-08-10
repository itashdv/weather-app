import React from 'react';
import * as Styled from './styles';

type Props = {
  onClick: () => void;
  text: string;
  styleProps: Styled.Props;
}

export const LinkButton = ({ onClick, text, styleProps }: Props) => {
  const { $color, $size } = styleProps;

  return (
    <Styled.LinkButton
      type="button"
      onClick={ onClick }
      $color={ $color }
      $size={ $size }
    >
      { text }
    </Styled.LinkButton>
  );
}
