import { ReactElement } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search } from './index';

const setup = (jsx: ReactElement) =>
  ({ user: userEvent.setup(), ...render(jsx) });

it('has correct initial value', () => {
  const { getByPlaceholderText } = setup(<Search />);

  const searchInput = getByPlaceholderText('Search for location..');

  expect(searchInput).toHaveValue('');
});

it('focuses and types correctly', async () => {
  const { user, getByPlaceholderText } = setup(<Search />);

  const searchInput = getByPlaceholderText('Search for location..');

  await user.click(searchInput);

  expect(searchInput).toHaveFocus();

  await user.keyboard('Gaborone');

  expect(searchInput).toHaveValue('Gaborone');

  await user.clear(searchInput);

  expect(searchInput).toHaveValue('');
});
