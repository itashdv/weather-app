import { Heading } from '../../shared';

import * as Styled from './styles';

export const Header = () => {
  const headingStyle = {
    $align: 'center',
    $color: '#206993',
    $size: '24px',
  }

  return (
    <Styled.Header>
      <Heading role={ 'heading' } styleProps={ headingStyle }>
        Welcome to Weather App!
      </Heading>
    </Styled.Header>
  );
}
