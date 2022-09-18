import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Weather } from './index';

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

const props = {
  description: 'Light rain',
  feelsLike: 12,
  iconUrl: 'londonIcon.png',
  max: 14,
  min: 9,
  name: 'London',
  onRemove: () => {},
  temp: 13,
  wind: 5,
  id: 'id123',
}

it('renders properly on initial mount', () => {
  const { getByText, queryByText } = setup(<Weather { ...props } />);

  expect(getByText('London')).toBeInTheDocument();

  expect(getByText('Light rain')).toBeInTheDocument();

  expect(getByText('13°C')).toBeInTheDocument();

  expect(getByText('Details')).toBeInTheDocument();

  expect(queryByText('Feels like: 12°C')).toEqual(null);

  expect(queryByText('Min. temp: 9°C')).toEqual(null);

  expect(queryByText('Max. temp: 14°C')).toEqual(null);

  expect(queryByText('Wind: 5 km/h')).toEqual(null);

  expect(queryByText('Minimize')).toEqual(null);
});

it('renders properly after clicking details button', async () => {
  const {
    getByAltText,
    getByRole,
    getByText,
    queryByText,
    user
  } = setup(<Weather { ...props } />);

  await user.click(getByText('Details'));

  expect(getByText('London')).toBeInTheDocument();

  expect(getByText('13°C')).toBeInTheDocument();

  expect(getByText('Light rain')).toBeInTheDocument();

  expect(getByText('Feels like: 12°C')).toBeInTheDocument();

  expect(getByText('Min. temp: 9°C')).toBeInTheDocument();

  expect(getByText('Max. temp: 14°C')).toBeInTheDocument();

  expect(getByText('Wind: 5 km/h')).toBeInTheDocument();

  expect(getByAltText('Light rain')).toBeInTheDocument();

  expect(getByText('Minimize')).toBeInTheDocument();

  expect(queryByText('Details')).toEqual(null);
});

it ('renders properly after clicking minimize button', async () => {
  const { getByText, queryByText, user } = setup(<Weather { ...props } />);

  await user.click(getByText('Details'));

  await user.click(getByText('Minimize'));

  expect(getByText('London')).toBeInTheDocument();

  expect(getByText('Light rain')).toBeInTheDocument();

  expect(getByText('13°C')).toBeInTheDocument();

  expect(getByText('Details')).toBeInTheDocument();

  expect(queryByText('Feels like: 12°C')).toEqual(null);

  expect(queryByText('Min. temp: 9°C')).toEqual(null);

  expect(queryByText('Max. temp: 14°C')).toEqual(null);

  expect(queryByText('Wind: 5 km/h')).toEqual(null);

  expect(queryByText('Minimize')).toEqual(null);
});
