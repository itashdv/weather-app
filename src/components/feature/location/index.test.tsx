import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Location } from './index';
import { useFetch } from '../../../hooks';

jest.mock('../../../hooks/useFetch');

const hooks = { useFetch }

const USE_FETCH = jest.spyOn(hooks, 'useFetch');

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

const location = { id: '1', url: 'url1' }

it('shows only loader on mount', () => {
  USE_FETCH.mockReturnValue({
    loading: true,
  });

  const { getByRole, queryByRole } = setup(<Location location={ location } />);

  const weatherComponent = queryByRole('article');

  expect(weatherComponent).toEqual(null);

  const errorComponent = queryByRole('alert');

  expect(errorComponent).toEqual(null);

  const loader = getByRole('status');

  expect(loader).toBeInTheDocument();
});

it('shows weather component when data is loaded', () => {
  USE_FETCH.mockReturnValue({
    loading: false,
    data: {
      name: 'Moscow',
      temp: 16,
      temp_max: 20,
      temp_min: 12,
      feels_like: 18,
      description: 'Scattered clouds',
      wind: 3,
      iconUrl: 'moscowWreather.png',
    }
  });

  const { getByRole, queryByRole } = setup(<Location location={ location } />);

  const loader = queryByRole('status');

  expect(loader).toEqual(null);

  const errorComponent = queryByRole('alert');

  expect(errorComponent).toEqual(null);

  const weatherComponent = getByRole('article');

  expect(weatherComponent).toBeInTheDocument();
});

it('shows only error if error occurred', () => {
  USE_FETCH.mockReturnValue({
    loading: false,
    error: { name: 'Server error', message: 'Something went wrong!' },
  });

  const { getByRole, queryByRole } = setup(<Location location={ location } />);

  const loader = queryByRole('status');

  expect(loader).toEqual(null);

  const weatherComponent = queryByRole('article');

  expect(weatherComponent).toEqual(null);

  const errorComponent = getByRole('alert');

  expect(errorComponent).toBeInTheDocument();
});
