import { useRouteError } from 'react-router-dom';

import { Heading } from '../../shared';

export const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  const headingStyle = {
    $align: 'center',
    $color: 'red',
    $size: '24px',
  }

  return (
    <div>
      <Heading styleProps={ headingStyle }>
        Nothing found here!
      </Heading>
    </div>
  );
}
