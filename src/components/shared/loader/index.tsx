import * as Styled from './styles';

type Props = {
  styleProps: Styled.Props;
}

export const Loader = ({ styleProps }: Props) => {
  const { $borderRadius, $height, $margin } = styleProps;

  return (
    <Styled.Loader
      role={ 'status' }
      $borderRadius={ $borderRadius }
      $height={ $height }
      $margin={ $margin }
    />
  );
}
