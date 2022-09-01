import { ReactNode } from 'react';

import * as Styled from './styles';

type Props = {
  children: ReactNode;
  role?: string;
  styleProps: Styled.Props;
}

export const Heading = ({ children, role, styleProps }: Props) => {
  const { $color, $size } = styleProps;

  return (
    <Styled.Heading
      role={ role }
      $color={ $color }
      $size={ $size }
    >
      { children }
    </Styled.Heading>
  );
}
