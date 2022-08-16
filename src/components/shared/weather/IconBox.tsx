import * as Styled from './styles';
import { CommonProps, IconProps, MinimizedProps } from '../../../types'

import { Heading, Image, LinkButton } from '../../shared';

type Props = {
  onClick: () => void;
  text: string;
}

export const IconBox = ({
  description,
  iconUrl,
  minimized,
  onClick,
  temp,
  text,
}: Props & CommonProps & IconProps & MinimizedProps) => {
  const headingStyle = {
    $color: '#fff',
    $size: '24px',
  }
  const linkButtonStyle = {
    $color: '#fff',
    $size: '14px',
  }
  const imageStyle = {
    $height: '100px',
    $width: '100px',
  }

  return (
    <Styled.IconBox>
      { minimized ? (
        <>
          <Heading styleProps={ headingStyle }>
            { temp }&deg;C
          </Heading>
          <LinkButton
            text={ text }
            onClick={ onClick }
            styleProps={ linkButtonStyle }
          />
        </>
      ) : (
        <Image
          alt={ description }
          src={ iconUrl }
          styleProps={ imageStyle }
        />
      ) }
    </Styled.IconBox>
  );
}
