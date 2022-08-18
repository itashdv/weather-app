import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CurrentLocation } from './index';

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

it('shows loader on mount', () => {
  const { user, getByTestId } = setup(<CurrentLocation />);

  const loader = getByTestId('loading-true');

  expect(loader).toBeInTheDocument();
});
