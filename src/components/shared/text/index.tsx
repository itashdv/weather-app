import React from 'react';
import * as Styled from './styles';

type Props = {
  children?: React.ReactNode;
  styleProps: Styled.Props;
}

export const Text = ({ children, styleProps }: Props) => {
  const { $align, $color, $size } = styleProps;

  return (
    <Styled.Text
      $align={ $align }
      $color={ $color }
      $size={ $size }
    >
      { children }
    </Styled.Text>
  )
}
