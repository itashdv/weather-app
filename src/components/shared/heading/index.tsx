import { ReactNode } from 'react';

import * as Styled from './styles';

type Props = {
  children: ReactNode;
  role?: string;
  styleProps: Styled.Props;
}

export const Heading = ({ children, role, styleProps }: Props) => {
  const { $align, $color, $size } = styleProps;

  return (
    <Styled.Heading
      role={ role }
      $align={ $align }
      $color={ $color }
      $size={ $size }
    >
      { children }
    </Styled.Heading>
  );
}
