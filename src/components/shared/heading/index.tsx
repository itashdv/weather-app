import { ReactNode } from 'react';
import * as Styled from './styles';

type Props = {
  children: ReactNode;
  styleProps: Styled.Props;
}

export const Heading = ({ children, styleProps }: Props) => {
  const { $color, $size } = styleProps;
  return (
    <Styled.Heading $color={ $color } $size={ $size }>
      { children }
    </Styled.Heading>
  )
}
