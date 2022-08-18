import * as Styled from './styles';

type Props = {
  loading: boolean;
  styleProps: Styled.Props;
}

export const Loader = ({ loading, styleProps }: Props) => {
  const { $height, $margin } = styleProps;

  return loading
    ? <Styled.LoadingTrue
        data-testid="loading-true"
        $height={ $height }
        $margin={ $margin }
      />
    : <Styled.LoadingFalse
        data-testid="loading-false"
        $height={ $height }
        $margin={ $margin }
      />
}
