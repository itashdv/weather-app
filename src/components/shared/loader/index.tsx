import React from 'react';
import * as Styled from './styles';

type Props = {
  loading: boolean;
  styleProps: Styled.Props;
}

export const Loader = ({ loading, styleProps }: Props) => {
  const { $height, $margin } = styleProps;

  return loading
    ? <Styled.LoadingTrue $height={ $height } $margin={ $margin } />
    : <Styled.LoadingFalse $height={ $height } $margin={ $margin } />
}
