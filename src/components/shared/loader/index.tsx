import * as Styled from './styles';

type Props = {
  loading: boolean;
  styleProps: Styled.Props;
}

export const Loader = ({ loading, styleProps }: Props) => {
  const { $borderRadius, $height, $margin } = styleProps;

  return loading
    ? <Styled.LoadingTrue
        role={ 'status' }
        $borderRadius={ $borderRadius }
        $height={ $height }
        $margin={ $margin }
      />
    : <Styled.LoadingFalse
        role={ 'status' }
        $borderRadius={ $borderRadius }
        $height={ $height }
        $margin={ $margin }
      />
}
