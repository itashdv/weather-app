import { ReactNode } from 'react';

import { Text } from '../text';

type Props = {
  children: ReactNode;
}

export const ErrorMessage = ({ children }: Props) => {
  
  const errorTextStyle = { $align: 'center', $color: 'red', $size: '16px' }

  return <Text role="alert" styleProps={ errorTextStyle }>{children}</Text>;
}
