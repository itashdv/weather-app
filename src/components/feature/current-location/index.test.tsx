import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CurrentLocation } from './index';
import { useLocation } from '../../../hooks';

jest.mock('../../../hooks/useLocation');

const hooks = { useLocation }

const USE_LOCATION = jest.spyOn(hooks, 'useLocation');

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

it('shows only loader on mount', () => {
  USE_LOCATION.mockReturnValue({
    loading: true,
  });

  const { getByRole, queryByRole } = setup(<CurrentLocation />);

  const errorComponent = queryByRole('alert');

  expect(errorComponent).toEqual(null);

  const location = queryByRole('contentinfo');

  expect(location).toEqual(null);

  const loader = getByRole('status');

  expect(loader).toBeInTheDocument();
});

it('shows location component when data is loaded', () => {
  USE_LOCATION.mockReturnValue({
    loading: false,
    data: [{ id: '1', url: 'url1' }],
  });

  const { getByRole, queryByRole } = setup(<CurrentLocation />);

  const errorComponent = queryByRole('alert');

  expect(errorComponent).toEqual(null);

  const location = getByRole('contentinfo');

  expect(location).toBeInTheDocument();
});

it('shows only error if error occurred', () => {
  USE_LOCATION.mockReturnValue({
    loading: false,
    error: {
      name: 'Geolocation error',
      message: 'User denied Geolocation',
    }
  });

  const { getByRole, queryByRole } = setup(<CurrentLocation />);

  const loader = queryByRole('status');

  expect(loader).toEqual(null);

  const location = queryByRole('contentinfo');

  expect(location).toEqual(null);

  const error = getByRole('alert');

  expect(error).toBeInTheDocument();
});
