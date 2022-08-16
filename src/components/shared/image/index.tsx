import * as Styled from './styles';

type Props = {
  alt: string;
  src: string;
  styleProps: Styled.Props;
}

export const Image = ({ alt, src, styleProps }: Props) => {
  const { $height, $width } = styleProps;
  return (
    <Styled.Image
      alt={ alt }
      src={ src }
      $height={ $height }
      $width={ $width }
    />
  );
}
