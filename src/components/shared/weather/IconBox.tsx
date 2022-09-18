import { Link } from 'react-router-dom';

import { CommonProps, IconProps, MinimizedProps } from '../../../types';
import { Heading, Image } from '../../shared';

import * as Styled from './styles';

type Props = {
  text: string;
  id: string;
}

export const IconBox = ({
  description,
  iconUrl,
  minimized,
  temp,
  text,
  id,
}: Props & CommonProps & IconProps & MinimizedProps) => {
  const headingStyle = {
    $color: '#fff',
    $size: '24px',
  }

  const imageStyle = {
    $height: '100px',
    $width: '100px',
  }

  const linkButtonStyle = {
    color: '#fff',
    size: '14px',
  }

  return (
    <Styled.IconBox>
      { minimized ? (
        <>
          <Heading styleProps={ headingStyle }>
            { temp }&deg;C
          </Heading>
          <Link
            style={ linkButtonStyle }
            to={ `/locations/${ id }` }
          >
            { text }
          </Link>
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
