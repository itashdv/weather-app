import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CurrentLocation } from './index';
import { useLocation } from '../../../hooks';

jest.mock('../../../hooks/useLocation');

const hooks = { useLocation }

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

it('shows loader on mount', () => {
  const USE_LOCATION = jest.spyOn(hooks, 'useLocation');

  USE_LOCATION.mockReturnValue({
    loading: true,
  });

  const { getByTestId } = setup(<CurrentLocation />);

  const loader = getByTestId('loading-true');

  expect(loader).toBeInTheDocument();
});

it('shows location after data is successfully loaded', () => {
  const USE_LOCATION = jest.spyOn(hooks, 'useLocation');
  
  USE_LOCATION.mockReturnValue({
    loading: false,
    data: [{ id: '1', url: 'url1' }],
  });

  const { getByRole } = setup(<CurrentLocation />);

  const location = getByRole('contentinfo');

  expect(location).toBeInTheDocument();
});

it('shows error if failed to fetch data', () => {
  const USE_LOCATION = jest.spyOn(hooks, 'useLocation');

  USE_LOCATION.mockReturnValue({
    loading: false,
    error: {
      name: 'Geolocation error',
      message: 'User denied Geolocation',
    }
  });

  const { getByRole } = setup(<CurrentLocation />);

  const error = getByRole('alert');

  expect(error).toBeInTheDocument();
});
