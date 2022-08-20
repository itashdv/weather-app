import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useLocation } from '../../../hooks';
import { CurrentLocation } from './index';

jest.mock('../../../hooks/useLocation');

const hooks = { useLocation }
const USE_LOCATION = jest.spyOn(hooks, 'useLocation');

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

it('renders only loader on mount', () => {
  USE_LOCATION.mockReturnValue({ loading: true });

  const { getByRole, queryByRole } = setup(<CurrentLocation />);

  expect(getByRole('status')).toBeInTheDocument();

  expect(queryByRole('contentinfo')).toEqual(null);

  expect(queryByRole('alert')).toEqual(null);
});

it('renders only location when data is loaded', () => {
  USE_LOCATION.mockReturnValue({
    loading: false,
    data: [{ id: '1', url: 'url1' }],
  });

  const { getByRole, queryByRole } = setup(<CurrentLocation />);

  expect(getByRole('contentinfo')).toBeInTheDocument();

  expect(queryByRole('alert')).toEqual(null);
});

it('renders only error if error occurred', () => {
  USE_LOCATION.mockReturnValue({
    loading: false,
    error: {
      name: 'Geolocation error',
      message: 'User denied Geolocation',
    }
  });

  const { getByRole, queryByRole } = setup(<CurrentLocation />);

  expect(getByRole('alert')).toBeInTheDocument();

  expect(queryByRole('status')).toEqual(null);

  expect(queryByRole('contentinfo')).toEqual(null);
});
